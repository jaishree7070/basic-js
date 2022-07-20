function arm()
{  
    var num,temp,remainder=0,total=0; 
    num = document.getElementById("num").value; 
    var temp=num;

    while(temp>0){
       remainder=temp%10;
       total=total+(remainder*remainder*remainder);
       console.log(total);
       temp=parseInt(temp/10);
    }
    
    if(num==total)
        document.getElementById("res").innerHTML = "The Entered number " + num + " is an Armstrong number" ;
    if(num!=total)  
        document.getElementById("res").innerHTML = "The Entered number " + num + " is not an Armstrong number" ;
     
}