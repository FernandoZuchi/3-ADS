namespace AtletaApi;

public static class AtletaEndpoints
{
    internal static void AdicionarAtletaEndpoints(this WebApplication app)
    {
        app.MapGet("/", () => 
        "Olá mundo!"
      );
    }
}
