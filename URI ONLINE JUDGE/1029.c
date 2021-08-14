#include <stdio.h>
int main (){
    int fib (int b, int* chamadas);
    int i;
    int a;
    int b;
    int chamadas = -1;
    scanf("%i",&a);
    for (i = 0; i < a; i++){
        scanf("%i",&b);
        printf ("fib(%i) = %i calls = %i\n",b,chamadas, fib(b,&chamadas));
        chamadas = -1;
    }
}
int fib (int b, int* chamadas){
    int f;
    *chamadas = *chamadas+1;
    if (b == 0){
        return 0;
    }
    if (b == 1){
        return 1;
    }
    f = fib(b-1, chamadas)+fib(b-2, chamadas);
    return f;
}