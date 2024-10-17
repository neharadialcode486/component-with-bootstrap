// Bubble Button effect
document.querySelectorAll('.bubble-button').forEach(button => {
    button.addEventListener('mouseenter', function (e) {
      const bubbleCount = Math.floor(Math.random() * 20) + 10; 
  
      for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('span');
        const size = Math.random() * 40 + 10; 
        const x = e.clientX - button.offsetLeft - size / 2;
        const y = e.clientY - button.offsetTop - size / 2; 
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;
        bubble.classList.add('bubble');
        button.appendChild(bubble);
        bubble.addEventListener('animationend', () => {
          bubble.remove();
        });
      }
    });
  });
  