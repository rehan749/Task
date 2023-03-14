window.addEventListener('scroll',()=>{

  let navbar = document.getElementsByClassName("navbar");
  
  
  if (window.pageYOffset >= 225) {
    navbar.classList.add("nav-sticky")
    
  } else {
    navbar.classList.remove("nav-sticky");
  }
})

