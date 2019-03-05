using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using myApi.Models;

namespace myApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private static List<Product> Products = new List<Product>
        {
            new Product{
                Id="001",
                Name="แอปเปิ้ล",
                Price=30
            },
            new Product{
                Id="002",
                Name="กล้วย",
                Price=20
            },
            new Product{
                Id="003",
                Name="ส้ม",
                Price=25
            },
        };
        [HttpGet]
        public List<Product> GetAllProduct()
        {
            return Products;
        }

        [HttpGet("{id}")]
        public Product GetProduct(string id)
        {
            return Products.Find(it => it.Id == id);
        }

         [HttpPost]
        public void CreateProduct([FromBody]Product newProduct)
        {
            newProduct.Id = Guid.NewGuid().ToString();
            Products.Add(newProduct);
        }

    }
}
