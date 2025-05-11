import React from 'react';
import dog1 from '../assets/Images/Img1.jpg';
import dog2 from '../assets/Images/Img2.jpg';
import dog3 from '../assets/Images/Img3.jpg';
import dog4 from '../assets/Images/Img4.jpg';
import dog5 from '../assets/Images/Img5.jpg';
import dog6 from '../assets/Images/Img6.jpg';
import dog7 from '../assets/Images/Img7.jpg';
import dog8 from '../assets/Images/Img8.jpg';

const Gallery = () => {
    const images = [
        { src: dog1, caption: "Julie's Rabbit Ears" },
        { src: dog2, caption: "The Innocent Look" },
        { src: dog3, caption: "Big Eyed Buggy" },
        { src: dog4, caption: "The Saint Doggo" },
        { src: dog5, caption: "Big Eyed Buggy" },
        { src: dog6, caption: "The Innocent Look" },
        { src: dog7, caption: "The Saint Doggo" },
        { src: dog8, caption: "Julie's Rabbit Ears" },
    ];

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="border border-black-300 p-4 rounded-lg text-center"
                    >
                        <img
                            src={image.src}
                            alt={image.caption}
                            className="w-[200px] h-[200px] object-cover mx-auto"
                        />
                        <h2 className="mt-4 text-md font-semibold">{image.caption}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
