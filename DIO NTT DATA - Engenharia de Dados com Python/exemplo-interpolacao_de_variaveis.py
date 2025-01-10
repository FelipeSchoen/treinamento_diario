#EXEMPLO OLD STYLE%
nome = "Felipe"
idade = 35
profissao = "Programador"
Linguagem = "Python"

print("Olá, me chamo %s. Eu tenho %d anod de idade, trabalho como %s e estou matriculado no curso de %s." %(nome, idade, profissao, Linguagem))


#METODO FORMAT {}
nome = "Felipe"
idade = 35
profissao = "Programador"
Linguagem = "Python"

print("Olá, me chamo {}. Eu tenho {} anod de idade, trabalho como {} e estou matriculado no curso de {}." .format(nome, idade, profissao, Linguagem))

print("Olá, me chamo {3}. Eu tenho {2} anod de idade, trabalho como {1} e estou matriculado no curso de {0}." .format( Linguagem, profissao, idade, nome))

print("Olá, me chamo {nome}. Eu tenho {idade} anod de idade, trabalho como {profissao} e estou matriculado no curso de {Linguagem}." .format(nome=nome, idade=idade, profissao=profissao, Linguagem=Linguagem))


#dicionário - veremos o exemplo em breve
print("Olá, me chamo {3}. Eu tenho {2} anod de idade, trabalho como {1} e estou matriculado no curso de {0}." .format(**pessoa))


####  f-string - é colocado um f antes da impressão e o nome da variavel em seu respectivo lugar

print(f"Olá, me chamo {nome}. Eu tenho {idade} anod de idade, trabalho como {profissao} e estou matriculado no curso de {Linguagem}.")


##  formatar strings com f-string

PI = 3.14159

print(f" Valor de PI: {PI:.2f}")

print(f" Valor de PI: {PI:10.2f}")
