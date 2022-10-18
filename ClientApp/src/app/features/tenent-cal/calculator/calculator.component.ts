import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CalculatorService } from '../calculator.service';
import { TenantRentProfileResponse } from '../tenant-rent-profile-response.interface';

/**
 * Describes the single select option
 */
interface SelectOption {
  /**
   * A value used for processing
   */
  value: number;

  /**
   * The valuye displayed on the screen
   */
  viewValue: string;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  /**
   * The calculator form model
   */
  form: FormGroup;

  /**
   * The response for a calculation
   */
  calculationResponse: TenantRentProfileResponse = {
    percentageRentTier1: [],
    percentageRentTier2: [],
    percentageRentTier3: [],
    totalPercentageRents: [],
  };

  /**
   * True if the result year fileter is disabled
   */
  disableResultInputs: boolean = true;

  /**
   * The year selctions
   */
  yearSelections: SelectOption[] = Array.from(Array(10).keys()).map(
    (number) => ({
      value: number,
      viewValue: `Year ${number + 1}`,
    })
  );

  /**
   * The selected year in the results control
   */
  selectedYear: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private calculatorService: CalculatorService
  ) {
    this.form = this.formBuilder.group({
      yearOneSales: ['', Validators.required],
      salesGrowth: ['', Validators.required],
      rent1to5: ['', Validators.required],
      rent6to10: ['', Validators.required],
      percentageRentTier1: ['', Validators.required],
      percentageRentTier2: ['', Validators.required],
      percentageRentTier3: ['', Validators.required],
    });
  }

  get slider(): FormControl {
    return this.form.get('salesGrowth') as FormControl;
  }

  set slider(val: unknown) {
    this.form.get('salesGrowth')?.patchValue(val);
  }

  get slidert1(): FormControl {
    return this.form.get('percentageRentTier1') as FormControl;
  }

  set slidert1(val: unknown) {
    this.form.get('percentageRentTier1')?.patchValue(val);
  }

  get slidert2(): FormControl {
    return this.form.get('percentageRentTier2') as FormControl;
  }

  set slidert2(val: unknown) {
    this.form.get('percentageRentTier2')?.patchValue(val);
  }

  get slidert3(): FormControl {
    return this.form.get('percentageRentTier3') as FormControl;
  }

  set slidert3(val: unknown) {
    this.form.get('percentageRentTier3')?.patchValue(val);
  }

  /**
   * Fornmats a sliders value for display as a percent
   */
  formatLabel(value: number) {
    return `${value}%`;
  }

  calculate() {
    this.calculatorService
      .calculateTenantRentProfile(this.form.value)
      .subscribe((res) => {
        this.calculationResponse = res;
        this.form.reset();
        this.disableResultInputs = false;
      });
  }
}
