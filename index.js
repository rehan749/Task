window.addEventListener('scroll',()=>{

  let navbar = document.querySelector(".navbar");
  
  
  if (window.pageYOffset >= 100) {
    navbar.classList.add(".nav-sticky")
    
  } else {
    navbar.classList.remove(".nav-sticky");
  }
})

