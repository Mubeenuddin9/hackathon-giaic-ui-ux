
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";




export default function Footer(){
    return(
        
<footer>
        <div className="flex items-center mt-[200px] bg-slate-100 px-12 py-12">
        <h1 className=" font-bold ml-[100px] text-2xl cursor-pointer text-blue-950">Bandage</h1>
        <div className="flex space-x-2  text-blue-500 ml-[900px]">
        <FaInstagram />
        <FaYoutube />
        <FaFacebook />
        <FaTwitter />
        </div>
        </div>

        <div className="md:flex md:items-center md:space-x-20 md:ml-[150px] ml-11">
        <div className="md:w-full mb-4 md:mb-0 mt-11">
            <h1 className="font-semibold mb-4 text-blue-950">Company Info</h1>
            <ul>
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are Hiring</li>
                <li>Blog</li>
              </ul>
              </div>

              <div className="w-full md:w-1/4 mb-4 md:mb-0 mt-11">
            <h1 className="font-semibold mb-4 text-blue-950">Legal</h1>
            <ul>
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are Hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0 mt-11">
            <h1 className="font-semibold mb-4 text-blue-950">Features</h1>
            <ul>
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are Hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0 mt-11">
            <h1 className="font-semibold mb-4 text-blue-950">Resources</h1>
            <ul>
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are Hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-4 md:mb-0 mt-11">
            <h1 className="font-semibold mb-4 text-blue-950">Get In Touch</h1>
            <div className="flex">
                <input
                  type="email"
                  className=" px-3 py-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                  placeholder="Your email"
                />
                <button
                  type="submit"
                  className="px-3 py-3 bg-blue-500 text-white   hover:bg-blue-600"
                  
                >
                <h1>Subscribe</h1>
                </button>

        
                
              </div>
         </div>
          
        </div>


        <div className="flex items-center mt-[200px] bg-slate-100 px-6 py-6">
        <h1 className=" font-bold md:ml-[100px] text-2xl cursor-pointer text-blue-950">Made with Love By Finland All Rights Reserved</h1>
        </div>
      </footer>
    )
}