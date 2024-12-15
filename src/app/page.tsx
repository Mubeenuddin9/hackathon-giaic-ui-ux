



import { IoIosArrowForward } from "react-icons/io";

import { CiAlarmOn } from "react-icons/ci";
import { BsGraphUp } from "react-icons/bs";







export default function Navbar(){

 

    return(
        <main>
    
    

    


{/* hero section */}
<div className="">
  <img
     src="/hero.jpeg"
      alt="img"
      className="w-[1439px] h-[716px]"
   />
   <div className=" absolute md:ml-[198px] top-0 mt-[350px]">
      <h2 className=" font-bold text-white">
        Summer 2020
      </h2>
      <h1 className="text-6xl mt-11 font-bold text-white">
        NEW COLLECTION
      </h1>

      <p className="mt-11 text-white">we know how large objects will act,<br/>but things on a small scale.</p>

      <button className="text-white w-[221px] h-[62px] bg-green-500 mt-11 flex items-center justify-center text-2xl font-semibold">SHOP NOW</button>
    </div>

    {/* EDITORS PICK SECTION */}


    <div className="bg-gray-50  ">
      <div>
      <h1 className="text-center py-4  text-blue-950 font-semibold text-2xl">EDITOR'S PICK</h1>
      <p className="text-center text-gray-500 font-semibold">Problems trying to resolve the conflict between</p>
      </div>
      <div className="md:ml-[198px] mt-9  md:w-[1050px] md:h-[670px] md:flex  space-x-6 relative">
        <img src="/pic4.jpeg" alt="#" className="w-[510px] h-[500px]"/>
        <button className="w-[161px] h-[52px] bg-white absolute top-[420px] font-semibold">MEN</button>
        <img src="/pic3.jpeg" alt="" className="w-[240px] h-[500px] "/>
        <button className="w-[161px] h-[52px] ml-72 bg-white absolute md:top-[420px] top-[780px] md:left-[550px] font-semibold">WOMAN</button>
        <div className="">
        <img src="/pic2.jpeg" alt="" className="w-[240px] h-[242px]"/>
        <button className="w-[161px] h-[52px] md:ml-72 bg-white absolute md:top-[170px] md:left-[550px] font-semibold">ACCESSORIES</button>
        <img src="/pic1.jpeg" alt="" className="w-[240px] h-[242px] mt-4"/>
        <button className="w-[161px] h-[52px] md:ml-72 bg-white absolute md:top-[420px] md:left-[550px] font-semibold">KIDS</button>
    </div>
      </div>
    </div>
</div>


{/* Featured Products */}


<div>
<div className="mt-16">
  <h2 className="text-center text-gray-500 font-semibold">Featured Products</h2>
  <h1 className="text-center text-blue-950 font-semibold text-2xl mt-4">BESTSELLER PRODUCTS</h1>
  <p className="text-center text-gray-500 font-semibold mt-4">Problems trying to resolve the conflict<br/>between</p>
  </div>

  <div className="md:ml-[100px] md:grid md:grid-cols-4 mt-20">
  <img src="/gp8.jpeg" alt="" className="w-[239px] h-[427px]" />
  <img src="/gp1.jpeg" alt="" className="w-[239px] h-[427px]" />
  <img src="/gp2.jpeg" alt="" className="w-[239px] h-[427px]" />
  <img src="/gp3.jpeg" alt="" className="w-[239px] h-[427px]" />
  </div>
  <div className="md:flex md:items-center  md:text-center">
  <div className="mt-6 md:ml-[150px]">
    <h1 className="font-semibold text-blue-950">Graphic Design</h1>
    <p className="font-semibold text-gray-500 mt-4">English Department</p>
    <p className="mt-4 text-gray-400 font-semibold">$16.48 <span className="text-green-700">$6.48</span></p>
   
  </div>
  <div className="mt-6 md:ml-[170px]">
    <h1 className="font-semibold text-blue-950">Graphic Design</h1>
    <p className="font-semibold text-gray-500 mt-4">English Department</p>
    <p className="mt-4 text-gray-400 font-semibold">$16.48 <span className="text-green-700">$6.48</span></p>
  </div>
  <div className="mt-6 md:ml-[180px]">
    <h1 className="font-semibold text-blue-950">Graphic Design</h1>
    <p className="font-semibold text-gray-500 mt-4">English Department</p>
    <p className="mt-4 text-gray-400 font-semibold">$16.48 <span className="text-green-700">$6.48</span></p>
  </div>
  <div className="mt-6 md:ml-[190px]">
    <h1 className="font-semibold text-blue-950">Graphic Design</h1>
    <p className="font-semibold text-gray-500 mt-4">English Department</p>
    <p className="mt-4 text-gray-400 font-semibold">$16.48 <span className="text-green-700">$6.48</span></p>
  </div>
  </div>

<div className="md:flex">

  <div className="md:flex mt-4 md:ml-[170px] space-x-2">
    <div className="w-5 h-5 rounded-full bg-sky-500"/>
    <div className="w-5 h-5 rounded-full bg-green-700"/>
    <div className="w-5 h-5 rounded-full bg-orange-500"/>
    <div className="w-5 h-5 rounded-full bg-black"/>
    </div>
    <div className="md:flex mt-4 md:ml-[220px] space-x-2">
    <div className="w-5 h-5 rounded-full bg-sky-500"/>
    <div className="w-5 h-5 rounded-full bg-green-700"/>
    <div className="w-5 h-5 rounded-full bg-orange-500"/>
    <div className="w-5 h-5 rounded-full bg-black"/>
    </div>

    <div className="md:flex mt-4 md:ml-[230px] space-x-2">
    <div className="w-5 h-5 rounded-full bg-sky-500"/>
    <div className="w-5 h-5 rounded-full bg-green-700"/>
    <div className="w-5 h-5 rounded-full bg-orange-500"/>
    <div className="w-5 h-5 rounded-full bg-black"/>
    </div>

    <div className="md:flex mt-4 md:ml-[240px] space-x-2">
    <div className="w-5 h-5 rounded-full bg-sky-500"/>
    <div className="w-5 h-5 rounded-full bg-green-700"/>
    <div className="w-5 h-5 rounded-full bg-orange-500"/>
    <div className="w-5 h-5 rounded-full bg-black"/>
    </div>

    </div>



    <div className="ml-[100px] grid grid-cols-4 mt-20">
  <img src="/gp4.jpeg" alt="" className="w-[239px] h-[427px]" />
  <img src="/gp5.jpeg" alt="" className="w-[239px] h-[427px]" />
  <img src="/gp6.jpeg" alt="" className="w-[239px] h-[427px]" />
  <img src="/gp7.jpeg" alt="" className="w-[239px] h-[427px]" />
  </div>
  <div className="flex items-center  text-center">
  <div className="mt-6 ml-[150px]">
    <h1 className="font-semibold text-blue-950">Graphic Design</h1>
    <p className="font-semibold text-gray-500 mt-4">English Department</p>
    <p className="mt-4 text-gray-400 font-semibold">$16.48 <span className="text-green-700">$6.48</span></p>
   
  </div>
  <div className="mt-6 ml-[170px]">
    <h1 className="font-semibold text-blue-950">Graphic Design</h1>
    <p className="font-semibold text-gray-500 mt-4">English Department</p>
    <p className="mt-4 text-gray-400 font-semibold">$16.48 <span className="text-green-700">$6.48</span></p>
  </div>
  <div className="mt-6 ml-[180px]">
    <h1 className="font-semibold text-blue-950">Graphic Design</h1>
    <p className="font-semibold text-gray-500 mt-4">English Department</p>
    <p className="mt-4 text-gray-400 font-semibold">$16.48 <span className="text-green-700">$6.48</span></p>
  </div>
  <div className="mt-6 ml-[190px]">
    <h1 className="font-semibold text-blue-950">Graphic Design</h1>
    <p className="font-semibold text-gray-500 mt-4">English Department</p>
    <p className="mt-4 text-gray-400 font-semibold">$16.48 <span className="text-green-700">$6.48</span></p>
  </div>
  </div>

<div className="flex">

  <div className="flex mt-4 ml-[170px] space-x-2">
    <div className="w-5 h-5 rounded-full bg-sky-500"/>
    <div className="w-5 h-5 rounded-full bg-green-700"/>
    <div className="w-5 h-5 rounded-full bg-orange-500"/>
    <div className="w-5 h-5 rounded-full bg-black"/>
    </div>
    <div className="flex mt-4 ml-[220px] space-x-2">
    <div className="w-5 h-5 rounded-full bg-sky-500"/>
    <div className="w-5 h-5 rounded-full bg-green-700"/>
    <div className="w-5 h-5 rounded-full bg-orange-500"/>
    <div className="w-5 h-5 rounded-full bg-black"/>
    </div>

    <div className="flex mt-4 ml-[230px] space-x-2">
    <div className="w-5 h-5 rounded-full bg-sky-500"/>
    <div className="w-5 h-5 rounded-full bg-green-700"/>
    <div className="w-5 h-5 rounded-full bg-orange-500"/>
    <div className="w-5 h-5 rounded-full bg-black"/>
    </div>

    <div className="flex mt-4 ml-[240px] space-x-2">
    <div className="w-5 h-5 rounded-full bg-sky-500"/>
    <div className="w-5 h-5 rounded-full bg-green-700"/>
    <div className="w-5 h-5 rounded-full bg-orange-500"/>
    <div className="w-5 h-5 rounded-full bg-black"/>
    </div>

    </div>

  </div>


{/* new section */}


<div className="w-full h-[709px] bg-emerald-700 mt-40 py-[125px]">
  <div>
    <img src="/hero2.png" alt="" className="w-[410px] h-[585px] ml-[800px] "/>

    <div className="md:w-full absolute md:ml-[198px] top-[3350px] md:mt-[350px]">
      <h2 className=" font-bold text-white">
        SUMMER 2020
      </h2>
      <h1 className="text-6xl mt-11 font-bold text-white">
        Vita Classic<br/>Product
      </h1>

      <p className="mt-11 text-white">we know how large objects will act,<br/>but things on a small scale.</p>
      <div className="flex items-center space-x-6">
      <p className="mt-11 text-white text-2xl font-semibold">$16.48</p> 
      <button className="text-white w-[212px] h-[52px] bg-emerald-500 mt-11 flex items-center justify-center  font-semibold rounded-sm">ADD TO CART</button>
      
      </div>
</div>
  </div>
  

</div>


{/* section2 */}
<div className="flex">
<div>
          <img src="/asian.png" alt="" className="w-[704px] h-[682px]"/>
</div>
<div className="mt-[200px]">
<h2 className=" font-bold text-gray-400">
        SUMMER 2020
      </h2>
      <h1 className="text-6xl mt-11 font-bold text-blue-950">
        Part of the Nueral<br/>Universe
      </h1>

      <p className="mt-11 text-gray-500">we know how large objects will act,<br/>but things on a small scale.</p>
      <div className="md:flex items-center space-x-6">
      <button className=" w-[212px] h-[52px] mt-11 text-white  font-semibold bg-emerald-500 rounded-sm">BUY NOW</button> 
      <button className=" w-[212px] h-[52px] text-emerald-500 mt-11 flex items-center justify-center border border-emerald-500 font-semibold rounded-sm">READ MORE</button>
      </div>
</div>
</div>


{/* featuredpost */}

<div>

<div className="mt-16">
  <h2 className="text-center text-sky-500 font-semibold">Practice Advise</h2>
  <h1 className="text-center text-blue-950 font-semibold text-2xl mt-4">Featured Posts</h1>
  <p className="text-center text-gray-500 font-semibold mt-4">Problems trying to resolve the conflict between<br/>the two realms of Classical physics: Newtonian mechanics</p>
  </div>

<div className="md:flex">

<div>
<div className="w-[348px] h-[606px] bg-white shadow-md md:ml-[100px] mt-16">
  <img src="/house.jpeg" alt="" className="w-[348px] h-[300px]"/>
  <ul className="flex ml-6 space-x-2 mt-5">
    <li className="text-sky-500">Google</li>
    <li>Trending</li>
    <li>New</li>
  </ul>
  <h1 className="ml-6 mt-2 text-2xl">Loudest à la Madison #1<br/> 
  (L'integral)</h1>
  <p className="ml-6 mt-2 font-extralight text-gray-500">We focus on ergonomics and meeting<br/> 
you where you work. It's only a<br/>
keystroke away.</p>

<div className="flex">
<div className="flex items-center">
  <CiAlarmOn className="w-6 h-6 ml-6 mt-2 text-sky-500"/>
  <p className="text-gray-500 font-extralight mt-2">22 April 2021</p>
</div>

<div className="flex items-center">
  <BsGraphUp className="w-6 h-6 ml-14 mt-2 text-green-800"/>
  <p className="text-gray-500 font-extralight mt-2">10 Components</p>
</div>

</div>
<div className="flex items-center">
<h1 className="text-gray-600 font-semibold mt-5 ml-6">Learn More</h1>
<IoIosArrowForward className="text-sky-500 mt-5 w-7 h-7"/>

</div>
</div>


</div>




<div>
<div className="w-[348px] h-[606px] bg-white shadow-md md:ml-[100px] mt-16">
  <img src="/car.jpeg" alt="" className="w-[348px] h-[300px]"/>
  <ul className="flex ml-6 space-x-2 mt-5">
    <li className="text-sky-500">Google</li>
    <li>Trending</li>
    <li>New</li>
  </ul>
  <h1 className="ml-6 mt-2 text-2xl">Loudest à la Madison #1<br/> 
  (L'integral)</h1>
  <p className="ml-6 mt-2 font-extralight text-gray-500">We focus on ergonomics and meeting<br/> 
you where you work. It's only a<br/>
keystroke away.</p>

<div className="flex">
<div className="flex items-center">
  <CiAlarmOn className="w-6 h-6 ml-6 mt-2 text-sky-500"/>
  <p className="text-gray-500 font-extralight mt-2">22 April 2021</p>
</div>

<div className="flex items-center">
  <BsGraphUp className="w-6 h-6 ml-14 mt-2 text-green-800"/>
  <p className="text-gray-500 font-extralight mt-2">10 Components</p>
</div>

</div>
<div className="flex items-center">
<h1 className="text-gray-600 font-semibold mt-5 ml-6">Learn More</h1>
<IoIosArrowForward className="text-sky-500 mt-5 w-7 h-7"/>

</div>
</div>


</div>





<div>
<div className="w-[348px] h-[606px] bg-white shadow-md md:ml-[100px] mt-16">
  <img src="/umbrella.jpeg" alt="" className="w-[348px] h-[300px]"/>
  <ul className="flex ml-6 space-x-2 mt-5">
    <li className="text-sky-500">Google</li>
    <li>Trending</li>
    <li>New</li>
  </ul>
  <h1 className="ml-6 mt-2 text-2xl">Loudest à la Madison #1<br/> 
  (L'integral)</h1>
  <p className="ml-6 mt-2 font-extralight text-gray-500">We focus on ergonomics and meeting<br/> 
you where you work. It's only a<br/>
keystroke away.</p>

<div className="flex">
<div className="flex items-center">
  <CiAlarmOn className="w-6 h-6 ml-6 mt-2 text-sky-500"/>
  <p className="text-gray-500 font-extralight mt-2">22 April 2021</p>
</div>

<div className="flex items-center">
  <BsGraphUp className="w-6 h-6 ml-14 mt-2 text-green-800"/>
  <p className="text-gray-500 font-extralight mt-2">10 Components</p>
</div>

</div>
<div className="flex items-center">
<h1 className="text-gray-600 font-semibold mt-5 ml-6">Learn More</h1>
<IoIosArrowForward className="text-sky-500 mt-5 w-7 h-7"/>

</div>
</div>


</div>


</div>

</div>








     

</main>
    )
}