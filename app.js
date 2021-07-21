var navBar= document.getElementById('navigation');
var clipboard= document.querySelector('.clipboard');

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      navBar.style.backgroundColor = "white";
      navBar.style.transition = "linear 1s";


  } else {
   
    navBar.style.backgroundColor = "initial";

  }

}
// function scrollFunction() {
//   if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
//       navBar.style.backgroundColor = "rgba(255, 255, 255,1);";

//   } else {
   
//     navBar.style.backgroundColor = "rgba(255, 255, 255,1);";
//   }
// }
   // copy to clipboard
function myFunction(id) {
    clipboard.style.display="block";

    var text = document.querySelector(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
  }

  // gsap animation

// animation portrait opacity
gsap.to(".background-text1 h2", {
  scrollTrigger: {
    trigger: ".section1",

    markers:false,
  },
  opacity:1,
  delay: 1,
  duration:1, 
});

gsap.to(".background-text1 span", {
  scrollTrigger: {
    trigger: ".section1",

    markers:false,
  },
  opacity:1,
  delay: 2,
  duration:3, 
});
gsap.to("nav", {
  scrollTrigger: {
    trigger: ".section1",

    markers:false,
  },
  opacity:1,
  delay: 2,
  duration:3, 
});


const [red, green, blue] = [255, 255, 255]
    const section1 = document.querySelector('.body-bg')

 
    window.addEventListener('scroll', () => {
      const y = 1 + (window.scrollY || window.pageYOffset) / 106
      const [r, g, b] = [red/y, (green/y)-1, (blue/y)-2].map(Math.round)
            section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
            console.log(section1.style.backgroundColor);


     
    })

    

// gsap.to(".background-text1 h2:last-child", {
//   scrollTrigger: {
//     trigger: ".section1",
//     start: "bottom 80%",
//   end: "bottom 30%",
//     markers:false,
//   },
//   x: "-420px",
//   duration:1, 
// });





// gsap.to("body", {
//   scrollTrigger: {
//     trigger: ".section1",
//     toggleActions: "restart none reverse reverse",                     
//     start: "bottom 70%",
//     end: "bottom 90%",
//     // scroller: "#scrollWrapper",
//     markers:true,
//     scrub:1,
//   },
//   backgroundColor: 'var(--black)',
//   duration: 2,
// });




// animation portrait slide down
// gsap.to(".portrait", {
//   scrollTrigger: {
//     trigger: ".text-section",
//     toggleActions: "restart none reverse reverse",                     
//     start: "top 80%",
//     end: "top 30%",
//     scroller: "#scrollWrapper",
//     markers:false,
//     scrub:1,
//   },
//   y:'50vh',
//   x:'0',
//   duration: 2,
// });

// gsap.to("#homeSection header", {
//   scrollTrigger: {
//     trigger: ".nav-bottom",
//     toggleActions: "restart none reverse reverse",
//     start: "top 83%",
//     end: "top 85%",
//     scroller: "#scrollWrapper",
//     markers:false,
//   },
//   y: "-420px",
//   ease: "Power1.easeInOut",
//   duration: 1.5,
// });
