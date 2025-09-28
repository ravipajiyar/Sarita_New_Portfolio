import React, { useState, useEffect } from 'react';

const OptimizedImage = ({ src, alt, className, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Generate blur hash placeholder or low-quality image URL
  const placeholder = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E`;

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
    img.onerror = () => setError(true);
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      <img
        src={placeholder}
        alt=""
        className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
          loaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ filter: 'blur(10px)' }}
      />
      
      {/* Main image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        {...props}
      />

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <span className="text-gray-500">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;