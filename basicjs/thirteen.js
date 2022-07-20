function swap(){  
    let num1,num2; 
    
    num1 = document.getElementById("num1").value;  
    num2 = document.getElementById("num2").value; 

    [num1,num2]=[num2,num1];
    document.getElementById("result").innerHTML = "The num1 is changed to " + num1 + " and num2 is changed to  " + num2;  
    }  
    
  