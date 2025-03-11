namespace Controversl.API.Gemini.Options;

public class GeminiSettings
{
    public const string SectionName = nameof(GeminiSettings);

    public string Key { get; init; }

    public string Url { get; init; }
}
