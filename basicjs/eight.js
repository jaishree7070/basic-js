function pyramid()
{  
    var i,output='';
    num = document.getElementById("num").value;
    for(i=num;i>0;i--)//1//5times
    {
        for(var j=1;j<=i;j++)
        {
            output=output+"*";
        }
        output+="<br>";
     
    }
    document.getElementById("result").innerHTML = "The desired output is"+"<br>" + output;
}
//5
// *****
// ****
// ***
// **
// *
