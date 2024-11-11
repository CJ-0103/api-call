// JavaScript variables to track current "page" or image set
let currentImageIndex = 1;
const imagesPerPage = 6; // Number of images to display at once

// Function to fetch and display images
function fetchDogImages(direction) {
  // Update the current image index based on direction
if (direction === 'next') {
    currentImageIndex += imagesPerPage;
} else if (direction === 'prev' && currentImageIndex > imagesPerPage) {
    currentImageIndex -= imagesPerPage;
}

  // Clear the image container
const imageContainer = document.getElementById('imageContainer');
imageContainer.innerHTML = '';

  // Generate HTML for multiple images (simulate pagination by incrementing image index)
for (let i = 0; i < imagesPerPage; i++) {
    const imageUrl = `https://place.dog/300/200?id=${currentImageIndex + i}`;

    // Create an image element
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = "A cute dog";
    
    // Error handling for failed images
    img.onerror = function() {
      img.src = 'fallback-image.jpg'; // Replace with a path to your fallback image
    img.alt = "Failed to load image";
    };

    // Add image to container
    imageContainer.appendChild(img);
}
}

// Initial fetch to load the first set of images
fetchDogImages();
