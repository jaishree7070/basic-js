
function fact(){  
    var i, num, f;  
    f = 1;  
    num = document.getElementById("num").value;  
    for(i = 1; i <= num; i++)    
    {  
        f = f * i; 
    }  
   
    document.getElementById("result").innerHTML = "The factorial of the number " + num + " is: " + f ;  
    }  