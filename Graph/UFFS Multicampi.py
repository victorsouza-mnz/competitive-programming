# time limit

from collections import deque

n ,k = [int(x) for x in input().split()]
grafo = [[] for _ in range(n)]
PS = [False] * n
nivel = [0]*n
queue = deque()
queue.append(0)
final = n-1


for i in range(k):
    lista = [int(x) for x in input().split()]
    if(lista[lista[0]] == n):
        for k in range(lista[0]-1):
            grafo[n-1].append(lista[k+2]-1)
            grafo[lista[k+2]-1].append(n-1)
    else :
        for j in range(lista[0]):
            for k in range(lista[0]):
                if (j!=k):
                    grafo[lista[j+1]-1].append(lista[k+1]-1)
                    grafo[lista[k+1]-1].append(lista[j+1]-1)
                
resp = 0
PS[0] = 1
while (queue):
    v = queue.popleft()
    for w in (grafo[v]):
        if(PS[w] == False):
            nivel[w] = nivel[v]+1
            PS[w] = True
            queue.append(w)            
print(nivel[final])
