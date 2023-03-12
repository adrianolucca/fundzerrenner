using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infra.Data.Context
{
  public class FundZerrennerContext: DbContext
  {
    protected readonly IConfiguration Configuration;
    public FundZerrennerContext(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
      // connect to sql server with connection string from app settings
      options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
    }

    public DbSet<Movie> Movies { get; set; }
  }
}
