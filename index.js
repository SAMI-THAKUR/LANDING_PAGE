function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    sec = updateTime(sec)+"."+ AMorPM(hour);
    hour = updateHour(hour);
    min = updateTime(min);
    document.getElementById("clock").innerText = hour+":"+min +":"+sec; /* adding time to the div */
      var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  function AMorPM(k) {
    if (k < 12) { 
      return "AM";
    }
    else {
      return "PM";
    }
  }
  function updateHour(k) {
    if (k < 10 && k>0) {
      return "0" + k;
    }
    else if(k>=10 && k<=12){
      return k;
    }
   else if (k > 12) {
      return   (k - 12) ;
    }
    else if(k==0){      
      return 12;
    }
  }

  
  currentTime(); /* calling currentTime() function to initiate the process */


  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

