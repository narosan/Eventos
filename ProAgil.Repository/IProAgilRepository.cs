using System.Threading.Tasks;
using ProAgil.Domain;

namespace ProAgil.Repository
{
    public interface IProAgilRepository
    {
         void Add<T>(T entity) where T : class;
         void Delete<T>(T entity) where T : class;
         void Update<T>(T entity) where T : class;
         Task<bool> SaveChangesAsync();

         //Eventos
         Task<Evento[]> GetAllEventoAsync(bool includePalestrantes);
         Task<Evento[]> GetAllEventoByTema(string tema, bool includePalestrantes);
         Task<Evento> GetEventoById(int eventoId, bool includePalestrantes);

         //Palestrantes
         Task<Palestrante[]> GetAllPalestranteAsync(bool includeEventos);
         Task<Palestrante[]> GetAllPalestranteByName(string nome, bool includeEventos);
         Task<Palestrante> GetPalestranteById(int palestranteId, bool includeEventos);
    }
}