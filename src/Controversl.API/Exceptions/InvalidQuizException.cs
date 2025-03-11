namespace Controversl.API.Exceptions;

public class InvalidQuizException : Exception
{
    public InvalidQuizException()
    {
    }

    public InvalidQuizException(string message) : base(message)
    {
    }

    public InvalidQuizException(string message, Exception innerException) : base(message, innerException)
    {
    }
}
