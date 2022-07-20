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
        console.log(output);
        output='';
    }
}
