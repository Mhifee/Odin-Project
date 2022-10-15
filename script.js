function matchPassword() {

    var password1 = document.getElementById("password1");
    var password2 = document.getElementById("password2");

  
    if (password1 != password2) 
    
    {
        document.getElementById('invalid')
        .style.display = "block"

        return false;

    } else {

      return true;
  
    }
  
}
  
  