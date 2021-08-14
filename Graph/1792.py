#https://www.urionlinejudge.com.br/judge/pt/problems/view/1792


import heapq
     
n,m,s = [int(x) for x in input().split()]

while(n != 0) :

    grafo = [[] for _ in range(n)]


    listaDeSoldados = [int(x) for x in input().split()] 
    listaDeRefens = [int(x) for x in input().split()]


    grauDeEntrada = [0] * n

    for k in range (m):
        origem, destino = [int(x) for x in input().split()]
        grafo[origem-1].append(destino-1)
        grauDeEntrada[destino-1] += 1

    visitado = [False] * n

    contadorDeCaminho = 0
    pq = []

            
    for v in range (n):
        if(grauDeEntrada[v] == 0 and not visitado[v]):
            heapq.heappush(pq, (listaDeSoldados[v],v))


    while(contadorDeCaminho < n):
        
        if (pq == []):
            print('impossivel')
            break
        candidato = heapq.heappop(pq)
        
        if (s <= candidato[0]):
            print('impossivel')
            break
        s += listaDeRefens[candidato[1]]
        visitado[candidato[1]] = True
        contadorDeCaminho += 1
        for u in grafo[candidato[1]]:
            grauDeEntrada[u] -= 1
        
        if(contadorDeCaminho == n):
            print('possivel')
            break
        for h in grafo[candidato[1]]:
            if(grauDeEntrada[h] == 0 and not visitado[h]):
                heapq.heappush(pq, (listaDeSoldados[h],h))



    
    n,m,s = [int(x) for x in input().split()]
