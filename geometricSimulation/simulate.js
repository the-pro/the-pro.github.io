var point = [];
var hullLength=0;
function scan(){
    var i=0;
    function traverse(){
        bsort_out = setTimeout(function () {
            var n="prev";
            var perc=(i/document.getElementById("main").offsetWidth)*100;
            document.getElementById("f").innerHTML="<line x1='"+i+"' y1='"+ 0 +"' x2='"+ i +"' y2='"+ document.getElementById("main").offsetHeight +"' id='l1' class='"+n+"' style='stroke:rgba(12, 248, 4, 0.397);'></line>"+
                                                    document.getElementById("f").innerHTML;
            document.getElementById("p").innerHTML="Scanning: "+perc+"%";
            //document.getElementsByClassName(p).remove();
            i++;                     
            if (i <= document.getElementById("main").offsetWidth) {           
                traverse();              
            }                        
        }, delay);
    }
    traverse();
}
function showLines(){
    var j=0;
    function outerLoop(){
        var i=0;
        bsort__out = setTimeout(function () {
            function myLoop () {           
                bsort_out = setTimeout(function () {
                    if(!( (x[i]==0 && y[i]==0) || (x[j]==0 && y[j]==0) ))
                    document.getElementById("f").innerHTML="<line x1='"+x[i]+"' y1='"+ y[i] +"' x2='"+ x[j] +"' y2='"+ y[j] +"' id='l2'></line>"+document.getElementById("f").innerHTML;
                    
                    i++;                     
                    if (i < count) {            
                        myLoop();              
                    }                        
                }, delay);
            }
            myLoop();
            j++;
            if(j<count-1){
                outerLoop();
            }
        },(count)*(delay));
    }
    outerLoop();

}
document.getElementById("solve").onclick=function(){
    if(point.length!=0){
        for(var i=0;i<hullLength;i++){
            document.getElementById("l3").remove();
        }
    }
    hullLength=0;
    if(document.getElementById("select").value=="Graham Scan"){
        // showLines();
        scan();
    }
    if(document.getElementById("select").value=="Gift Wrapping"){
        showLines();
        for(var i=0;i<x.length;i++){
            point[i]=new Array;
            point[i][0]=x[i];
            point[i][1]=y[i];
        }
        grap=setTimeout(function(){convexHull(point,point.length);},delay*count*count);
    }
}
document.getElementById("select").onchange=function(){
    document.getElementById("solve").innerHTML="Simulate";
    document.getElementById("solve").innerHTML=
                    document.getElementById("solve").innerHTML+" "+
                    document.getElementById("select").value;
    
}