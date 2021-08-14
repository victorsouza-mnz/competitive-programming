def dfs(nodo):
    global t, v
    t = t+1
    marca[nodo] = True
    for i in range(v):
        if (matriz[nodo][i] == 1 and marca[i] == 0):
            dfs(i)
            t = t+1
    return

n = int(input(""))

for i in range (n): 
    start = int(input(""))
    v,a = [int(item) for item in input("").split()]
    matriz = [[False]*v]*v
    t = 0
    marca = [False]*v

    for j in range (a) :
        a1,a2 = [int(item) for item in input().split()]
        matriz[a1][a2] = True
        matriz[a2][a1] = True

    dfs(start)
    print(t-1)