function pyramid()
{  
    var i,output='';
    num = document.getElementById("num").value;
    for(i=num;i>0;i--)//1//5times
    {
        for(var j=1;j<=i;j++)
        {
            output=output+"*";//5,4,3,2,1
        }
        console.log(output);
        output='';
    }
}
//5
// *****
// ****
// ***
// **
// *
