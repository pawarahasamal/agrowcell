import React from 'react'
// import heroImage from '../assets/Herogif.gif'
import heroImage from '../assets/coconutg.jpg';
import { useNavigate } from "react-router-dom";

const Details = () => {

    const navigate = useNavigate();

  return (
    // <section id='home' className='container flex flex-col md:flex-row justify-between items-center mx-auto pt-44 pb-6 px-4 sm:px-6 lg:px-8'>
    <section id='home' className='min-h-screen container flex flex-col md:flex-row justify-between items-center mx-auto py-20 pb-6 px-4 sm:px-6 lg:px-8'>
    
        {/* left col */}
        <div className='w-full md:w-1/2 space-y-8'>
            {/* busy section */}
            <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group'>
                <span className='text-blue-600 group-hover:text-amber-300 group-hover:scale-110 transition-transform text-5xl'>
                    🏃🏻‍♂️‍➡️
                </span>

                <span className='text-sm font-medium'>Why AGROWCEL 🚩</span>
            </div>

            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold leadiing-tight text-[#025c0e]'>
                PURE CEYLON
                <span className='text-black relative inline-block'>
                    PRODUCTS FROM
                </span>
                <span className='text-[#039c18] relative inline-block'>
                    AGROWCELL
                </span> 
                <span className='inline-block ml-2 animate-pulse text-6xl'>🥥</span>
            </h1>

            <p className='text-gray-600 text-lg md:text-xl max-w-xl'>
                Agrowcell International (Pvt) Ltd is a strongly dedicated export company currently based in Sri Lanka where there is a long history for its rare spices and agricultural products mainly because of its rich soil and geographical location.
                <br></br> <br></br> <br></br>
                We started as a small scale company owing our own spice plantation in Sri Lanka and now, we have expanded with a strong network of growers around the country to cater the current demand.
            </p>

            {/* <button className='bg-[#8A784E] text-white px-8 py-4 font-medium rounded-xl hover:bg-[#3B3B1A] cursor-pointer transition-all hover:shadow-lg hover:shadow-[#64643f]'>
                More About ⏬
            </button> */}

            <button
                className='bg-[#8A784E] text-white px-8 py-4 font-medium rounded-xl hover:bg-[#3B3B1A] cursor-pointer transition-all hover:shadow-lg hover:shadow-[#64643f]'
                onClick={() => navigate("/about")}
            >
                More About ⏬
            </button>

        </div>

        {/* right col */}
        <div className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12'>
            <div className='relative'>
                <img src={heroImage} alt='Hero Image' className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300' />
            </div>
        </div>
    </section>
  )
}

export default Details