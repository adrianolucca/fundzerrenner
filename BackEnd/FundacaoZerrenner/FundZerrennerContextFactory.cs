using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore;
using Infra.Data.Context;

namespace FundacaoZerrenner
{
  //public class FundZerrennerContextFactory : IDesignTimeDbContextFactory<FundZerrennerContext>
  //{
  //  public FundZerrennerContext CreateDbContext(string[] args)
  //  {
  //    var config = new ConfigurationBuilder()
  //        .SetBasePath(Directory.GetCurrentDirectory())
  //        .AddJsonFile("appsettings.json")
  //        .Build();

  //    var builder = new DbContextOptionsBuilder<FundZerrennerContext>()
  //        .UseSqlServer(config.GetConnectionString("DefaultConnection"),
  //        b => b.MigrationsAssembly("Infra.Data"));

  //    return new FundZerrennerContext(builder.Options);
  //  }
  //}
}
