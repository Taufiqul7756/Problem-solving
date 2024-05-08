#include <stdio.h>
main()
{
    int a,b,a1,b1;
    float c,c1,ans;

    scanf("%d %d %f",&a,&b,&c);
    scanf("%d %d %f",&a1,&b1,&c1);

    ans= (b*c)+(b1*c1);

    printf("VALOR A PAGAR: R$ %.2f\n",ans);


}
