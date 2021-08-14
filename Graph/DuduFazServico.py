#https://www.urionlinejudge.com.br/judge/pt/runs/code/23868033

def resolve ():
    n,m = [int(x) for x in input().split()]
    n_out = [[]* n for i in range(n)]

    for j in range (m):
        a,b = [int(x) for x in input().split()]
        n_out[a-1].append(b-1)

        
    marca = n * [0]
    ciclo = False

    
    for a in range (n):
        if marca[a] == 0:
            pilha = [a]
            while pilha != []:
                v = pilha[len(pilha)-1]
                marca[v] = 1
                if n_out[v] != []:
                    for w in n_out[v]:
                        del n_out[v][0]
                        if marca[w] == 0:
                            pilha.append(w)
                            break
                        elif w in pilha:
                            print('SIM')
                            return
                            
                else: 
                    pilha.pop()

    print('NAO')
        

numero = int(input())
for l in range (numero):
    resolve()