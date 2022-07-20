
function fib(){  
    var i, num;
     
    var fi=[]; 
    a=0;
    b=1;
    f=0;
    num = document.getElementById("num").value;  //10
    for(i = 1; i <= num; i++) //1-10   
    {  
        fi.unshift(f);
        f=a+b; 
        b=a;
        a=f;  
          
    }  
    i = i - 1;    
    document.getElementById("res").innerHTML = "Fibonacci series of " + i + "element is: " + fi ;  
    }  

