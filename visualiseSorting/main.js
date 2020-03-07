$(document).ready(function(){
    // Variables----------------------
    var number_of_bars=100;
    var array_bars=[];
    var delay=10;
    var bsort_out;
    var bsort__out;
    var csort_out;
    var csort__out;
    var screen_width;
    var gaps;
    var msort_out;
    var full_screen_count=0;
    // Variables----------------------

    // Array Generator--------------------------------------------------------------------------------------------------------------
    function generateNewArray(m){
        clearTimeout(bsort_out);
        clearTimeout(bsort__out);
        clearTimeout(csort_out);
        clearTimeout(csort__out);
        number_of_bars=m;
        $(".bars").remove();
        for(var i=0;i<m;i++){
            array_bars[i]=Math.floor((Math.random() * 180) + 10);
            var w=((screen_width-5)-2*m)/m;
            $(".sortBars").after("<div id=\"b"+i+"\" class=\"bars\" style=\"height:"+array_bars[i]*2+";width:"+w+"\"></div>");
        }
        console.log(array_bars);
    }
    // Array Generator---------------------------------------------------------------------------------------------------------------


    // Execution-------------------------
    screen_width=screen.width/2;
    var block=2*screen.width/3;
    gaps=screen_width/screen_width;
    $(".tbars").css("width",screen_width);
    $(".tbars").css("left","25%");
    $(".bars").css("margin-left",gaps);
    $(".f").css("left","16.25%");
    $(".f").css("width",block);
    $(".h").css("left","16.25%");
    $(".h").css("width",block);
    var bar_position=+$(".h").height()+18+4;
    $(".tbars").css("top",bar_position);
    generateNewArray(number_of_bars);
    // Execution-------------------------

    $("#ck").click(function(){
        generateNewArray(number_of_bars);
    });

    // Event : on change of array size---------------------------------
    document.getElementById("rg").oninput = function() {
        delay=(1000/document.getElementById("rg").value)*2;
        generateNewArray(document.getElementById("rg").value);
    };
    // Event : on change of array size---------------------------------

    //Events : Algorithms---------------------
    $("#bs").click(function(){
        bubbleSort();
    });
    $("#cs").click(function(){
        cocktailSort();
    });
    $("#ms").click(function(){
        mergeSort(0,number_of_bars-1);
    });
    $("#fs").click(function(){
    var elem = document.body;
    if((++full_screen_count%2)){
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }
    else{
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
    }
    });
    //Events : Algorithms---------------------


    // Bubble Sort ------------------------------------------------------------------------------------------
    function bubbleSort(){
        var j=0;
        function outerLoop(){
            var i=0;
            bsort__out = setTimeout(function () {
            function myLoop () {           
               bsort_out = setTimeout(function () {
                   var f=i-1,g=i-2,h=i-3,v=number_of_bars-i;
                    $("#b"+i).css("background-color","#BAFE16");
                    $("#b"+f).css("background-color","#BAFE16");
                    // $("#b"+g).css("background-color","rgb(47, 119, 191)");
                    // $("#b"+h).css("background-color","rgb(47, 119, 191)");
                    // $("#b"+v).css("background-color","rgb(47, 119, 191)");

                    if(array_bars[i]>array_bars[i+1] && i<number_of_bars-1){
                        var id=i+1;
                        $("#b"+i).css("height",2*array_bars[i+1]);
                        $("#b"+id).css("height",2*array_bars[i]);
                        var x=array_bars[i];
                        array_bars[i]=array_bars[i+1];
                        array_bars[i+1]=x;

                    }
                    $("#b"+i).css("background-color","green");
                    $("#b"+id).css("background-color","red");
                    i++;                     
                    if (i < number_of_bars+1) {            
                        myLoop();              
                    }                        
                }, delay);
            }   
                myLoop();
                j++;
                if(j<number_of_bars){
                    outerLoop();
                }
            },number_of_bars*delay);
        }
        outerLoop();

    }
    // Bubble Sort ---------------------------------------------------------------------------------------------
    // Cocktail Sort -----------------------------------------------------------------------------------------------
    function cocktailSort(){
        var j=0;
        function outerLoop(){
            var i=0;
            csort__out = setTimeout(function () {
            function myLoop () {
               csort_out = setTimeout(function () {
                   if(j%2==0){
                    // var f=number_of_bars-2-i,g=number_of_bars-i-1;
                    // $("#b"+g).css("background-color","rgb(47, 119, 191)");
                    // $("#b"+f).css("background-color","rgb(47, 119, 191)");
                    // $("#b"+i).css("background-color","red");
                    // $("#b"+id).css("background-color","red");
                    if(array_bars[i]>array_bars[i+1]){
                        var id=i+1;
                        $("#b"+i).css("height",2*array_bars[i+1]);$("#b"+i);
                        $("#b"+id).css("height",2*array_bars[i]);$("#b"+i);
                        var x=array_bars[i];
                        array_bars[i]=array_bars[i+1];
                        array_bars[i+1]=x;

                    }
                }
                else{
                    // var f=i-1,g=i,s=number_of_bars-1-i,v=number_of_bars-i+1-1;
                    // $("#b"+g).css("background-color","rgb(47, 119, 191)");
                    // $("#b"+f).css("background-color","rgb(47, 119, 191)");
                    // $("#b"+s).css("background-color","red");
                    // $("#b"+v).css("background-color","red");
                    if(array_bars[number_of_bars-i-1]>array_bars[number_of_bars-i-1+1]){
                        var id=number_of_bars-i+1-1;
                        var ih=number_of_bars-i-1;
                        $("#b"+ih).css("height",2*array_bars[number_of_bars-1-i+1]);$("#b"+number_of_bars-i-1);
                        $("#b"+id).css("height",2*array_bars[number_of_bars-i-1]);$("#b"+number_of_bars-i-1);
                        var x=array_bars[number_of_bars-i-1];
                        array_bars[number_of_bars-i-1]=array_bars[number_of_bars-i+1-1];
                        array_bars[number_of_bars-i+1-1]=x;

                    }
                }

                    i++;                     
                    if (i < number_of_bars-1) {            
                        myLoop();              
                    }                        
                }, delay);
            }
                myLoop();
                j++;
                if(j<number_of_bars){
                    outerLoop();
                }
            },number_of_bars*delay);
        }
        outerLoop();
    }
    // Cocktail Sort------------------------------------------------------------------------------------------------------------
    
    function merge(l,m,r){
        var i=0,j=0,k;
        var n1=m-l+1;
        var n2=r-m;
        var L=[];
        var R=[];
        function copy1(){
            if(i>=n1)
                return;
            L[i] = array_bars[l + i]; 
            i++;
            copy1();
        }
        copy1();
        function copy2(){
            if(j>=n2)
                return;
            R[j] = array_bars[m + 1+ j];
            j++;
            copy2();
        }
        copy2();
        i=0;
        j=0;
        k=l;
        function mg1(){
            if(i>=n1 || j>=n2)
                return;
            else if (L[i] <= R[j]) 
            { 
                $("#b"+k).css("height",2*L[i]);
                array_bars[k] = L[i]; 
                i++; 
            } 
            else
            { 
                $("#b"+k).css("height",2*R[j]);
                array_bars[k] = R[j]; 
                j++; 
            } 
            k++;
            mg1();
        }
        function mg2(){
            if(i>=n1)
                return;
            $("#b"+k).css("height",2*L[i]);
            array_bars[k] = L[i]; 
            i++; 
            k++; 
            mg2();
        }
        function mg3(){
            if(j>=n2)
                return;
            $("#b"+k).css("height",2*R[j]);
            array_bars[k]=R[j];
            j++;
            k++;
            mg3();
        }
        var funcs=[mg1,mg2,mg3];
        var tt=0;
        function callFuncs() {
            funcs[tt++]();
            if (tt < funcs.length) callFuncs();
        }
        callFuncs();
    
    }
    
    function mergeSort(l,r){
        if(l<r){
            //alert("fuck");
            var mid=Math.floor((l+r)/2);
            mergeSort(l,mid);
            mergeSort(mid+1,r);
            merge(l,mid,r);
        }
    }

});