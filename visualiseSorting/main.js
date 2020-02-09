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
            array_bars[i]=Math.floor((Math.random() * 200) + 10);
            var w=((screen_width-5)-2*m)/m;
            $(".sortBars").after("<div id=\"b"+i+"\" class=\"bars\" style=\"height:"+array_bars[i]*2+";width:"+w+"\"></div>");
        }
    }
    // Array Generator---------------------------------------------------------------------------------------------------------------


    // Execution-------------------------
    screen_width=screen.width/2;
    $(".tbars").css("width",screen_width);
    $(".tbars").css("left","25%");
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
                    $("#b"+i).css("background-color","rgb(47, 119, 191)");
                    $("#b"+f).css("background-color","rgb(47, 119, 191)");
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
                    $("#b"+i).css("background-color","red");
                    $("#b"+id).css("background-color","green");
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




});