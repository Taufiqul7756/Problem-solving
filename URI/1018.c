#include <stdio.h>
main()
{
 int N,x1,x2,y1,y2,z1,z2,q1,q2,r1,r2,s1,s2,t1,t2;
 scanf("%d",&N);
 printf("%d\n",N);

 x1=N/100;
 printf("%d nota(s) de R$ 100,00\n",x1);

 x2=N%100;

 y1=x2/50;
 printf("%d nota(s) de R$ 50,00\n",y1);

 y2=x2%50;


 z1=y2/20;
 printf("%d nota(s) de R$ 20,00\n",z1);

 z2=y2%20;

 q1=z2/10;
 printf("%d nota(s) de R$ 10,00\n",q1);

 q2=z2%10;


 r1=q2/5;
 printf("%d nota(s) de R$ 5,00\n",r1);

 r2=q2%5;

 s1=r2/2;
 printf("%d nota(s) de R$ 2,00\n",s1);

 s2=r2%2;

 t1=s2/1;
 printf("%d nota(s) de R$ 1,00\n",t1);

 t2=s2%1;


}
