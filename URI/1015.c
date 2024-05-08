#include <stdio.h>
main()
{
 double x1,y1,distance;
 scanf("%lf %lf",&x1,&y1);
 double x2,y2;
 scanf("%lf %lf",&x2,&y2);

distance = sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));

printf("%.4lf\n",distance);

}
