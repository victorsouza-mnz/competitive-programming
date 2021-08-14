A, R = map(int, input().split())
c = 1
p = 0
while (A != 0):
    Li = list(map(int, input().split()))
    for i in range(R):
        Lr = list(map(int, input().split()))
        p = 0
        for j in range (Lr[0]):
            if (Lr[1] != Lr[j+2]):
                del Li[j-p]
                p = p+1
    print ("Teste",c)
    print (Li[0])
    print ()
    c = c +1
    A, R = map(int, input().split())