var point = [];
var hullLength=0;
document.getElementById("solve").onclick=function(){
    if(point.length!=0){
        for(var i=0;i<hullLength;i++){
            // document.getElementById("l3").remove();
            document.getElementById("l4").remove();
        }
        for(var i=0;i<hullLength;i++){
            document.getElementById("c").remove();
        }
    }
    hullLength=0;
    if(document.getElementById("select").value=="Graham Scan"){
        // showLines();
        // scan();
    }
    if(document.getElementById("select").value=="Gift Wrapping"){
        // showLines();
        for(var i=0;i<x.length;i++){
            point[i]=new Array;
            point[i][0]=x[i];
            point[i][1]=y[i];
        }
        convexHull(point,point.length);
    }
}
document.getElementById("select").onchange=function(){
    document.getElementById("solve").innerHTML="Simulate";
    document.getElementById("solve").innerHTML=
                    document.getElementById("solve").innerHTML+" "+
                    document.getElementById("select").value;
    
}