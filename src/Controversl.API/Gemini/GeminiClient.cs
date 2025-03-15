using Controversl.API.Gemini.Models;
using Controversl.API.Gemini.Options;
using Controversl.API.Interfaces;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Text;
using System.Web;

namespace Controversl.API.Gemini;

public class GeminiClient : IGenerationClient
{
    private readonly HttpClient _httpClient;
    private readonly GeminiSettings _geminiOptions;
    private readonly JsonSerializerSettings _serializerSettings = new()
    {
        ContractResolver = new DefaultContractResolver
        {
            NamingStrategy = new SnakeCaseNamingStrategy()
        }
    };
    private readonly ILogger<GeminiClient> _logger;

    public GeminiClient(HttpClient httpClient, IOptions<GeminiSettings> geminiOptions, ILogger<GeminiClient> logger)
    {
        _httpClient = httpClient;
        _geminiOptions = geminiOptions.Value;
        _logger = logger;
    }

    public async Task<string?> GenerateContentAsync(string prompt, CancellationToken cancellationToken = default)
    {
        var request = GeminiRequestFactory.CreateRequest(prompt);

        var requestJson = JsonConvert.SerializeObject(request, Newtonsoft.Json.Formatting.None, _serializerSettings);

        using var content = new StringContent(requestJson, Encoding.UTF8, "application/json");

        var response = await _httpClient.PostAsync(GetApiUri(), content, cancellationToken);

        if (!response.IsSuccessStatusCode)
        {
            var errorDetails = await response.Content.ReadAsStringAsync(cancellationToken);
            _logger.LogError("Error occurred while generating content. Status Code: {StatusCode}, Details: {ErrorDetails}", response.StatusCode, errorDetails);
        }
        
        response.EnsureSuccessStatusCode();

        var responseBody = await response.Content.ReadAsStringAsync(cancellationToken);

        var geminiResponse = JsonConvert.DeserializeObject<GeminiResponse>(responseBody);

        var geminiResponseText = geminiResponse?.Candidates.FirstOrDefault()?.Content.Parts.FirstOrDefault()?.Text;

        return geminiResponseText;
    }

    private Uri GetApiUri()
    {
        var uriBuilder = new UriBuilder(_geminiOptions.Url);

        var query = HttpUtility.ParseQueryString(uriBuilder.Query);
        query["key"] = _geminiOptions.Key;

        uriBuilder.Query = query.ToString();

        return uriBuilder.Uri;
    }
}
