#include <stdio.h>
main()
{
    int n,n1,n2,n3,n4;
    scanf("%d",&n);

    n1=n/365;
    printf("%d ano(s)\n",n1);
    n2=n%365;

    n3=n2/30;
    printf("%d mes(es)\n",n3);
    n4=n2%30;

    printf("%d dia(s)\n",n4);

}
