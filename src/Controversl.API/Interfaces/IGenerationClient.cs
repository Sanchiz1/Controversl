namespace Controversl.API.Interfaces;

public interface IGenerationClient
{
    Task<string?> GenerateContentAsync(string prompt, CancellationToken cancellationToken);
}
