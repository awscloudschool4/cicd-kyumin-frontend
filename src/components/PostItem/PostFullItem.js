import React from "react";

function ClassPostFullItem({ date, images = [] }) {
  // Early return if there are no images, to avoid rendering an empty component.
  if (!images.length) {
    return <p>No images available.</p>;
  }

  return (
    <div className="bg-white p-5 rounded-lg m-5 shadow-sm transition-all duration-300 hover:shadow-md">
      <p className="text-center text-lg text-gray-600 mb-5">{date}</p>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
        {images.map((image, index) => (
          <div
            key={index} // Consider using a more stable and unique key if available.
            className="hover:transform hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            <img
              src={image}
              alt={`Class Image ${index + 1}`}
              className="w-full h-auto rounded" // Use h-auto to maintain aspect ratio
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClassPostFullItem;
