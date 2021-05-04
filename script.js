function calculate()
{
    p = document.getElementById("p").value;
    t= document.getElementById("t").value;
    r = document.getElementById("r").value;
    result = document.getElementById("result");
    
    result.innerHTML = "The calculated simple interest is " + (p*t*r/100);
}
