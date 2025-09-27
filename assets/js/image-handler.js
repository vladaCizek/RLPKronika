// Image handler class
class ImageHandler {
  constructor(imageData, altText) {
    this.imageData = imageData;
    this.altText = altText;
  }

  getImageSrc() {
    if (!this.imageData) return null;
    
    // Handle array - return first element
    if (Array.isArray(this.imageData)) {
      return this.imageData.length > 0 ? this.imageData[0] : null;
    }
    
    // Handle string
    return this.imageData;
  }

  createImageContainer() {
    const imageContainer = document.createElement('div');
    const imageSrc = this.getImageSrc();
    
    if (imageSrc) {
      const img = document.createElement('img');
      img.src = imageSrc;
      img.alt = this.altText;
      
      imageContainer.appendChild(img);
      
      // Handle image load error
      img.onerror = () => {
        img.style.display = 'none';
        imageContainer.querySelector('.image-placeholder').style.display = 'flex';
      };
    }
    
    // Create and append placeholder (initially hidden if image exists)
    const placeholder = document.createElement('div');
        placeholder.className = 'w-full h-full flex justify-center items-center text-4xl bg-gray-200 text-gray-500 rounded image-placeholder';
    placeholder.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12"><path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" /></svg>';
    if (imageSrc) {
      placeholder.style.display = 'none';
    }
    imageContainer.appendChild(placeholder);

    return imageContainer;
  }
}