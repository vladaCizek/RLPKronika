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
      img.className = 'bio-image';
      
      // Create placeholder for fallback
      const placeholder = document.createElement('div');
      placeholder.className = 'bio-placeholder';
      placeholder.innerHTML = '👤';
      placeholder.style.display = 'none';
      
      // Handle image load error
      img.onerror = () => {
        img.style.display = 'none';
        placeholder.style.display = 'flex';
      };
      
      imageContainer.appendChild(img);
      imageContainer.appendChild(placeholder);
    } else {
      // Show placeholder if no image provided
      const placeholder = document.createElement('div');
      placeholder.className = 'bio-placeholder';
      placeholder.innerHTML = '👤';
      imageContainer.appendChild(placeholder);
    }

    return imageContainer;
  }
}