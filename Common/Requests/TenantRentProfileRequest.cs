using System.ComponentModel.DataAnnotations;

namespace WebApi.Interfaces
{
    public class TenantRentProfileRequest
    {
        [Required]
        public decimal YearOneSales { get; set; }

        [Required]
        public decimal SalesGrowth { get; set; }

        [Required]
        public decimal Rent1to5 { get; set; }

        [Required]
        public decimal Rent6to10 { get; set; }

        [Required]
        public decimal PercentageRentTier1 { get; set; }

        [Required]
        public decimal PercentageRentTier2 { get; set; }

        public decimal PercentageRentTier3 { get; set; }
    }
}
