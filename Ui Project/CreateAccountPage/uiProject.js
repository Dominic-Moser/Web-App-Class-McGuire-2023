
function test()
{
  var password1 = document.getElementById("placeHolderPassword");
  var password2 = document.getElementById("placeHolderPasswordRepeat");
  var passCheck = document.getElementById("matchFalse");
  var val1 = password1.value;
  var val2 = password2.value;

   if(val1 === val2)
   {
    alert(val1 + val2);
   }
   else
   {
      password1.value = "";
      password2.value = "";
      passCheck.style.display = "block";
   }
}

