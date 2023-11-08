function calc()
{
	x = parseFloat(document.f.num1.value);
	y= parseFloat(document.f.num2.value);
   if (x>y){
     f.res.value= x * y ; }
   else { f.res.value= Math.log1p(x * y); }

}
	function check()
{
	x=parseFloat(document.f.num1.value);
	y= parseFloat(document.f.num2.value);
   if (x>y){
     f.ch.value= 'x>y' ; }
   else { f.ch.value= 'x<=y'; }

}