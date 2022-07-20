function table()
{  
    var i, num;  
    var arr=[];  
    num = document.getElementById("num").value;  
    for(i = 1; i <= 10; i++)    
    {  
        arr.push(i*num);
    }  
    document.getElementById("result").innerHTML = "The table of the number " + num + " is: " + arr;  
}  