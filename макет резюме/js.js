// Get the elements
const writeMeLink = document.querySelector('.writeMe');
const closeButton = document.querySelector('.close');
const popup = document.querySelector('.pop-up');

// Function to show the popup
function showPopup() {
  popup.style.display = 'flex';
}

// Function to close the popup
function closePopup() {
  popup.style.display = 'none';
}

// Event listener for the "Write Me" link
writeMeLink.addEventListener('click', showPopup);


// Event listener for the close button
closeButton.addEventListener('click', closePopup);
