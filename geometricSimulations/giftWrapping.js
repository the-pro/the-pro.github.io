function orientation(xp,yp,xq,yq,xr,yr){
    var val = (yq-yp)*(xr-xq)-
                    (xq-xp)*(yr-yq);
    if(val==0) return 0;
    return (val>0)?1:2;
}
function convexHull(point,n){
    if(n<3) return;
    hull=[];
    var l=0;
    for(var i=1;i<n;i++){
        if(point[i][0]<point[l][1]) l=i;
    }
    var p=l,q,d=0;
    do{
        hull[d]=new Array;
        hull[d][0]=point[p][0];
        hull[d][1]=point[p][1];
        d++;
        q=(p+1)%n;
        for(var i=0;i<n;i++){
            if(orientation(point[p][0],point[p][1],
                point[i][0],point[i][1],
                point[q][0],point[q][1],)==2){
                    q=i;
            }
        }
        p=q;
    }while(p!=l);
    hullLength=hull.length;
    var i=0;
    function myLoop () {           
        bsort_out = setTimeout(function () {
            document.getElementById("f").innerHTML=document.getElementById("f").innerHTML+"<line x1='"+hull[i][0]+"' y1='"+ hull[i][1] +"' x2='"+ hull[(i+1)%hull.length][0] +"' y2='"+ hull[(i+1)%hull.length][1] +"' id='l3' style='stroke:blue;stroke-width:2'></line>";
            i++;                     
            if (i < hull.length) {            
                myLoop();              
            }                        
        }, delay*10);
    }
    myLoop();
}