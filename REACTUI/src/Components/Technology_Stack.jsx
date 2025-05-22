import React from 'react'

export const Technology_Stack = () => {
    return (
        <div className='w-full h-auto bg-white mt-5 pb-5 px-2'>
            <div className='flex flex-col justify-center items-center'>
                <div className='h-1 w-28 bg-gradient-to-r from-purple-800 to-red-700'></div>
                <h1 className='mt-5 text-5xl font-semibold bg-gradient-to-r from-purple-800 to-red-700 bg-clip-text text-transparent inline-block text-center'>Technology Stack</h1>
                <p className='mt-5 md:text-2xl text-xl text-center'>Building Scalable Solutions with Modern Tools</p>
            </div>
            <div className='grid md:grid-cols-5 grid-cols-3 md:p-0 pl-[10%] space-y-2 gap-[6%] mt-[5%]'>
                <div className='cursor-pointer'>AI/ML</div>
                <div className='cursor-pointer'>IOT</div>
                <div className='cursor-pointer'>AR</div>
                <div className='cursor-pointer'>Mobile Application</div>
                <div className='cursor-pointer'>Front-end & Web</div>
                <div className='cursor-pointer'>Back-End</div>
                <div className='cursor-pointer'>Cloud & Devops</div>
            </div>
            <div className='grid md:grid-cols-5 grid-cols-3 space-y-4 space-x-2 items-center md:mt-[5%] md:p-0 px-5 mt-[8%]'>
                <div>
                <img src="https://xcelore.com/wp-content/uploads/2025/01/Untitled-1-1.png.webp" alt="" />
                </div>
                <div>
                <img src="https://xcelore.com/wp-content/uploads/2025/01/Untitled-2-1.png.webp" alt="" />
                </div>
                <div>
                <img src="https://xcelore.com/wp-content/uploads/2025/01/Untitled-3.png.webp" alt="" />
                </div>
                <div>
                <img src="https://xcelore.com/wp-content/uploads/2025/01/Untitled-4.png.webp" alt="" />
                </div>
                <div>
                <img src="https://xcelore.com/wp-content/uploads/2025/01/Untitled-5.png.webp" alt="" />
                </div>
            </div>
        </div>
    )
}
