// copy to clipboard function
var clipboard= document.querySelector('.clipboard');
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

// gsap animation - delay on the background text
gsap.to(".background-text1", {
  scrollTrigger: {
    trigger: ".section1",
    markers:false,
  },
  opacity:1,
  delay: 1,
  duration:1, 
});
// gsap animation - delay on the span title 
gsap.to(".background-text1 span", {
  scrollTrigger: {
    trigger: ".section1",
    markers:false,
  },
  opacity:1,
  delay: 2,
  duration:3, 
});
// gsap animation - delay on the navigation bar
gsap.to("nav", {
  scrollTrigger: {
    trigger: ".section1",
    markers:false,
  },
  opacity:1,
  delay: 2,
  duration:3, 
});

// gsap animation - bg text slide up when scroll
gsap.to(".background-text1", {
  scrollTrigger: {
    trigger: ".background-text2 p",
    toggleActions: "restart none reverse reverse",
    start:'top 80%',
    end: 'bottom 70%',
    markers:false,
  },
  y: "-420px",
  ease: "Power1.easeInOut",
  duration: 1.5,
});

//scroll animation background color change
const [red, green, blue] = [255, 255, 255]
    const section1 = document.querySelector('.body-bg')
    window.addEventListener('scroll', () => {
      const y = 1 + (window.scrollY || window.pageYOffset) / 106
      const [r, g, b] = [red/y, (green/y)-1, (blue/y)-2].map(Math.round)
            section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`     
    })
    
//scroll animation navbar text color change
const [red2, green2, blue2] = [34, 33, 32]
const section2 = document.querySelectorAll('.nav-color');
window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 106
  const [r, g, b] = [red2*y, (green2*y)-1, (blue2*y)-2].map(Math.round)
  var i;
  for(i=0; i<4; i++){
    section2[i].style.color = `rgb(${r}, ${g}, ${b})`
  }
})

var rellax = new Rellax('.rellax');
