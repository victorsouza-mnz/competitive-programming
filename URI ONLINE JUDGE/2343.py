# -*- coding: utf-8 -*-

cond = 0
matriz = []
for i in range (501):
    matriz.append([0 for j in range (501)])
n = int(input())
for i in range (n):
    a,b = [int (v) for v in input().split()]
    if matriz[a][b] == 1:
        cond = 1
        print(cond)
        break
    else:
        matriz[a][b] = 1

if not cond:
    print(0)