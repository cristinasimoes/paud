var navBar= document.getElementById('navigation');
var clipboard= document.querySelector('.clipboard');

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 580 || document.documentElement.scrollTop > 580) {
      console.log(navBar);
      navBar.style.backgroundColor = "white";
    // document.getElementById("navbar").style.padding = "30px 10px";
    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    // document.getElementById("navbar").style.padding = "80px 10px";
    // document.getElementById("logo").style.fontSize = "35px";
    navBar.style.backgroundColor = "initial";

  }
}

   // copy to clipboard
function myFunction(id) {
    clipboard.style.display="block";

    var text = document.querySelector(id).innerText;
    // console.log(text);
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
  }