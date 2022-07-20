function isprime()
{  
    
    function prime()
    {  
        var num; 
        var answer="true";
        num = document.getElementById("num").value; 
    
        if(num==1)
            return false;
        if(num==2 || num==3)
            return true;
        if(num%2==0|| num%3==0)
            return false;
        for(var i=5;i*i<=num;i=i+6)
        {
            if(n%i==0 || n%(i+2)==0)
                return false;
        }
        return true;
    }
    var answer;
    answer=prime();
    document.getElementById("res").innerHTML = "is the number prime??" + answer;
     
}