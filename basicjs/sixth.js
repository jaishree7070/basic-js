function checkLeapYear() 
{
    var y = document.getElementById("num").value; 
    function Year(){
        //three conditions to find out the leap year
        if ((0 == y % 4) && (0 != y % 100) || (0 == y % 400)) {
            return true;
        } else {
            return false;
        }
    }
    var answer;
    answer=Year();
    document.getElementById("res").innerHTML = answer;
     
}