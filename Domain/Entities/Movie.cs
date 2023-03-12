using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
  public class Movie : BaseEntity
  {
    public string Titulo { get; set; }
    public string Sinopse { get; set; }
    public int AnoLancamento { get; set; }
    public int Duracao { get; set; }
    public string Poster { get; set; }

  }
}
