import React, { useState } from 'react';

/**
 * OptimizedImage Component
 * - Lazy loads images with blur-up effect
 * - Adds responsive srcSet for different screen sizes
 * - Ensures alt text is always present (required for SEO)
 * 
 * Usage:
 * <OptimizedImage 
 *   src="image.jpg" 
 *   alt="Description" 
 *   className="w-full h-auto"
 *   width={1200}
 *   height={600}
 * />
 */
const OptimizedImage = ({
  src,
  alt = 'Image',
  className = '',
  width = 1200,
  height = 600,
  placeholder = true,
  onLoad = () => {},
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
    onLoad();
  };

  // Generate responsive sizes string for srcset
  const generateSrcSet = (imageUrl) => {
    // For external URLs (Unsplash, etc.), we can't modify them directly
    // But we can hint the browser about the sizes
    if (imageUrl.includes('unsplash')) {
      return `${imageUrl}?w=320&q=80 320w, ${imageUrl}?w=640&q=80 640w, ${imageUrl}?w=1280&q=75 1280w`;
    }
    return imageUrl;
  };

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: `${width}/${height}` }}>
      {/* Placeholder blur while loading */}
      {placeholder && !isLoaded && (
        <div className="absolute inset-0 bg-gray-200 blur-lg animate-pulse z-0" />
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        srcSet={generateSrcSet(src)}
        sizes="(max-width: 640px) 320px, (max-width: 1280px) 640px, 1280px"
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleImageLoad}
        width={width}
        height={height}
      />
    </div>
  );
};

export default OptimizedImage;
