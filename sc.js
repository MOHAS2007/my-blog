const sentences = document.querySelectorAll('.clickable-sentence');

sentences.forEach(sentence => {
  
  sentence.addEventListener('click', function() {
    
    const persianTranslation = this.querySelector('.translation');
    
    persianTranslation.classList.toggle('show');
  });
  
});

document.addEventListener("DOMContentLoaded", function() {
    
    const hintBox = document.getElementById("hint-message");

    setTimeout(function() {
        hintBox.style.opacity = "1";
        setTimeout(function(){
          hintBox.style.opacity = "0";
        },4000);
    
      },2000); 
});
