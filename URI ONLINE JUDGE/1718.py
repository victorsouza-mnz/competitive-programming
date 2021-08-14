a,b = [int(v) for v in input().split()]
c = [int(v) for v in input().split()]
dist = a/b
menor = abs((a -c[b-1]) + c[0])
menori = b-1


for i in range (len(c)-1):
    if abs(c[i]-c[i+1]) < menor:
        menor = abs(c[i]-c[i+1])
        menori = i

for i in range (menori):
    var = c[0]
    c.remove(c[0])
    c.append(var)
sub = c[0]


for i in range (b):
    c[i] = c[i] - sub
    if c[i] < 0:
        c[i] = a + c[i]

cont = 0
aux = 0
flag = 0

for i in range (menor):
    aux = i
    for j in range (len(c)-2):
        if aux+dist >= c[j+1] and aux+dist < c[j+2]:
            cont = cont + 1
            aux = aux + dist
    if cont == len(c) - 2 and aux+dist >= c[j+2] and aux+dist <= a -1:
        print("S")
        flag = 1
        break
    cont = 0
if flag != 1:
    print ("N")



