using Controversl.API.Gemini.Models;

namespace Controversl.API.Gemini;

public static class GeminiRequestFactory
{
    public static GeminiRequest CreateRequest(string prompt)
    {
        return new GeminiRequest
        {
            Contents = [
                new GeminiContent
                {
                    Role = "user",
                    Parts = [
                            new GeminiPart
                            {
                                Text = prompt
                            }
                        ]
                    }
                ],
            GenerationConfig = new GenerationConfig
            {
                Temperature = 1,
                TopK = 1,
                TopP = 1,
                MaxOutputTokens = 2048,
                ResponseMimeType = "application/json",
                StopSequences = new List<object>()
            },
            SafetySettings = [
                new SafetySettings
                {
                    Category = "HARM_CATEGORY_HARASSMENT",
                    Threshold = "BLOCK_ONLY_HIGH"
                },
                new SafetySettings
                {
                    Category = "HARM_CATEGORY_HATE_SPEECH",
                    Threshold = "BLOCK_ONLY_HIGH"
                },
                new SafetySettings
                {
                    Category = "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                    Threshold = "BLOCK_ONLY_HIGH"
                },
                new SafetySettings
                {
                    Category = "HARM_CATEGORY_DANGEROUS_CONTENT",
                    Threshold = "BLOCK_ONLY_HIGH"
                }
            ]
        };
    }
}
