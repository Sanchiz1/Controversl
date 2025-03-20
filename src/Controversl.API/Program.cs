using Controversl.API.Gemini;
using Controversl.API.Gemini.Options;
using Controversl.API.Middleware;
using Controversl.API.Services;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddSwaggerGen();

builder.Services.AddOptions<GeminiSettings>()
    .BindConfiguration(GeminiSettings.SectionName);

builder.Services.AddHttpClient<GeminiClient>();

builder.Services.AddSingleton<QuizService>();

builder.Services.AddCors(options => options.AddDefaultPolicy(policy =>
        policy.AllowAnyOrigin()
        .AllowAnyHeader()
        .AllowAnyMethod()));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();

app.MapGet("/generateQuiz", async (QuizService quizService, CancellationToken cancellationToken)
    => await quizService.GenerateQuizAsync(cancellationToken))
.WithName("generateQuiz");

app.MapGet("/generateQuizByTheme", async ([FromQuery] string theme, QuizService quizService, CancellationToken cancellationToken)
    => await quizService.GenerateQuizByThemeAsync(theme, cancellationToken))
.WithName("generateQuizByTheme");

app.UseMiddleware<ExceptionHandlingMiddleware>();

app.Run();
