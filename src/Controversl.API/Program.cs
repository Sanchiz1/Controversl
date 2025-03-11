using Controversl.API.Gemini;
using Controversl.API.Gemini.Options;
using Controversl.API.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

builder.Services.AddOptions<GeminiSettings>()
    .BindConfiguration(GeminiSettings.SectionName);

builder.Services.AddHttpClient<GeminiClient>();

builder.Services.AddSingleton<QuizService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.MapGet("/generateQuiz", async (QuizService quizService, CancellationToken cancellationToken)
    => await quizService.GenerateQuizAsync(cancellationToken))
.WithName("generateQuiz");

app.Run();
