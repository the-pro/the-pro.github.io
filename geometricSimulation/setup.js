var x=[];
var y=[];
var count=0;
var delay=200;
var linex=[];
var liney=[];
var countLines=0;
document.getElementById("f").height.baseVal.value=document.getElementById("main").offsetHeight-document.getElementById("main").offsetHeight*20/100;
document.getElementById("f").width.baseVal.value=document.getElementById("main").offsetWidth-document.getElementById("main").offsetWidth*21/100;
var svgy=document.getElementById("main").offsetHeight-document.getElementById("main").offsetHeight*20/100;
var svgx=document.getElementById("main").offsetWidth-document.getElementById("main").offsetWidth*21/100;
function createGraph(){
    for(var i=0;i<document.getElementById("main").offsetHeight;i+=40){
        document.getElementById("f").innerHTML=document.getElementById("f").innerHTML+"<line x1='"+0+"' y1='"+ i +"' x2='"+ document.getElementById("main").offsetWidth +"' y2='"+ i +"' id='l1'></line>";
        var len=document.getElementById("main").offsetHeight-
                            (document.getElementById("main").offsetHeight)%15;
        // if(i/15==Math.ceil(len/80))
        // document.getElementById("f").innerHTML=document.getElementById("f").innerHTML+"<line x1='"+0+"' y1='"+ i +"' x2='"+ document.getElementById("main").offsetWidth +"' y2='"+ i +"' id='l1' style='stroke:black;stroke-width:4;'></line>";
    }
    for(var i=0;i<document.getElementById("main").offsetWidth;i+=40){
        document.getElementById("f").innerHTML=document.getElementById("f").innerHTML+"<line x1='"+i+"' y1='"+ 0 +"' x2='"+ i +"' y2='"+ document.getElementById("main").offsetHeight +"' id='l1'></line>";
        var len=document.getElementById("main").offsetWidth-
                            (document.getElementById("main").offsetWidth)%15;
        // if(i/15==Math.ceil(len/80))
        // document.getElementById("f").innerHTML=document.getElementById("f").innerHTML+"<line x1='"+i+"' y1='"+ 0 +"' x2='"+ i +"' y2='"+ document.getElementById("main").offsetHeight +"' id='l1' style='stroke:black;stroke-width:4;'></line>";
    }
}
// createGraph();
function clearLines(){
    for(var i=0;i<x.length*y.length;i++){
        document.getElementById("l4").remove();
    }
    linex=[];
    liney=[];
    countLines=0;
}
function clearArea(){
    document.getElementById("f").innerHTML='';
    x=[];
    y=[];
    count=0;
    linex=[];
    liney=[];
    countLines=0;
    hullLength=0;
    point=[];
}
function tex(p,x,y){
    return `<text x="${x}" y="${y}" text-anchor="middle" stroke="#51c5cf" stroke-width="1px" dy=".3em">${p}</text>`;
}
document.getElementById("clear").onclick=function(){
    document.getElementById("f").innerHTML='';
    // createGraph();
    x=[];
    y=[];
    count=0;
    linex=[];
    liney=[];
    countLines=0;
    hullLength=0;
    point=[];
    clearTimeout(bsort_out);
    clearTimeout(bsort__out);
}
document.getElementById("f").onmousemove =function(event){
    var xc=event.offsetX-svgx/2;
    var yc=svgy/2-event.offsetY;
    document.getElementById("inf").innerHTML="x-coordinate: "+xc+
                                            "      "+
                                            "y-coordinate: "+yc;
}
document.getElementById("f").onmouseleave =function(event){
    document.getElementById("inf").innerHTML="x-coordinate:-1 y-coordinate:-1";
}
document.getElementById("f").onclick=function(event){
    console.log(event.offsetX);
    console.log(event.offsetY);
    var xc=event.offsetX-Math.round(svgx/2);
    var yc=Math.round(svgy/2)-event.offsetY;
    x[count]=event.offsetX;
    y[count]=event.offsetY;
    count++;
    document.getElementById("f").innerHTML=document.getElementById("f").innerHTML+"<g><circle cx='"+event.offsetX+"' cy='"+event.offsetY+"' r='9' id='c'></circle>"+tex(count,event.offsetX,event.offsetY)+"<\g>";
    document.getElementById("points").innerHTML+=` <div style='color:rgb(51, 50, 50);padding:6px;border:2px solid rgb(223, 226, 233);background-color:rgb(223, 226, 233);margin:4px' id='${x[count-1]}${y[count-1]}'>[${xc},${yc}]<div> `;
}
// document.getElementById("f").onmousedown=function(event){
//     linex[countLines]=event.offsetX;
//     liney[countLines]=event.offsetY;
//     countLines++;
// }
// document.getElementById("f").onmouseup=function(event){
//     linex[countLines]=event.offsetX;
//     liney[countLines]=event.offsetY;
//     countLines++;
//     document.getElementById("f").innerHTML=document.getElementById("f").innerHTML+
//                                     "<line x1='"+linex[countLines-2]+"' y1='"+ liney[countLines-2] +"' x2='"+ linex[countLines-1] +"' y2='"+ liney[countLines-1] +"' id='l2'></line>";
// }
document.getElementById("clear").onclick=function(){
    document.getElementById("points").innerHTML='';
    clearArea();

}
document.getElementById("c").onclick=function(){

}
