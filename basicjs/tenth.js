
function fact()
{  
    var num;
    var arr=[]; 
    num = document.getElementById("num").value; 
    function f(num)
    {   
        if(num<=1)
            arr.push(0);
        while(num%2==0)
        {
            arr.push(2); 
            num=num/2;
        }
        while(num%3==0)
        {
            arr.push(3); 
            num=num/3;
        }

        for(var i=5;i*i<num;i=i+6)
        {
            while(num%i==0)
            {
                arr.push(i); 
                num=num/i;
            }
            while(num%(i+2)==0)
            {
                arr.push(i+2); 
                num=num/(i+2);
            }
        }
        
        
    } 
    f(num); 
    document.getElementById("result").innerHTML = "The factors of the number are as follows "+ arr ;  
}  