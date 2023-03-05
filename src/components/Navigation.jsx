import React from 'react'
import Image from 'next/image'


const Navigation = () => (


 <nav className="relative mx-auto p-6">

    <div className="flex items-center justify-between">
         <div className="pt-2">
             <Image src = "/assets/logo.svg" alt="/" width="150" height="100" />
         </div>
         <div className="hidden md:flex flex space-x-6">
             <a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
             <a href="#" className="hover:text-darkGrayishBlue">Product</a>
             <a href="#" className="hover:text-darkGrayishBlue">About Us</a>
             <a href="#" className="hover:text-darkGrayishBlue">Careers</a>
             <a href="#" className="hover:text-darkGrayishBlue">Community</a>
         </div>
         <a className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">
                Get Started
         </a>
    </div>
 </nav>
);

export default Navigation;
