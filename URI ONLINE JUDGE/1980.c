#include <stdio.h>
#include <string.h>

int main (){

unsigned long long fat = 1;

while(1){
    char string[50];
    scanf("%s",string);
    if(string[0] == '0' && string[1] == '\0') break;
    else{
        int i;
        int t = strlen(string);
        for (i=0;i < t+1; i++){
            if (i!=0){
                fat = fat*i;
            }
        }
        printf ("%llu\n",fat);
        fat = 1;
  }
}
return 0;
}