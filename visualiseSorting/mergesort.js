function merge(l,m,r){
    var i=0,j=0,k;
    var n1=m-l+1;
    var n2=r-m;
    var L=[];
    var R=[];
    function copy1(){
        if(i>n1)
            return;
        L[i] = array_bars[l + i]; 
        i++;
        copy1();
    }
    copy1();
    function copy2(){
        if(j>n2)
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
        if(i>n1 || j>n2)
            return;
        if (L[i] <= R[j]) 
        { 
            $("#b"+k).css("height",2*i);
            array_bars[k] = L[i]; 
            i++; 
        } 
        else
        { 
            $("#b"+k).css("height",2*j);
            array_bars[k] = R[j]; 
            j++; 
        } 
        k++;
        mg1();
    }
    mg1();
    function mg2(){
        if(i>n1)
            return;
        $("#b"+k).css("height",2*i);
        array_bars[k] = L[i]; 
        i++; 
        k++; 
        mg2();
    }
    mg2();
    function mg3(){
        if(j>n2)
            return;
        $("#b"+k).css("height",2*j);
        array_bars[k]=R[j];
        j++;
        k++;
        mg3();
    }
    mg3();


}

function mergeSort(l,r){
    //msort_out=setTimeout(function(){
        if(l<r){
            //alert("fuck");
            var mid=(l+r)/2;
            mergeSort(l,mid);
            mergeSort(mid+1,r);
            merge(l,mid,r);
        }
   // },1);
}