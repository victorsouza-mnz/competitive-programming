# https://www.urionlinejudge.com.br/judge/pt/problems/view/1683


list = [int(item) for item in input("").split()]

while ( list != [0]) :
    stack = []
    result = 0
    i = 0
    list.append(0)
    while ( i < len(list)) :
        if (len(stack) == 0 or list[stack[len(stack)-1]] < list[i]):
            stack.append(i)
            print('stack = ', stack)
            i += 1
        else :
            height = list[stack.pop()]
            print('stack = ', stack)
            if (len(stack)-1 >= 0):
                left = stack[len(stack)-1]
            else:
                left = -1
            width = i - left- 1
            result = max(result, height * width)
            print('height = ',height,'left = ', left , 'width = ', width , 'i = ', i ,'result = ', result)


    print(int((result * 1000)/1000))
    list = [int(item) for item in input("").split()]