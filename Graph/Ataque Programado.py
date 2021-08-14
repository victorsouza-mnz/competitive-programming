#https://www.urionlinejudge.com.br/judge/pt/runs/code/23882478

# solução recursiva runtime error

def acharTodasOrdensTopologicas(grafo, contadorDeCaminho, visitado, n, grauDeEntrada, listaDeRefens, listaDeSoldados, s):
    global possivel
    for v in range (n):
        if(grauDeEntrada[v] == 0 and not visitado[v] and s > listaDeSoldados[v]):

            for u in grafo[v]:
                grauDeEntrada[u] -= 1
            
            contadorDeCaminho += 1
            visitado[v] = True
            acharTodasOrdensTopologicas(grafo, contadorDeCaminho, visitado, n, grauDeEntrada, listaDeRefens, listaDeSoldados, s+listaDeRefens[v])
            if (possivel == True):
                return

            for u in grafo[v]:
                grauDeEntrada[u] += 1
            
            contadorDeCaminho -= 1
            visitado[v] = False

    if (contadorDeCaminho == n):
        print('POSSIVEL')
        possivel = True




n,m,s = [int(x) for x in input().split()]

while(n != 0) :

    grafo = [[] for _ in range(n)]


    listaDeSoldados = [int(x) for x in input().split()] 
    listaDeRefens = [int(x) for x in input().split()]

    possivel = False

    grauDeEntrada = [0] * n                         # quantos vizinho de entrada tem em cada nó

    for _ in range (m):
        origem, destino = [int(x) for x in input().split()]
        origem -= 1
        destino -= 1
        grafo[origem].append(destino)
        grauDeEntrada[destino] += 1

    visitado = [False] * n

    contadorDeCaminho = 0

    acharTodasOrdensTopologicas(grafo, contadorDeCaminho, visitado, n, grauDeEntrada, listaDeRefens, listaDeSoldados, s)
    if (possivel == False):
        print ('IMPOSSIVEL')
        
    n,m,s = [int(x) for x in input().split()]
