a,b = [int(v) for v in input().split()]
c = [int(v) for v in input().split()]
d = [int(v) for v in input().split()]

def binary_search_ite(vet, num):
	esquerda, direita, tentativa = 0, len(vet), 1
	while True:
		meio = (esquerda + direita) // 2
		aux_num = vet[meio]
		if num == aux_num:
			return meio
		elif num > aux_num:
			esquerda = meio
		else:
			direita = meio
		tentativa += 1

contador = 0
indice = 0
for i in range (b):
        j = binary_search_ite(c, d[i])
        contador = contador + abs(indice-j)
        indice = j
print (contador)