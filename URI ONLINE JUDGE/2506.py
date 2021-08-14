#https://www.urionlinejudge.com.br/judge/pt/problems/view/2506

while True:
    try:
        n = int(input())
        horarioLivre = 420
        acc = 0
        for i in range (n):
            list = [int(item) for item in input("").split()]
            horarioPaciente = list[0]*60 + list[1]
            horarioCritico = list[2]


            while (horarioLivre < horarioPaciente):
                horarioLivre += 30

            tempoDeEspera = horarioLivre - horarioPaciente


            if (tempoDeEspera > horarioCritico):
                acc +=1
            
            horarioLivre +=30
        print(acc) 
    except EOFError:
        break