import React from 'react'

export const OurProduct = () => {
    return (
        <div className='w-full h-auto pb-1 border-2 pt-5 border-white px-5 overflow-hidden'>
            <div className='flex justify-center items-center gap-3 mt-4'>
                <span className='w-1 md:h-15 h-9 bg-gradient-to-b from-purple-800 to-red-700'></span>
                <h1 className='md:text-5xl text-xl md:whitespace-nowrap'>Our<span className='font-semibold'> Unique AI products</span> for Real-World Challenges</h1>
            </div>
            <div>
                <div className='p-[5%] grid grid-cols-2 items-center'>
                    <div className=''>
                        <div className='w-[5rem]'>
                            <img className='' src="https://xcelore.com/wp-content/uploads/2025/01/Group-41700.png.webp" alt="" />
                        </div>
                        <h1 className='font-bold md:text-3xl text-2xl mt-3'>AI Agent</h1>
                        <div className='mt-8'>
                            <p className='flex items-center gap-2 md:text-2xl text-xl font-light mb-5'><img src="https://xcelore.com/wp-content/uploads/2025/01/Vector2.png.webp" alt="" />24/7 customer support and operational automation.</p>
                            <p className='flex items-center gap-2 md:text-2xl text-xl font-light mt-6'><img src="https://xcelore.com/wp-content/uploads/2025/01/Vector2.png.webp" alt="" />Intelligent lead generation through personalized interactions.</p>
                            <p className='flex items-center gap-2 md:text-2xl text-xl font-light mt-6'><img src="https://xcelore.com/wp-content/uploads/2025/01/Vector2.png.webp" alt="" />Streamlined workflows for maximum efficiency.</p>
                            <button className='px-8 py-4 bg-black text-white rounded-lg mt-7'>Explore Exei</button>
                        </div>

                    </div>
                    <div>
                        <img className=' hover:sca' src="https://xcelore.com/wp-content/uploads/2025/01/Frame-1000004791-1.png.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
