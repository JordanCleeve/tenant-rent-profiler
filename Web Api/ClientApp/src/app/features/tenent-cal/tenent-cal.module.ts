import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CalculatorComponent } from './calculator/calculator.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CalculatorService } from './calculator.service';
import { MatSelectModule } from '@angular/material/select';
import { TenantProfileComponent } from './tenant-profile/tenant-profile.component';

@NgModule({
  declarations: [CalculatorComponent, TenantProfileComponent],
  providers: [CalculatorService],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CalculatorComponent,
      },
    ]),
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatSliderModule,
    MatTooltipModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
})
export class TenentCalModule {}
