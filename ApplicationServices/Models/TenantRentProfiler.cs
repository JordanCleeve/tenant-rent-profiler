using Common.Responses;
using WebApi.Interfaces;

namespace ApplicationServices.Models
{
    public class TenantRentProfiler
    {
        private TenantRentProfileRequest input;

        public TenantRentProfiler(TenantRentProfileRequest input)
        {
            this.input = input;
        }

        public TenantRentProfileResult SolveWorldHunger()
        {
            var result = new TenantRentProfileResult
            {
                PercentageRentTier1 = new List<decimal>(new decimal[10]),
                PercentageRentTier2 = new List<decimal>(new decimal[10]),
                PercentageRentTier3 = new List<decimal>(new decimal[10]),
                TotalPercentageRents = new List<decimal>(new decimal[10]),
            };

            Enumerable.Range(1, 10).ToList().ForEach(year =>
            {
                var baseRent = year < 6 ? input.Rent1to5 : input.Rent6to10;
                 var yearIndex = year - 1;

                var salesForYear = input.YearOneSales * (decimal)Math.Pow((double)input.SalesGrowth / 100, (double)year - 1);

                var tier1Threshhold = baseRent * 0.02m;
                var tier2Threshhold = 0m;
                var tier3Threshhold = 0m;

                // Tier 1
                if (salesForYear > tier1Threshhold)
                {
                    tier2Threshhold = baseRent * 0.04m;
                    var rent = Math.Clamp(salesForYear - tier1Threshhold, 0, tier2Threshhold) * input.PercentageRentTier1;
                    result.PercentageRentTier1[yearIndex] = rent;
                    result.TotalPercentageRents[yearIndex] += rent;
                }
                else
                {
                    return;
                }

                // Tier 2
                if (salesForYear > tier2Threshhold)
                {
                    tier3Threshhold = baseRent * 0.02m;
                    var rent = Math.Clamp(salesForYear - tier2Threshhold, 0, tier3Threshhold) * input.PercentageRentTier2;
                    result.PercentageRentTier2[year - 1] = rent;
                    result.TotalPercentageRents[yearIndex] += result.PercentageRentTier2[year - 1];
                }
                else
                {
                    return;
                }

                // Tier 3
                if (salesForYear > tier3Threshhold)
                {
                    var rent = (salesForYear - tier3Threshhold) * input.PercentageRentTier3;
                    result.PercentageRentTier3[year - 1] = rent;
                    result.TotalPercentageRents[yearIndex] += result.PercentageRentTier3[year - 1];
                }
            });


            return result;
        }
    }
}
