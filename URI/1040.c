#include <stdio.h>
main()
{
    float N1,N2,N3,N4,m,last;
    scanf("%f%f %f %f",&N1,&N2,&N3,&N4);
    m =((N1*2)+(N2*3)+(N3*4)+N4)/10;
    printf("Media: %.1f\n",m);

    if(m>=7)
    {
        printf("Aluno aprovado.\n");
    }
    else if(m<=5)
    {
        printf("Aluno reprovado.\n");
    }
    else if(m>5 && m<=6.9)
    {
        printf("Aluno em exame.\n");

        scanf("%f", &last);
        printf("Nota do exame: %.1f\n", last);

        if((last+m)/2 > 5.0 )
        {
            printf("Aluno aprovado.\n");
        }
        else if ((last+m)/2.0 <= 4.9 )
        {
            printf("Aluno reprovado.\n");
        }

        printf("Media final: %.1f\n",(last+m)/2.0);
    }


}
