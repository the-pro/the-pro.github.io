function orientation(xp,yp,xq,yq,xr,yr){
    var val = (yq-yp)*(xr-xq)-
                    (xq-xp)*(yr-yq);
    if(val==0) return 0;
    return (val>0)?1:2;
}
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var p,q,l,d;
async function sc(n,point,hull,id,c){
    if(id==n) {return;}
    document.getElementById("f").innerHTML="<circle cx='"+point[id][0]+"' cy='"+point[id][1]+"' r='14' id='c' style='stroke:rgb(13, 248, 4);fill:rgb(13, 248, 4);'></circle>"+document.getElementById("f").innerHTML;
    document.getElementById(""+point[id][0]+""+point[id][1]+"").style.backgroundColor="rgb(13, 248, 4)";
    await timeout(200);
    if(orientation(point[p][0],point[p][1],
        point[id][0],point[id][1],
        point[q][0],point[q][1])==2){
            q=id;
            if(c!=0){
                document.getElementById("l3").remove();
            }
            c++;
            document.getElementById("f").innerHTML="<line x1='"+point[p][0]+"' y1='"+ point[p][1] +"' x2='"+ point[id][0] +"' y2='"+ point[id][1] +"' id='l3' style='stroke:rgb(13, 248, 4);stroke-width:4'></line>"+document.getElementById("f").innerHTML;
            await timeout(600);
    }
    document.getElementById("c").remove();
    document.getElementById(""+point[id][0]+""+point[id][1]+"").style.backgroundColor="rgb(223, 226, 233)";
    
    id++;
    
    var m= await sc(n,point,hull,id,c);
    
}
async function uli(n,point,hull,j){
    if(p==l && j!=0) return;
    hull[d]=new Array;
    hull[d][0]=point[p][0];
    hull[d][1]=point[p][1];
    var xc=hull[d][0]-svgx/2;
    var yc=svgy/2-hull[d][1];
    document.getElementById(""+point[p][0]+""+point[p][1]+"").style.borderLeftColor="#ff595e";

    document.getElementById("f").innerHTML="<circle cx='"+point[p][0]+"' cy='"+point[p][1]+"' r='14' id='c' style='stroke:#ff595e;fill:#ff595e;'></circle>"+document.getElementById("f").innerHTML;
    d++;
    q=(p+1)%n;
    var lol=await sc(n,point,hull,0,0);
    if(document.getElementById("l3")!=undefined)
    document.getElementById("l3").remove();
    document.getElementById("f").innerHTML="<line x1='"+hull[d-1][0]+"' y1='"+ hull[d-1][1] +"' x2='"+ point[q][0] +"' y2='"+ point[q][1] +"' id='l4' style='stroke:#ff595e;stroke-width:4'></line>"+document.getElementById("f").innerHTML;
    // p=che(n,q,point,hull,p,0);
    p=q;
    j++;
    var m= await uli(n,point,hull,j);
}
async function iter(point,n,id){
    if(id==n) return;
    if(point[id][0]<point[l][0]) l=id;
    var lol= await iter(point,n,id+1);

}
async function convexHull(point,n){
    if(n<3) return;
    hull=[];
    l=0;
    var rofl= await iter(point,n,0);
    p=l;d=0;
    var lol=await uli(n,point,hull,0);
    
    hullLength=hull.length;
    // for(var i=0;i<=hull.length;i++){
    //     document.getElementById("f").innerHTML="<line x1='"+hull[i][0]+"' y1='"+ hull[i][1] +"' x2='"+ hull[(i+1)%hullLength][0] +"' y2='"+ hull[(i+1)%hullLength][1] +"' id='l3' style='stroke:#ff595e;stroke-width:4'></line>"+document.getElementById("f").innerHTML;

    // }
    
}
