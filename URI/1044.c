#include<stdio.h>
int main()
{
    int A, B;
    scanf("%d %d", &A, &B);
    if (B % A == 0 || A % B == 0)
    {
        printf("Sao Multiplosn");
    }
    else
    {
        printf("Nao sao Multiplosn");
    }
    return 0;
}

