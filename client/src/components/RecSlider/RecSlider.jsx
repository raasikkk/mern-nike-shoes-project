import { useState, useEffect } from 'react'

const RecSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState(1);

  // Update visible products based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleProducts(3);
      } else if (window.innerWidth >= 640) {
        setVisibleProducts(2);
      } else {
        setVisibleProducts(1);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const products = [
    {
      id: 1,
      name: "Nike Dunk Low",
      category: "Men's Shoes",
      price: 110.00,
      image: "/nike_dunk_low_retro.png"
    },
    {
      id: 2,
      name: "Nike Dunk Low Retro",
      category: "Men's Shoes",
      price: 115.00,
      image: "/nike_dunk_low_retro.png"
    },
    {
      id: 3,
      name: "Nike Dunk High",
      category: "Men's Shoes",
      price: 125.00,
      image: "/nike_dunk_low_retro.png"
    },
    {
      id: 4,
      name: "Nike Dunk Low",
      category: "Men's Shoes",
      price: 110.00,
      image: "/nike_dunk_low_retro.png"
    },
    {
      id: 5,
      name: "Nike Dunk Low Retro",
      category: "Men's Shoes",
      price: 115.00,
      image: "/nike_dunk_low_retro.png"
    },
    {
      id: 6,
      name: "Nike Dunk High",
      category: "Men's Shoes",
      price: 125.00,
      image: "/nike_dunk_low_retro.png"
    },
    // Add more products as needed
  ];

  const handlePrev = () => {
    setCurrentIndex(prev => 
      prev === 0 ? Math.max(0, products.length - visibleProducts) : Math.max(0, prev - 1)
    );
  };

  const handleNext = () => {
    setCurrentIndex(prev => 
      prev >= products.length - visibleProducts ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-full mx-auto mt-20">
      <h2 className="text-2xl font-medium mb-4">You Might Also Like</h2>
      
      {/* Navigation Buttons */}
      <div className="flex gap-2 mb-4 justify-end">
        <button 
            onClick={handlePrev}
            className="bg-gray-100 hover:bg-gray-200 rounded-full p-2"
            aria-label="Previous"
        >
            <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
            />
            </svg>
        </button>

        <button 
            onClick={handleNext}
            className="bg-gray-100 hover:bg-gray-200 rounded-full p-2"
            aria-label="Next"
        >
            <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
            />
            </svg>
        </button>
        </div>
      {/* Product Container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)`
          }}
        >
          {products.map((product) => (
            <div 
              key={product.id}
              className={`flex-shrink-0 px-2 ${
                visibleProducts === 1 ? 'w-full' :
                visibleProducts === 2 ? 'w-1/2' : 
                'w-1/3'
              }`}
            >
              <div className="">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p className="text-gray-600">{product.category}</p>
                  <p className="mt-2 font-medium">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  };
  
  export default RecSlider;