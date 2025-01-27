
// "use client"


// import { IoIosArrowDown } from "react-icons/io";


// import { IoIosArrowForward } from "react-icons/io";
// import { client } from "../../../sanity/lib/client";
// import { CiAlarmOn } from "react-icons/ci";
// import Link from "next/link";
// import { BsGraphUp } from "react-icons/bs";
// import { useEffect, useState } from "react";
// import { urlFor } from "@/sanity/lib/image";

// interface Product {
//   _id: any;
//   isNew: boolean;
//   dicountPercentage:number;
//   title: string;
//   productImage: string;     
//   description: string;
//   price: number;
//   tags: string[];
// }




// import { TfiMenuAlt } from "react-icons/tfi";
// import { MdWindow } from "react-icons/md";

// export default function Shop(){

//   const [isData,setIsData] = useState<Product[]>([]);
//     useEffect(()=>{
//     async function getProducts(){
        
//     const query = `
//     *[_type=="product"]{
//     _id,isNew,title,productImage,description,price,tags[0]
//   }`;
  
//   try{
//     const responce = await client.fetch(query);
//   setIsData(responce);
//   console.log(responce)
//   } catch(error){
//     console.error(error);
//   }
//       }
//       getProducts();
//     },[])
  
//     return(
// <main>
//         <div className="w-[1440px] h-[371px] bg-gray-50 py-8">
//         <h1 className=" font-bold ml-0 md:ml-[100px] text-2xl cursor-pointer text-blue-950">Shop</h1>

//         <div className="md:grid md:grid-cols-5 ml-[70px]">
//             <h1 className="absolute font-extrabold text-white flex justify-center text-center items-center md:ml-[70px] md:mt-24">CLOTHS<br/>5 ITEMS</h1>
//             <h1 className="absolute font-extrabold text-white flex justify-center text-center items-center md:ml-[350px] md:mt-24 mt-[300px]">CLOTHS<br/>5 ITEMS</h1>
//             <h1 className="absolute font-extrabold text-white flex justify-center text-center items-center md:ml-[630px] md:mt-24 mt-[500px]">CLOTHS<br/>5 ITEMS</h1>
//             <h1 className="absolute font-extrabold text-white flex justify-center text-center items-center md:ml-[900px] md:mt-24 mt-[700px]">CLOTHS<br/>5 ITEMS</h1>
//             <h1 className="absolute font-extrabold text-white flex justify-center text-center items-center md:ml-[1180px] md:mt-24 mt-[1000px]">CLOTHS<br/>5 ITEMS</h1>

//             <img src="/shop1.jpeg" alt="" className="w-[205px] h-[233px] "/>
          
//             <img src="/hero.jpeg" alt="" className="w-[205px] h-[233px]"/>
         
//             <img src="/shop3.jpeg" alt="" className="w-[205px] h-[233px]"/>
//             <img src="/shop4.jpeg" alt="" className="w-[205px] h-[233px]"/>
//             <img src="/shop5.jpeg" alt="" className="w-[205px] h-[233px]"/>
//         </div>
//         </div>

//         <div className="flex">
// <p className="text-gray-500 font-semibold ml-[100px] md:mt-10 mt-[1000px]">Showing all 12 results</p>

// <p className="text-gray-500 font-semibold ml-[300px] mt-10">Views:</p>
// <div className="w-[46px] h-[46px] border border-gray-400 mt-6 ml-7 flex items-center justify-center"><TfiMenuAlt className="w-[16px] h-[16px]"/> </div>
// <div className="w-[46px] h-[46px] border border-gray-400 mt-6 ml-5 flex items-center justify-center"><MdWindow className="w-[16px] h-[16px]"/></div>


// <button className="w-[141px] h-[50px] bg-gray-50 flex text-gray-500 items-center justify-center mt-6 ml-[300px] rounded-sm">
//     Popularity <IoIosArrowDown />
// </button>

// <button className="w-[94px] h-[50px] bg-sky-500 flex text-white font-semibold items-center justify-center mt-6 ml-8 rounded-sm">
//       Filter 
// </button>




//         </div>

//         <div className="md:grid md:grid-cols-5  grid grid-cols-1 md:gap-2 gap-6 mt-32 ml-[130px]">
//                     <img src="/fa-brands-1.png" alt="" className="w-[153px] h-[34px]"/>
//                     <img src="/fa-brands-2.png" alt=""className="w-[146px] h-[59px]"/>
//                     <img src="/fa-brands-3.png" alt="" className="w-[152px] h-[75px]"/>
//                     <img src="/fa-brands-4.png" alt="" className="w-[151px] h-[42px]"/>
//                     <img src="/fa-brands-5.png" alt="" className="w-[151] h-[62px]"/>
//                 </div>



// <div className="grid grid-cols-4 justify-center m-auto">
//   {isData.length > 0 ? (
//     isData.map((item) => (
//       <div key={item._id} className="m-auto flex flex-col gap-4">
//         <Link href={`../../products/${item._id}`}><img src={urlFor(item.productImage).url()} width={200} alt={item.title} /></Link>
//         <div className="text-center content">
//           <h4 className="text-[black]">{item.title}</h4>
//           <p className="text-[#838383]">{`$${item.price}`}</p>
//           <p className="text-green-600">{item.isNew ? "New" : "Used"}</p>
//           <div className="flex gap-2 justify-center mt-4 m-auto ">
//     <div className="w-5 h-5 rounded-full bg-sky-500"/>
//     <div className="w-5 h-5 rounded-full bg-green-700"/>
//     <div className="w-5 h-5 rounded-full bg-orange-500"/>
//     <div className="w-5 h-5 rounded-full bg-black"/>
//     </div>

//         </div>
//       </div>
//     ))
//   ) : (
//     <p>Loading products...</p>
//   )}
// </div>



 
//   <div className="w-[313px] h-[74px] border border-gray-400 mt-16  ml-[550px] rounded-lg shadow-md flex ]">
// <p className="text-gray-400 py-6 w-20 items-center text-center bg-gray-100">First</p>
// <p className="text-sky-500 py-6 w-12 items-center text-center bg-white">1</p>
// <p className="text-white py-6 w-14 items-center text-center bg-sky-500">2</p>
// <p className="text-sky-500 py-6 w-12 items-center text-center bg-white">3</p>
// <p className="text-sky-500 py-6 w-20 items-center text-center bg-white">Next</p>
//   </div>
//         </main>

//     )
// }



"use client";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { client } from "../../../sanity/lib/client";
import { CiAlarmOn } from "react-icons/ci";
import Link from "next/link";
import { BsGraphUp } from "react-icons/bs";
import { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdWindow } from "react-icons/md";

interface Product {
  _id: any;
  isNew: boolean;
  dicountPercentage: number;
  title: string;
  productImage: string;
  description: string;
  price: number;
  tags: string[];
}

export default function Shop() {
  const [isData, setIsData] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      const query = `
        *[_type=="product"]{
          _id,isNew,title,productImage,description,price,tags[0]
        }`;

      try {
        const response = await client.fetch(query);
        setIsData(response);
      } catch (error) {
        console.error(error);
      }
    }

    const storedCart = localStorage.getItem("carts");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }

    getProducts();
  }, []);

  const addToCart = (product: Product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    localStorage.setItem("carts", JSON.stringify(updatedCart));
  };

  return (
    <main>
      <div className="w-[1440px] h-[371px] bg-gray-50 py-8">
        <h1 className="font-bold ml-0 md:ml-[100px] text-2xl cursor-pointer text-blue-950">
          Shop
        </h1>

        <div className="md:grid md:grid-cols-5 ml-[70px]">
          {/* Shop Images */}
          <img src="/shop1.jpeg" alt="" className="w-[205px] h-[233px]" />
          <img src="/hero.jpeg" alt="" className="w-[205px] h-[233px]" />
          <img src="/shop3.jpeg" alt="" className="w-[205px] h-[233px]" />
          <img src="/shop4.jpeg" alt="" className="w-[205px] h-[233px]" />
          <img src="/shop5.jpeg" alt="" className="w-[205px] h-[233px]" />
        </div>
      </div>

      <div className="grid grid-cols-4 justify-center m-auto">
        {isData.length > 0 ? (
          isData.map((item) => (
            <div key={item._id} className="m-auto flex flex-col gap-4">
              <Link href={`../../products/${item._id}`}>
                <img
                  src={urlFor(item.productImage).url()}
                  width={200}
                  alt={item.title}
                />
              </Link>
              <div className="text-center content">
                <h4 className="text-[black]">{item.title}</h4>
                <p className="text-[#838383]">{`$${item.price}`}</p>
                <p className="text-green-600">{item.isNew ? "New" : "Used"}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>

      {/* Cart Section */}
      <div className="mt-10 px-10">
        <h2 className="text-2xl font-bold">Cart Items</h2>
        {cartItems.length > 0 ? (
          <ul className="mt-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b py-2"
              >
                <img src={urlFor(item.productImage).url()} width={100} alt="" />
                <span>{item.title}</span>
                <span>{`$${item.price}`}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </main>
  );
}
