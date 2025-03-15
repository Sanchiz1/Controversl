using System.Collections.Specialized;
using Controversl.API.Exceptions;
using Controversl.API.Extensions;
using Controversl.API.Gemini;
using Controversl.API.Models;
using Newtonsoft.Json;

namespace Controversl.API.Services;

public class QuizService
{
    private readonly GeminiClient _geminiClient;

    public QuizService(GeminiClient geminiClient)
    {
        _geminiClient = geminiClient;
    }

    public async Task<IEnumerable<QuizElement>> GenerateQuizAsync(CancellationToken cancellationToken = default)
    {
        var prompt = Properties.Prompts.GenerateQuizPrompt;

        var content = await _geminiClient.GenerateContentAsync(prompt, cancellationToken);

        if (string.IsNullOrEmpty(content))
            throw new InvalidQuizException("Failed to generate quiz content.");

        var quiz = JsonConvert.DeserializeObject<IEnumerable<QuizElement>>(content);

        if (quiz == null || !quiz.Any())
            throw new InvalidQuizException("Failed to deserialize quiz content.");

        return quiz;
    }

    public async Task<IEnumerable<QuizElement>> GenerateQuizByThemeAsync(string theme, CancellationToken cancellationToken = default)
    {
        var replaseTags = new NameValueCollection(1)
            {
                { "UserTheme", theme }
            };

        var prompt = Properties.Prompts.GenerateQuizByThemePrompt.ReplaceTags(replaseTags);

        var content = await _geminiClient.GenerateContentAsync(prompt, cancellationToken);

        if (string.IsNullOrEmpty(content))
            throw new InvalidQuizException("Failed to generate quiz content.");

        var quiz = JsonConvert.DeserializeObject<IEnumerable<QuizElement>>(content);

        if (quiz == null || !quiz.Any())
            throw new InvalidQuizException("Failed to deserialize quiz content.");

        return quiz;
    }
}
