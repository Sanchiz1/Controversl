namespace Controversl.API.Gemini.Models;

public record GeminiResponse
{
    public Candidate[] Candidates { get; init; }
    public PromptFeedback PromptFeedback { get; init; }
}

public record PromptFeedback
{
    public SafetyRating[] SafetyRatings { get; init; }
}

public record Candidate
{
    public Content Content { get; init; }
    public string FinishReason { get; init; }
    public int Index { get; init; }
    public SafetyRating[] SafetyRatings { get; init; }
}

public record Content
{
    public Part[] Parts { get; init; }
    public string Role { get; init; }
}

public record Part
{
    public string Text { get; init; }
}

public record SafetyRating
{
    public string Category { get; init; }
    public string Probability { get; init; }
}
