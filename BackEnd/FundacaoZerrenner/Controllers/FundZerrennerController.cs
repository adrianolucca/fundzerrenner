using Domain.Entities;
using Domain.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FundacaoZerrenner.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class FundZerrennerController : ControllerBase
  {
    private IBaseServices<Movie> _baseService;

    public FundZerrennerController(IBaseServices<Movie> baseService)
    {
      _baseService = baseService;
    }
    // GET: api/<FundZerrennerController>
    [HttpGet]
    public IActionResult Get()
    {
      return Execute(() => _baseService.Get());
    }

    // GET api/<FundZerrennerController>/5
    [HttpGet("{id}")]
    public IActionResult Get(int id)
    {
      if (id == 0)
        return NotFound();

      return Execute(() => _baseService.GetById(id));
    }

    // POST api/<FundZerrennerController>
    [HttpPost]
    public IActionResult Post([FromBody] Movie movie)
    {
      if (movie == null)
        return NotFound();

      return Execute(() => _baseService.Add(movie));
    }

    // PUT api/<FundZerrennerController>/5
    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody] Movie movie)
    {
      if (movie == null)
        return NotFound();

      return Execute(() => _baseService.Update(movie));
    }

    // DELETE api/<FundZerrennerController>/5
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      if (id == 0)
        return NotFound();

      Execute(() =>
      {
        _baseService.Delete(id);
        return true;
      });

      return new NoContentResult();
    }
    private IActionResult Execute(Func<object> func)
    {
      try
      {
        var result = func();

        return Ok(result);
      }
      catch (Exception ex)
      {
        return BadRequest(ex);
      }
    }
  }
}
