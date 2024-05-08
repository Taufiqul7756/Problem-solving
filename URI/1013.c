#include <stdio.h>
main()
{
    int a,b,s,ans;
    scanf("%d%d%d",&a,&b,&s);

    ans= (a+b+abs(a-b))/2 ;

    printf("%d",ans);

}
