#include <stdio.h>
main()
{
    double A,B,C,TRIANGULO,CIRCULO,TRAPEZIO,QUADRADO,RETANGULO;
    scanf("%lf %lf %lf",&A,&B,&C);

    TRIANGULO = 0.5*(A * C);
    CIRCULO  = 3.14159 * C*C;
    TRAPEZIO = C*((A+B)/2) ;
    QUADRADO = B*B;
    RETANGULO = A*B;

    printf("TRIANGULO: %.3lf \nCIRCULO: %.3lf\nTRAPEZIO: %.3lf\nQUADRADO: %.3lf\nRETANGULO: %.3lf\n",TRIANGULO,CIRCULO,TRAPEZIO,QUADRADO,RETANGULO);


}
