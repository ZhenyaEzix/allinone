function calc()
{
	x = parseFloat(document.f.num1.value);
	y = parseFloat(document.f.num2.value);
   if (x>y){
     res = x * y ; }
   else { res = Math.log1p(x * y); }
    document.getElementById("res").innerText = res;
}
