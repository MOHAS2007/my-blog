const sentences = document.querySelectorAll('.clickable-sentence');

sentences.forEach(sentence => {
  
  sentence.addEventListener('click', function() {
    
    const persianTranslation = this.querySelector('.translation');
    
    persianTranslation.classList.toggle('show');
  });
  
});