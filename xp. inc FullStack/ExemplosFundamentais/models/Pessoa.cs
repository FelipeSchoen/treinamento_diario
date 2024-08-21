using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExemplosFundamentais.models
{
    public class Pessoa
    {
        public string Nome { get; set; }
        public int Idade { get; set; }

         public void Apresentar()
        {
            Console.WriteLine($"Olá, meu nome é {Nome}, e tenho {Idade} anos");
            //para pular linha na construção do código sem apresentar em tela é necessario acrescentar "+" em seguida continuar o codigo não esqucer $" 
            //Console.WriteLine($"Olá, meu nome é {Nome}, " 
            //+ $"e tenho {Idade} anos");

            //para pular linha na apresentação em tela é só utilizar /n conforme modelo abaixo
            //Console.WriteLine($"Olá, meu nome é {Nome}, /n e tenho {Idade} anos");
        }
        
    }
}