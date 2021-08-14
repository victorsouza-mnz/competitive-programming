testes=int(input())

for i in range(testes):
    n,m = input().split()               # ler numero de vertices e arestas
    n = int(n)
    m = int(m)
    n_out = [[] * n for i in range(n)]  # definir listas de adjacencia
    for j in range(m):                  # ler as m arestas do digrafo
        a,b = input().split()           # ler aresta de a para b
        a = int(a)
        b = int(b)
        n_out[a-1].append(b-1)          # acrescentar b como vizinho de saida de a
    marca = n * [0]                     # definir o vetor de marcacao
    ciclo = False                       # inicializar variavel ciclo
    for a in range(n):
        if marca[a] == 0:
            pilha = [a]
            while pilha != [] and not ciclo:
                v = pilha[len(pilha)-1]
                marca[v] = 1
                if n_out[v] != []:
                    for w in n_out[v]:
                        del n_out[v][0]
                        if marca[w] == 0:
                            pilha.append(w)
                            break
                        elif w in pilha:
                            ciclo = True
                else:
                    pilha.pop()
    if ciclo:
        print('SIM')
    else:
        print('NAO')
