function pyramid()
{  
    var i,output='';
    num = document.getElementById("num").value;
    for(i=1;i<=num;i++)
    {
        for(var j=1;j<=num;j++)//1-5
        {
            output=output+"*";
        }
        console.log(output);
        output+="<br>";
    }
    document.getElementById("result").innerHTML = "The desired output is"+"<br>" + output;
    
} 

    // output=*****<br>*****</br>*****</br>*****...a
//***** <br> ******
// *****
// *****
// *****
// *****
// *****