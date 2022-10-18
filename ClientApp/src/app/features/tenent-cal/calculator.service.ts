import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TenantRentProfileRequest } from './tenant-rent-profile-request.interface';
import { TenantRentProfileResponse } from './tenant-rent-profile-response.interface';

@Injectable()
export class CalculatorService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string
  ) {}

  calculateTenantRentProfile(
    request: TenantRentProfileRequest
  ): Observable<TenantRentProfileResponse> {
    return this.http.post<TenantRentProfileResponse>(
      this.baseUrl + 'calculator',
      request
    );
  }
}
