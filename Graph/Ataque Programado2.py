#https://www.urionlinejudge.com.br/judge/pt/runs/code/23882478

#time limit
def acharTodasOrdensTopologicas(pilha, grafo, contadorDeCaminho, visitado, n, grauDeEntrada, listaDeRefens, listaDeSoldados, s):
    
    while(True):
        flag = 0
        for v in range (n):
            if(grauDeEntrada[v] == 0 and not visitado[v] and s > listaDeSoldados[v]):
                flag = 1
                pilha.append(v)
        

        if (pilha == [] and contadorDeCaminho < n):
            print('impossivel')
            return 

        if(flag == 1):
            visitado[pilha[len(pilha)-1]] = True
            contadorDeCaminho += 1
            s += listaDeRefens[pilha[len(pilha)-1]]
            for u in grafo[pilha[len(pilha)-1]]:
                grauDeEntrada[u] -= 1
        
        elif(flag == 0):
            visitado[pilha[len(pilha)-1]] = False
            s -= listaDeRefens[pilha[len(pilha)-1]]
            for u in grafo[pilha[len(pilha)-1]]:
                grauDeEntrada[u] += 1
            pilha.pop()
            if (pilha == [] and contadorDeCaminho < n):
                print('impossivel')
                return 
            visitado[pilha[len(pilha)-1]] = True
            s += listaDeRefens[pilha[len(pilha)-1]]
            for u in grafo[pilha[len(pilha)-1]]:
                grauDeEntrada[u] -= 1
            



        if (contadorDeCaminho == n ): 
            print('possivel')
            return




n,m,s = [int(x) for x in input().split()]

while(n != 0) :

    grafo = [[] for _ in range(n)]


    listaDeSoldados = [int(x) for x in input().split()] 
    listaDeRefens = [int(x) for x in input().split()]


    grauDeEntrada = [0] * n                         # quantos vizinho de entrada tem em cada nó

    for _ in range (m):
        origem, destino = [int(x) for x in input().split()]
        origem -= 1
        destino -= 1
        grafo[origem].append(destino)
        grauDeEntrada[destino] += 1

    visitado = [False] * n

    contadorDeCaminho = 0
    pilha = []
    acharTodasOrdensTopologicas(pilha, grafo, contadorDeCaminho, visitado, n, grauDeEntrada, listaDeRefens, listaDeSoldados, s)
        
    n,m,s = [int(x) for x in input().split()]
