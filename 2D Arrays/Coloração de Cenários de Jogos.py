def dfs(i,j,m,n):
        if i>=m or i<0 or j>=n or j<0 or grid[i][j]=="o":
            return
        grid[i][j]="o"
        dfs(i+1,j,m,n)
        dfs(i-1,j,m,n)
        dfs(i,j+1,m,n)
        dfs(i,j-1,m,n)


r, c = input().split()
r = int(r)
c = int(c)
grid = []

for i in range(r):
    ipt = list(input())
    grid.append(ipt)


resp = 0

for i in range (r):
    for j in range (c):
        if (grid[i][j] == '.'):
            resp+=1
            dfs(i,j,r,c)

print(resp)