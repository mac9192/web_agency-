import React from 'react';
import Image from 'next/image'

const Footer = () => (
 <footer className="bg-veryDarkBlue">
{/*Flex Container*/}
     <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
{/*Logo and social links container*/}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
{/*Logo*/}      
            <div>
                 <Image src="/assets/logo-white.svg" className=" mt-3 md:mt-0" alt="/" width="100" height="550" />
            </div>    
{/*Social Links Container*/}
            <div className="flex justify-center space-x-4 p-1">
{/*Link 1*/}
                <a href="#">
                    <Image src="/assets/icon-facebook.svg" className="" alt="/" width="20" height="550" />
                </a>
{/*Link 2*/}
                <a href="#">
                    <Image src="/assets/icon-youtube.svg" className="" alt="/" width="20" height="550" />
                </a>
{/*Link 3*/}
                <a href="#">
                    <Image src="/assets/icon-twitter.svg" className="" alt="/" width="20" height="550" />
                </a>
{/*Link 4*/}
                <a href="#">
                    <Image src="/assets/icon-pinterest.svg" className="" alt="/" width="20" height="550" />
                </a>
{/*Link 5*/}
                <a href="#">
                    <Image src="/assets/icon-instagram.svg" className="" alt="/" width="20" height="550" />
                </a>
            </div>
        </div> 
{/*List Container*/}
           <div className="flex justify-around space-x-32">
                <div className="flex flex-col space-y-3 text-white">
                    <a href="#" className="hover:text-brightRed">Home</a>
                    <a href="#" className="hover:text-brightRed">Pricing</a>
                    <a href="#" className="hover:text-brightRed">Products</a>
                    <a href="#" className="hover:text-brightRed">About</a>
                </div>
                <div className="flex flex-col space-y-3 text-white">
                    <a href="#" className="hover:text-brightRed">Careers</a>
                    <a href="#" className="hover:text-brightRed">Community</a>
                    <a href="#" className="hover:text-brightRed">Privacy Policy</a>
                </div>
            </div>
{/*Input Container*/}
                <div className="flex flex-col justify-between">
                <form>
            <div class="flex space-x-3">
              <input
                type="text"
                class="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button
                class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
              >
                Go
              </button>
            </div>
          </form>
          <div class="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
                </div>
           </div>


 </footer>
);

export default Footer;
