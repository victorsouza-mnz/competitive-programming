n = int(input())

for i in range (n) :
    str = input()
    cont1 = 0
    cont2 = 0 
    for j in range (len(str)) : 
        if (str[j] == '<') :
            cont1 += 1
        elif (str[j] == '>' and cont1 > 0) :
            cont1 -= 1
            cont2 += 1
    print(cont2)