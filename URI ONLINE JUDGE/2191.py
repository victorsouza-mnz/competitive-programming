inpt = int(input(""))
c = 1
while inpt != 0:

    list = []
    for i in range (inpt):
        A,B = [int(v) for v in input().split()]
        list.append((A-B))



    começo_provisorio = 0
    final = 0
    começo = 0
    somaAtual = list[0]
    maior_soma = list[0]

    for i in range(1,len(list)):
        somaAtual = somaAtual  + list[i]

        if list[i] > somaAtual:
            somaAtual = list[i]
            começo_provisorio = i

        if somaAtual >= maior_soma:
            maior_soma = somaAtual
            começo = começo_provisorio
            final = i

    inpt = int(input(""))
    print("Teste",c)
    c = c+1
    if maior_soma <= 0:
        print("nenhum")
    else :
        print(começo+1,final+1)
    print("")
