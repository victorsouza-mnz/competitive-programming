n = int(input())
while (n!=0):
    while(True):
        list = [int(item) for item in input("").split()]
        if (list == [0]):
            print("")
            n = int(input())
            break
        cont = n
        stack = []
        el = list.pop()
        stack.append(el)
        for i in range (n):
            while (len(stack)>0 and stack[len(stack)-1] == cont):
                stack.pop()
                cont -=1
            if(len(list) >= 1):
                el = list.pop()
                stack.append(el)
        if (stack == []):
            print('Yes')
        else :
            print('No')