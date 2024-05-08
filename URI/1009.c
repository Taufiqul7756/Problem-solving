#include <stdio.h>
main()
{

    double a,b,TOTAL;
    char ch;
    scanf("%s",&ch);
    scanf("%lf %lf",&a,&b);
    TOTAL = a + b * 0.15 ;
    printf("TOTAL = R$ %.2lf\n",TOTAL);

}
