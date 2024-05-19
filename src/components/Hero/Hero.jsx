import React from 'react';
import bg from '../../assets/bgImage.jpg';
import f1 from '../../assets/f1.png';
import f2 from '../../assets/f2.png';
import f3 from '../../assets/f3.png';

const ImageList = [
    { id: 1, img: f1 },
    { id: 2, img: f2 },
    { id: 3, img: f3 },
];

const Hero = () => {
    const [imageId, setImageId] = React.useState(f1);
    const bgImageStyle = {
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div
            className="min-h-screen bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center sm:px-6 lg:px-8"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row">

                {/* Left section */}
                <div className="flex-1 mt-8">
                    {/* Content for the left section */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-10">
                        Welcome To{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                            Three Kingdom
                        </span>{" "}
                        HotPot Restaurant
                    </h1>
                    <p className="text-base sm:text-lg mt-5">
                        Your gateway to the vibrant world of Chinese cuisine. Located in the heart of Bhakundol, our restaurant is a culinary oasis where tradition meets innovation.
                    </p>

                </div>

                {/* Right section */}
                <div className="flex-1 mt-5">
                    <div className='flex flex-col items-center'>

                        <img
                            data-aos="zoom-in"
                            data-aos-duration="300"
                            data-aos-once="true"
                            src={imageId}
                            alt="featured dish"
                            className="w-64 sm:w-96 h-64 sm:h-96 object-contain"
                        />
                        <div className='flex gap-4 mt-5'>
                            {ImageList.map((item) => (
                                <img
                                    key={item.id}
                                    src={item.img}
                                    onClick={() => setImageId(item.img)}
                                    alt={`dish-${item.id}`}
                                    className="flex w-16 h-16 sm:w-20 sm:h-20 object-contain hover:scale-105 duration-200 cursor-pointer"
                                />
                            ))}
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default Hero;
