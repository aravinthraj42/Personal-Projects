import React, { useState } from "react";

const ImageUploader = () => {
    const [images, setImages] = useState([]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImages((prevImages) => [...prevImages, ...newImages]);
    };

    const handleWhatsAppOrder = (index) => {
        const message = `Hi, I'm interested in ordering image #${index + 1}. Can you provide more details?`;
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = "919048149166"; // Replace with your actual WhatsApp number (no '+' or spaces)
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, "_blank");
    };

    const handleRemoveImage = (indexToRemove) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== indexToRemove));
    };

    return (
        <div className="flex flex-col items-center p-6">
            <h1 className="text-2xl text-gray-400 font-bold mb-4">Gift World</h1>

            <label className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer inline-block">
                Upload Images
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    className="hidden"
                />
            </label>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((imgSrc, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all relative group"
                    >
                        {/* Cancel Button */}
                        <button
                            onClick={() => handleRemoveImage(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs font-bold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            title="Remove Image"
                        >
                            ×
                        </button>

                        {/* Image */}
                        <img
                            src={imgSrc}
                            alt={`Uploaded ${index}`}
                            className="w-full h-48 object-cover"
                        />

                        {/* Order Button - Plain Green Text */}
                        <div className="p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                onClick={() => handleWhatsAppOrder(index)}
                                className="text-green-600 hover:underline font-medium"
                            >
                                Order on WhatsApp
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageUploader;
