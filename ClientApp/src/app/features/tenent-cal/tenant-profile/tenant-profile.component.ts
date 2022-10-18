import { Component, Input, OnInit } from '@angular/core';
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
  selector: 'app-tenant-profile',
  templateUrl: './tenant-profile.component.html',
  styleUrls: ['./tenant-profile.component.css'],
})
export class TenantProfileComponent {
  @Input()
  profile!: TenantRentProfileResponse;

  @Input()
  /**
   * True if the result year fileter is disabled
   */
  disableResultInputs!: boolean;

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
}
