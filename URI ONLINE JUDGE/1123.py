import heapq

n,m,c,k = [int(x) for x in input().split()]

while(n!=0):
    grafo = [[] * n for i in range(n)]              # inicializa a lista de adjacencia
    custo = [[-1]* n for j in range(n)]             # array 2D de custos
    custoRota = [0] * n                             # array para o custo de cada elemento da rota para o ultimo nó da rota


    infinity = 1

    for j in range(m):
        u,v,p = [int(x) for x in input().split()]
        grafo[u].append(v)                          # preenche o grafo
        grafo[v].append(u)
        custo[u][v] = p                             # preenche a matriz custo
        custo[v][u] = p
        infinity = infinity + p                     # infinito = soma de todos o pesos


    for r in range(c-2,-1,-1):
        custoRota[r] = custoRota[r+1] + custo[r][r+1]   # preenche array de custo de rota

    visitado = n*[False]                                # array para verificar se o nó ja foi visitado
    L = n*[infinity]                                    # arrey de custo da raiz para cada nó do grafo
    L[k] = 0
    D = []                                              # heap de min do Dijkstra
    for w in range(n):
        heapq.heappush(D,(L[w],w))




    #Dijkstra
    while D != []:
        Lmin, v = heapq.heappop(D)
        visitado[v] = 1
        for w in grafo[v]:
            if visitado[w] == 0:
                if(w < c):                                      # "IF adicional dentro do Dijkstra" quando achar um nó que pertence a rota já soma com o custo para o final da rota
                    custo[v][w] = custo[v][w] + custoRota[w]
                    custo[w][v] = custo[w][v] + custoRota[w]
                if L[v] + custo[v][w] < L[w]:
                    for i in range(len(D)):
                        if D[i] == (L[w],w):
                            pos = i
                            break
                    L[w] = L[v] + custo[v][w]
                    D[pos] = (L[w],w)
                    heapq._siftdown(D,0,pos)

    resp = infinity                
    for y in range(c):                  # por conta dessa IF adicional do Dijkstra, a resposta vai ser o menor caminho até algum elemento qualquer da rota
        if (L[y]<resp):                 # uma vez que ja foi somado o custo desse nó até o final da rota
            resp=L[y]

    print(resp)
    n,m,c,k = [int(x) for x in input().split()]