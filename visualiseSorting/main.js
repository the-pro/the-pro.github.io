$(document).ready(function(){
    // Variables----------------------
    var number_of_bars=100;
    var array_bars=[];
    var delay=10;
    var bsort_out;
    var bsort__out;
    var csort_out;
    var csort__out;
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
            var w=(900-2*m)/m;
            $(".sortBars").after("<div id=\"b"+i+"\" class=\"bars\" style=\"height:"+array_bars[i]*2+";width:"+w+"\"></div>");
        }
    }
    // Array Generator---------------------------------------------------------------------------------------------------------------


    // Execution-------------------------
    generateNewArray(number_of_bars);
    // Execution-------------------------

    $("#ck").click(function(){
        generateNewArray(number_of_bars);
    });

    // Event : on change of array size---------------------------------
    document.getElementById("rg").oninput = function() {
        delay=1000/document.getElementById("rg").value;
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
                    if(array_bars[i]>array_bars[i+1]){
                        var id=i+1;
                        $("#b"+i).css("height",2*array_bars[i+1]);$("#b"+i);
                        $("#b"+id).css("height",2*array_bars[i]);$("#b"+i);
                        var x=array_bars[i];
                        array_bars[i]=array_bars[i+1];
                        array_bars[i+1]=x;
                        //  $("#b"+i).css("background-color","green");
                        //  $("#b"+id).css("background-color","green");

                    }     
                    i++;                     
                    if (i < number_of_bars-1) {            
                        myLoop();              
                    }                        
                }, delay);
                // $("#b"+i).css("background-color","red");
                // $("#b"+id).css("background-color","red");
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

    function cocktailSort(){
        var j=0;
        function outerLoop(){
            var i=0;
            csort__out = setTimeout(function () {
            function myLoop () {
               csort_out = setTimeout(function () {
                   if(j%2==0){
                    if(array_bars[i]>array_bars[i+1]){
                        var id=i+1;
                        $("#b"+i).css("height",2*array_bars[i+1]);$("#b"+i);
                        $("#b"+id).css("height",2*array_bars[i]);$("#b"+i);
                        var x=array_bars[i];
                        array_bars[i]=array_bars[i+1];
                        array_bars[i+1]=x;
                        //  $("#b"+i).css("background-color","green");
                        //  $("#b"+id).css("background-color","green");

                    }
                }
                else{
                    if(array_bars[number_of_bars-i-1]>array_bars[number_of_bars-i-1+1]){
                        var id=number_of_bars-i+1-1;
                        var ih=number_of_bars-i-1;
                        $("#b"+ih).css("height",2*array_bars[number_of_bars-1-i+1]);$("#b"+number_of_bars-i-1);
                        $("#b"+id).css("height",2*array_bars[number_of_bars-i-1]);$("#b"+number_of_bars-i-1);
                        var x=array_bars[number_of_bars-i-1];
                        array_bars[number_of_bars-i-1]=array_bars[number_of_bars-i+1-1];
                        array_bars[number_of_bars-i+1-1]=x;
                        //  $("#b"+i).css("background-color","green");
                        //  $("#b"+id).css("background-color","green");

                    }
                }

                    i++;                     
                    if (i < number_of_bars-1) {            
                        myLoop();              
                    }                        
                }, delay);
                // $("#b"+i).css("background-color","red");
                // $("#b"+id).css("background-color","red");
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




});