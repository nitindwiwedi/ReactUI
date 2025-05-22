import React from 'react'
import bgImg from '../Images/Untitled-2.png'

export const Tech_innovators = () => {
    return (
        <div className='w-full h-screen border-2 border-white bg-white'>
            <div className='w-full h-full'>
                <div className='absolute h-full w-full flex items-center'>
                    <div className='relative left-[7%] w-[50%]'>
                        <h1 className='md:text-5xl font-light text-3xl whitespace-nowrap lg:text-7xl'>We are a dynamic team of <br /> <span className='font-semibold'>Tech Innovators</span></h1>
                        <img className='relative left-[23%] mt-4' src="https://xcelore.com/wp-content/uploads/2025/01/Vector-3.png.webp" alt="" />
                        <div className='flex items-center leading-14 mt-10 font-light overflow-hidden'>
                            <p className='wrap-break-word md:leading-snug md:text-4xl text-xl '>With a mission to redefine digital innovation with AI implementation and machine learning integration into business applications & products, helping organizations unlock their full potential with advanced AI solutions.</p>
                        </div>
                        <div className='flex mt-10 gap-7 items-center'>
                            <i className="fa-solid fa-chevron-left text-xl font-semibold border-2 border-black py-3 px-4 rounded-full"></i>
                            <i className="fa-solid fa-chevron-right text-xl font-semibold border-2 border-black py-3 px-4 rounded-full"></i>
                        </div>
                    </div>
                    <img className='absolute h-full right-0' src={bgImg} alt="" />
                </div>
            </div>
        </div>
    )
}
