#include <stdio.h>
main()
{
 int X,Y;
 scanf("%d %d",&X,&Y);

 if(X==1)
 {
   printf("Total: R$ %d ",(Y*4));
 }
 else if(X==2)
 {

   printf("Total: R$ %.2f",(Y*4.5));
 }
 else if(X==3)
 {

   printf("Total: R$ %.2f",(Y*5));
 }
 else if(X==4)
 {

    printf("Total: R$ %.2f",(Y*2));
 }
 else if(X==5)
 {

     printf("Total: R$ %.2f",(Y*1.5));
 }
 else
 {
     printf("Total: R$ %.2f\n",price);
 }


}
