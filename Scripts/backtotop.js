const backToTopBtn = document.getElementById("backToTopBtn");

 //20px a partir do topo aparece o botão
 window.onscroll = function() {
     scrollFunction();
 };

 function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         backToTopBtn.style.display = "block";
     } else {
         backToTopBtn.style.display = "none";
     }
 }

 //volta devagar quando clicar
 function topFunction() {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
 }