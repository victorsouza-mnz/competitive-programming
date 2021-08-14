a = int(input(""))
for i in range(a):
    b = [int(v) for v in input().split()]
    if b[9] >= b[1] and b[9] <= b[5] and b[8] >= b[0] and b[8] <= b[2]:
        print(1)
    else:
        print (0)