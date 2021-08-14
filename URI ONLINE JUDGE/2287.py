n = int(input(""))
L2 = [[],[],[],[],[],[]]
letras = [0,0,0,0,0,0]
a = 1
while (n!=0):
    for i in range (n):
        L = [x for x in input().split()]
        for j in range (6):
            if L[10+j] == 'A':
                L2[j].append(L[0])
                L2[j].append(L[1])
            elif L[10+j] == 'B':
                L2[j].append(L[2])
                L2[j].append(L[3])
            elif L[10+j] == 'C':
                L2[j].append(L[4])
                L2[j].append(L[5])
            elif L[10+j] == 'D':
                L2[j].append(L[6])
                L2[j].append(L[7])
            elif L[10+j] == 'E':
                L2[j].append(L[8])
                L2[j].append(L[9])
    c2 = 0
    c = 0
    for k in range (6):
        c2 = 0
        for p in range (len(L2[k])):
            c = 0
            for m in range(len(L2[k])):
                if p != m:
                    if L2[k][p] == L2[k][m]:
                        c = c +1
            if c > c2:
                letras[k] = L2[k][p]
                c2 = c

    print("Teste %i"%a)
    a = a +1
    L2 = [[], [], [], [], [], []]
    print(letras[0],letras[1],letras[2],letras[3],letras[4],letras[5],"")
    n = int(input(""))
    print()