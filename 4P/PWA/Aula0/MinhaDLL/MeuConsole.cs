using System;

namespace MinhaDLL;

public static class MeuConsole
{
    public static void EscrevaLinha(this string texto, params string[] args)
    {
        for (var i = 0; i < args.Length; i++)
        {
            texto = texto.Replace('{' + i.ToString() + '}', args[i]);
        }
        Console.WriteLine(texto);
    }

    public static string InicialMaiscula(this string texto)
    {
        if (texto == null || texto.Length == 0)
        {
            return "";
        }

        if (texto.Length == 1)
        {
            return Char.ToUpper(texto[0]).ToString();
        }

        // return Char.ToUpper(texto[0]) + texto.Substring(1);
        return Char.ToUpper(texto[0]) + texto[1..];
    }
}
