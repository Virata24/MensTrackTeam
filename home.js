function flipped(){
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', function () {
        const innerCard = this.querySelector('.card-inner');
        innerCard.classList.toggle('flipped'); // Toggle flip on inner card
      });
    });
}

