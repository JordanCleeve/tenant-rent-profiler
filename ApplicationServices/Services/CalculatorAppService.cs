using ApplicationServices.Models;
using Common.Responses;
using WebApi.Interfaces;

namespace ApplicationServices.Services
{
    public class CalculatorAppService
    {

        public TenantRentProfileResult Calculate(TenantRentProfileRequest input)
        {
            var calculator = new TenantRentProfiler(input);

            return calculator.SolveWorldHunger();
        }
    }
}
