const images = document.getElementsByClassName('image');
const modal = document.getElementById('modal');
const modalDescription = document.getElementById('modal-description');

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('image')) {
        modalDescription.textContent = event.target.dataset.description;
        modal.style.display = 'block';
    } else if (event.target.classList.contains('close') || event.target === modal) {
        modal.style.display = 'none';
    }
});
