import React, { useState } from "react";

function ClassPostItem({ date, images }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="bg-white p-5 rounded-lg m-5 shadow-sm transition-all duration-300 hover:shadow-md">
      <p className="text-center text-lg text-gray-600 mb-5">{formattedDate}</p>
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-32 h-32 overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openModal(image)}
          >
            <img
              src={image}
              alt={`Class Image ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg max-w-3xl overflow-y-auto">
            <img
              src={currentImage}
              alt="Class Image Large"
              className="w-auto max-h-96 rounded"
            />
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClassPostItem;
