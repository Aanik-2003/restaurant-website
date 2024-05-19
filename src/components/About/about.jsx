import React from 'react';
import Home from '../../assets/home.jpg';

const About = () => {
  return (
    <div
      className="min-h-screen bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex flex-col sm:px-6 lg:px-8 items-center">
      <h1 className='text-3xl font-bold flex h-fit w-fit mt-20'>
        About Us</h1>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row gap-10">

        {/* Left section */}
        <div className="flex-1 text-primary">
          <p className='mb-4'>
            At Three Kingdom HotPot Restaurant, we're passionate about sharing the authentic flavors of China with our guests. From the bold spices of Sichuan to the refined tastes of Cantonese cuisine, our menu is a journey through the diverse culinary landscape of China.
          </p>
          <p className='mb-4'>
            Each dish is meticulously crafted by our skilled chefs, using only the finest ingredients to ensure an unforgettable dining experience. Whether you're craving the comforting warmth of our signature hot pot or the crispy perfection of our Peking duck, every bite tells a story of centuries-old recipes and modern culinary techniques.
          </p>
          <p className='mb-4'>
            But Three Kingdom HotPot Restaurant is more than just a place to eat; it's a gathering place for friends and families to come together and create lasting memories. With our warm hospitality and inviting atmosphere, we invite you to join us and experience the true essence of Chinese hospitality.
          </p>
          <p>
            Come and discover the flavors of China at Three Kingdom HotPot Restaurant. We look forward to welcoming you and sharing our passion for food with you.
          </p>
        </div>

        {/* Right section */}
        <div className="flex-1">
          <img src={Home} alt="Restaurant" className="w-full h-full object-cover" />
        </div>

      </div>


    </div>
  );
}

export default About;
