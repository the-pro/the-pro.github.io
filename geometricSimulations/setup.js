var x=[];
var y=[];
var count=0;
var delay=30;
var linex=[];
var liney=[];
var countLines=0;
document.getElementById("f").height.baseVal.value=document.getElementById("main").offsetHeight;
document.getElementById("f").width.baseVal.value=document.getElementById("main").offsetWidth;
function createGraph(){
    for(var i=0;i<document.getElementById("main").offsetHeight;i+=15){
        document.getElementById("f").innerHTML=document.getElementById("f").innerHTML+"<line x1='"+0+"' y1='"+ i +"' x2='"+ document.getElementById("main").offsetWidth +"' y2='"+ i +"' id='l1'></line>";
        var len=document.getElementById("main").offsetHeight-
                            (document.getElementById("main").offsetHeight)%15;
        if(i/15==Math.ceil(len/30))
        document.getElementById("f").innerHTML=document.getElementById("f").innerHTML+"<line x1='"+0+"' y1='"+ i +"' x2='"+ document.getElementById("main").offsetWidth +"' y2='"+ i +"' id='l1' style='stroke:rgb(13, 248, 4);stroke-width:6;'></line>";
    }
    for(var i=0;i<document.getElementById("main").offsetWidth;i+=15){
        document.getElementById("f").innerHTML=document.getElementById("f").innerHTML+"<line x1='"+i+"' y1='"+ 0 +"' x2='"+ i +"' y2='"+ document.getElementById("main").offsetHeight +"' id='l1'></line>";
        var len=document.getElementById("main").offsetWidth-
                            (document.getElementById("main").offsetWidth)%15;
        if(i/15==Math.ceil(len/30))
        document.getElementById("f").innerHTML=document.getElementById("f").innerHTML+"<line x1='"+i+"' y1='"+ 0 +"' x2='"+ i +"' y2='"+ document.getElementById("main").offsetHeight +"' id='l1' style='stroke:rgb(13, 248, 4);stroke-width:6'></line>";
    }
}
createGraph();
function clearLines(){
    clearTimeout(bsort_out);
    clearTimeout(bsort__out);
    for(var i=0;i<x.length*y.length;i++){
        document.getElementById("l2").remove();
    }
    linex=[];
    liney=[];
    countLines=0;
}
document.getElementById("clear").onclick=function(){
    document.getElementById("f").innerHTML='';
    createGraph();
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
    var xc=event.offsetX-document.getElementById("main").offsetWidth/2;
    var yc=document.getElementById("main").offsetHeight/2-event.offsetY;
    document.getElementById("inf").innerHTML="x-coordinate: "+xc+
                                            "      "+
                                            "y-coordinate: "+yc;
}
document.getElementById("f").onmouseleave =function(event){
    document.getElementById("inf").innerHTML="x-coordinate:-1 y-coordinate:-1";
}
document.getElementById("main").onclick=function(event){
    console.log(event.offsetX);
    console.log(event.offsetY);
    x[count]=event.offsetX;
    y[count]=event.offsetY;
    count++;
    document.getElementById("f").innerHTML=document.getElementById("f").innerHTML+"<circle cx='"+event.offsetX+"' cy='"+event.offsetY+"' r='3' id='c'></circle>";
}
document.getElementById("f").onmousedown=function(event){
    linex[countLines]=event.offsetX;
    liney[countLines]=event.offsetY;
    countLines++;
}
document.getElementById("f").onmouseup=function(event){
    linex[countLines]=event.offsetX;
    liney[countLines]=event.offsetY;
    countLines++;
    document.getElementById("f").innerHTML=document.getElementById("f").innerHTML+
                                    "<line x1='"+linex[countLines-2]+"' y1='"+ liney[countLines-2] +"' x2='"+ linex[countLines-1] +"' y2='"+ liney[countLines-1] +"' id='l2'></line>";
}
document.getElementById("p").onclick=function(){
    clearLines();
}
document.getElementById("c").onclick=function(){

}
