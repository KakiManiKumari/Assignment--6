function calculate()
{
    p = document.getElementById("p").value;
    n = document.getElementById("n").value;
    r = document.getElementById("r").value;
    result = document.getElementById("result");
    
    result.innerHTML = "The calculated simple interest is " + (p*n*r/100);
}