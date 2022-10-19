using ApplicationServices.Services;
using Common.Responses;
using Microsoft.AspNetCore.Mvc;
using WebApi.Interfaces;

namespace WebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class CalculatorController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<CalculatorController> _logger;
    private readonly CalculatorAppService _calculatorAppService;

    public CalculatorController(ILogger<CalculatorController> logger)
    {
        _logger = logger;
        _calculatorAppService = new CalculatorAppService();
    }

    [HttpGet]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateTime.Now.AddDays(index),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }

    /// <summary>
    /// Caluclates a tenant's rent profile
    /// </summary>
    /// <returns>The calculation result</returns>
    [HttpPost]
    public TenantRentProfileResult Calculation([FromBody] TenantRentProfileRequest calculationInput)
    {
        return this._calculatorAppService.Calculate(calculationInput);
    }
}
