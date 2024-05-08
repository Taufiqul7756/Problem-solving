#include <stdio.h>
#include <math.h>

main()
{
    float A,B,C,r1,r2,d;
    scanf("%f %f %f",&A,&B,&C);
    d=(B*B-(4*A*C));

    r1=(-B+sqrt(d))/(2*A);
    r2=(-B-sqrt(d))/(2*A);

    if(A!=0 && d>0)
    {
        printf("R1 = %.5f\nR2 = %.5f\n",r1,r2);
    }
    else
    {
        printf("Impossivel calcular\n");
    }
}
