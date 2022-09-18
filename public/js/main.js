const header = document.querySelector('header');
window.onscroll = () => {
    if (window.scrollY > 1) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
};




function menuFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    
  }
  
  function menuBtnFunction(x) {
    x.classList.toggle("change");    
  }
  

  
