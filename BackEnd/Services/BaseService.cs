using Domain.Entities;
using Domain.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class BaseService<TEntity> : IBaseServices<TEntity> where TEntity : BaseEntity
  {
    private readonly IBaseRepository<TEntity> _baseRepository;  

    public BaseService(IBaseRepository<TEntity> baseRepository)
    {
      _baseRepository = baseRepository;     
    }

    public TEntity Add(TEntity inputModel) 
    {       
      _baseRepository.Insert(inputModel);     

      return inputModel;
    }

    public void Delete(int id) => _baseRepository.Delete(id);

    public IEnumerable<TEntity> Get()
    {
      var entities = _baseRepository.Select();  
      return entities;
    }

    public TEntity GetById(int id)    {
      var entity = _baseRepository.Select(id);  

      return entity;
    }

    public TEntity Update(TEntity inputModel)        
    {
      _baseRepository.Update(inputModel);      

      return inputModel;
    }   
  }
}
