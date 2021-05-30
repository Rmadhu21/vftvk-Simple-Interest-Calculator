function compute()
{
    
    
    var principal = document.getElementById("principal").value;
    if (principal > 0){
    var rate = document.getElementById("rate").value;
     var years = document.getElementById("years").value;
      var result = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerText=result;
        document.getElementById("year").innerText=year;
    }
    else {
        alert("Enter a positive number.")
    }    
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        