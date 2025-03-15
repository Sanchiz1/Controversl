using System.Collections.Specialized;
using System.Text.RegularExpressions;

namespace Controversl.API.Extensions;

public static class SystemExtensions
{
    public static string ReplaceTags(this string input, NameValueCollection replaceTags)
    {
        return Regex.Replace(input, @"\[(?<name>[^\]\n]+)\]", match =>
        {
            var name = match.Groups["name"].Value;
            var value = replaceTags[name];
            return value;
        }, RegexOptions.None, matchTimeout: TimeSpan.FromMilliseconds(100));
    }
}
