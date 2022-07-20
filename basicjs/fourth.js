function rev()
{  
    var num,remainder,reverse=0; 
    num = document.getElementById("num").value; 

    while(num>0){
        remainder=num%10;
        reverse=(reverse*10)+remainder;
        num=parseInt(num/10);
    }
    document.getElementById("res").innerHTML = "The reverse of the Entered number is " + reverse;
     
}