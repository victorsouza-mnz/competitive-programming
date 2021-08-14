n = int(input(''))
melhor_subida_total = -1
melhor_subida = 0
melhor_trilha = 0
for j in range (n):
  subida2 = 0
  subida = 0
  List = list(map(int, input().split()))
  for i in range (List[0]-1):
    if List[i+1] < List[i+2]:
      subida = subida + (List[i+2]-List[i+1])
    if List[List[0]-i] < List[List[0]-i-1]:
      subida2 = subida2 + (List[List[0]-i-1] - (List[List[0]-i]))
  if subida < subida2:
    melhor_subida = subida
  else:
    melhor_subida = subida2
  if j == 0:
    melhor_subida_total = melhor_subida
    melhor_trilha = j+1
  elif melhor_subida < melhor_subida_total:
    melhor_subida_total = melhor_subida
    melhor_trilha = j+1
print(melhor_trilha)