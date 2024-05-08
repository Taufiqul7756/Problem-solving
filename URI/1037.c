#include <stdio.h>
int main()
{
    float i;
    scanf("%f",&i);
    if(i>0 && i<25)
    {
        printf("Intervalo (0,25]\n");
    }
    else if(i>25 && i<50)
    {
        printf("Intervalo (25,50]\n");
    }
    else if(i>50 && i<75)
    {
        printf("Intervalo (50,75]\n");
    }
    else if(i>75 && i<100)
    {
        printf("Intervalo (75,100]\n");
    }
    else
    {
        printf("Fora de intervalo\n");
    }
    return 0;
}
