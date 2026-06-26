// Certificate Modal Functionality
const modal = document.getElementById('certificateModal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('modalCaption');
const closeBtn = document.querySelector('.close');

// Get all certificate cards
const certificateCards = document.querySelectorAll('.certificate-card');

// Add click event to each certificate card
certificateCards.forEach(card => {
  card.addEventListener('click', function() {
    const img = this.querySelector('img');
    const title = this.querySelector('h3').textContent;
    const issuer = this.querySelector('p').textContent;
    
    modal.style.display = 'flex';
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    captionText.textContent = `${title} - ${issuer}`;
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  });
});

// Close modal when X is clicked
closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside the image
modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Close modal function
function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}
