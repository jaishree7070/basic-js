function pyramid()
{  
    var i,output='';
    num = document.getElementById("num").value;
    for(i=1;i<=num;i++)
    {
        for(var j=1;j<=i;j++)
        {
            output=output+j;
        }
        output+="<br>";
    }
    document.getElementById("result").innerHTML = "The desired output is"+"<br>" + output;
}
