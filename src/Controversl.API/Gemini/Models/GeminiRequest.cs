namespace Controversl.API.Gemini.Models;

public record GeminiRequest
{
    public GeminiContent[] Contents { get; init; }
    public GenerationConfig GenerationConfig { get; init; }
    public SafetySettings[] SafetySettings { get; init; }
}

public record GeminiContent
{
    public string Role { get; init; }
    public GeminiPart[] Parts { get; init; }
}

public record GeminiPart
{
    public string Text { get; init; }
}

public record GenerationConfig
{
    public int Temperature { get; init; }
    public int TopK { get; init; }
    public int TopP { get; init; }
    public int MaxOutputTokens { get; init; }
    public string ResponseMimeType { get; init; }
    public List<object> StopSequences { get; init; }
}

public record SafetySettings
{
    public string Category { get; init; }
    public string Threshold { get; init; }
}
