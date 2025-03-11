using Controversl.API.Exceptions;
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
        {
            throw new InvalidQuizException("Failed to generate quiz content.");
        }

        var quiz = JsonConvert.DeserializeObject<IEnumerable<QuizElement>>(content);

        if (quiz == null || !quiz.Any())
        {
            throw new InvalidQuizException("Failed to deserialize quiz content.");
        }

        return quiz;
    }
}
