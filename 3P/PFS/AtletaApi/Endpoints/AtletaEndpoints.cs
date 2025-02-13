using System.Reflection;
using System.Text.Json;

namespace AtletaApi;

public static class AtletaEndpoints
{
    static AtletaEndpoints()
    {
      caminho = Path.Combine(
        Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location)!,
        "dados",
        "atletas.json"
      );

      if(!File.Exists(caminho))
      {
        objetos = [];
        return;
      }

      var conteudo = File.ReadAllText(caminho);

      if (string.IsNullOrEmpty(conteudo))
      {
        objetos = [];
        return;
      }

      objetos = JsonSerializer.Deserialize<IList<Atleta>>(conteudo) ?? [];
    }

    private static void SalvarDados()
    {
      var pasta = Path.GetDirectoryName(caminho);
      if (!Directory.Exists(pasta))
        Directory.CreateDirectory(pasta);

      File.WriteAllText(caminho, JsonSerializer.Serialize(objetos));
    }

    internal static void AdicionarAtletaEndpoints(this WebApplication app)
    {
        app.MapGet("/atletas", Get);
        app.MapGet("/atletas/{id}", GetById);
        app.MapPost("/atletas", Post);
        app.MapPut("/atletas/{id}", Put);
        app.MapDelete("/atletas/{id}", Delete);
    }

    public static IResult Get()
    {
      return objetos == null ? TypedResults.NotFound() :  TypedResults.Ok(objetos);
    }

    public static IResult GetById(long id)
    {
      var obj = objetos.FirstOrDefault(x => x.Id == id);

      if(obj == null)
        return TypedResults.NotFound();

      return TypedResults.Ok(obj);
    }

    public static IResult Post(Atleta obj)
    {
      obj.Id = (objetos.MaxBy(x => x.Id) ?? new Atleta()).Id + 1;
      objetos.Add(obj);
      SalvarDados();
      return TypedResults.Created($"/atletas/{obj.Id}", obj);
    } 

    public static IResult Put(long id, Atleta obj)
    {
      if (obj == null || obj.Id != id)
        return TypedResults.BadRequest();
      
      var objOriginal = objetos.FirstOrDefault(x => x.Id == id);

      if (objOriginal == null)
        return TypedResults.NotFound();

      objOriginal.Nome = obj.Nome;
      objOriginal.Altura = obj.Altura;
      objOriginal.Peso = obj.Peso;

      SalvarDados();

      return TypedResults.NoContent();
      
    }

    public static IResult Delete(long id)
    {
      var objOriginal = objetos.FirstOrDefault(x => x.Id == id);

      if(objOriginal == null)
        return TypedResults.NotFound();
      
      objetos.Remove(objOriginal);

      SalvarDados();

      return TypedResults.NoContent();
    }

    private static readonly IList<Atleta> objetos = [];

    private static readonly string caminho;
}
