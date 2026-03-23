import React, { useState } from "react";

const ImageUploader = () => {
    const [images, setImages] = useState([]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImages((prevImages) => [...prevImages, ...newImages]);
    };

    return (
        <div className="flex flex-col items-center p-6">
            <h1 className="text-2xl text-gray-400 font-bold mb-4">Memories Uploader</h1>

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

            <div className="mt-[20px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((imgSrc, index) => (
                    <div
                        key={index}
                        className="bg-white  rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all"
                    >
                        <img
                            src={imgSrc}
                            alt={`Uploaded ${index}`}
                            className="w-full h-48 object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageUploader;
