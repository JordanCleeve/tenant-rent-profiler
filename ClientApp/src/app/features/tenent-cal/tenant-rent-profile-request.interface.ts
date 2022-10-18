export interface TenantRentProfileRequest {
  /**
   * The sales made in year one
   */
  yearOneSales: number;

  /**
   * The percent of grow of sales after year 1
   */
  salesGrowth: number;

  /**
   * The base rent for years 1 to 5
   */
  rent1to5: number;

  /**
   * The base rent for years 6 to 10
   */
  rent6to10: number;

  /**
   * The percentage of rent applied for the tier 1 range
   */
  percentageRentTier1: number;

  /**
   * The percentage of rent applied for the tier 2 range
   */
  percentageRentTier2: number;

  /**
   * The percentage of rent applied for the tier 3 range
   */
  percentageRentTier3: number;
}
