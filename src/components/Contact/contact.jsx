import React from 'react';
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { FaFacebook } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaRegCopyright } from 'react-icons/fa6';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex flex-col items-center">
      <h1 className='text-3xl font-bold mt-20'>Get In Touch!</h1>
      
      {/* Top section */}
      <div className="mt-8 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.2728615189689!2d85.31212946959657!3d27.683568398512275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e4fb83e137%3A0xbdae177cdde9b49a!2zVGhyZWUgS2luZ2RvbSBSZXN0YXVyYW50IC_kuInlm73mvJTkuYnngavplIU!5e0!3m2!1sen!2snp!4v1716102546691!5m2!1sen!2snp"
          width="100%" height="340" style={{ border: 0 }} allowfullscreen="" loading="lazy" title="Google Maps" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      {/* Bottom section */}
      <div className="mt-5 w-full">
        {/* Add your content for the bottom section here */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          <div className='flex flex-col items-center'>
            <IoCallSharp size={50} color="green" />
            <p className='text-2xl font-bold'>CALL TODAY</p>
            <p>+977-9702895914</p>
            <p>+977-9843142345</p>
          </div>
          <div className='flex flex-col items-center'>
            <FaLocationDot size={50} color="red" />
            <p className='text-2xl font-bold'>ADDRESS</p>
            <p>Bakundole, Lalitpur, Nepal</p>
          </div>
          <div className='flex flex-col items-center'>
            <MdEmail size={50} color="red" />
            <p className='text-2xl font-bold'>EMAIL US</p>
            <p>nepalchina182@gmail.com</p>
          </div>
          <div className='flex flex-col items-center'>
            <MdAccessTime size={50} color="gold" />
            <p className='text-2xl font-bold'>OPENING HOURS</p>
            <p>Mon-Sat 10:00-22:00</p>
            <p>Sun 10:00-17:00</p>
          </div>
        </div>
        <div className='relative flex justify-center mt-2 mr-5' style={{}}>
          <p className='relative flex mr-3 mt-1'>Follow Us On:</p>
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/threekingdomshotpotchineserestaurant" className="text-blue-500 hover:text-blue-700" style={{ textDecoration: 'none' }}>
                {/* Insert your social media icon */}
                <FaFacebook size={30} color="#1877F2" style={{ position: 'relative'}} />
              </a>
              {/* Repeat for other social media links */}
              <a href="https://www.instagram.com/threekingdomshotpotrestaurant/" className="text-blue-500 hover:text-blue-700" style={{ textDecoration: 'none' }}>
                {/* Insert your social media icon */}
                <FaInstagram size={30} color="#E4405F" style={{ position: 'relative'}}/>
              </a>
          </div>
        </div>
        <div className='flex justify-center relative mt-1'>
          <FaRegCopyright className='relative flex mt-1 mr-1'/>
          <p>2024 Three Kingdoms HotPot Restaurant. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
