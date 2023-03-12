using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
  public interface IBaseServices<TEntity> where TEntity : BaseEntity
  {
    TEntity Add(TEntity inputModel);

    void Delete(int id);

    IEnumerable<TEntity> Get();

    TEntity GetById(int id);

    TEntity Update(TEntity inputModel);


  }
}
