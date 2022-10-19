namespace Common.Responses
{
    public class TenantRentProfileResult
    {
        public List<decimal> PercentageRentTier1 { get; set; }
        public List<decimal> PercentageRentTier2 { get; set; }
        public List<decimal> PercentageRentTier3 { get; set; }
        public List<decimal> TotalPercentageRents { get; set; }
    }
}
