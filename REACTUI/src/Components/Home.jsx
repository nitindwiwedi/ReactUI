import React from 'react'


export const Home = () => {
  return (
    <div className='bg-[url(../../public/BG.webp)] w-full h-screen bg-no-repeat bg-cover relative'>
      <div className='top-0 absolute w-full h-screen bg-black/40 text-white px-[5%] flex flex-col justify-center'>

      </div>
      <div className='absolute top-0 w-full h-screen bg-red-500/10 text-white px-[5%] flex flex-col justify-center'>
      </div>
      <div className='absolute bottom-[38%] left-[5%] text-white'>
        <div className='md:text-6xl text-4xl font-light'>Your Trusted <span className='font-medium'>AI Development Company </span></div>
        <div className='md:text-6xl text-4xl mt-4 font-light'>for pioneering Innovation</div>
        <p className='mt-[3%] md:text-2xl text-xl font-light'>We empower businesses to create, state of the art digital products and platforms incorporating Artificial <br />Intelligence, LLMs, Machine learning & new age technologies.</p>
        <button className='mt-[3%] px-7 rounded-lg py-2 bg-gradient-to-r from-purple-400 to-orange-400'>Get in Touch!</button>
      </div>

      <div className='absolute bottom-0 bg-black/40 flex justify-between items-center w-full px-[5%] py-[1%]'>
          <div className='text-white flex justify-center items-center w-1/4 flex-col gap-3 border-r-[1px] border-[#00000004]'>
            <img src="https://xcelore.com/wp-content/uploads/2025/01/icon.png.webp" alt="" />
            <h1 className='md:text-3xl text-2xl font-bold'>15 +</h1>
            <h3 className='md:text-xl text-sm text-gray-400 whitespace-nowrap'>Global Clients </h3>
          </div>
          <div className='text-white flex flex-col items-center w-1/4  justify-center gap-3'>
            <img src="https://xcelore.com/wp-content/uploads/2025/01/Layer_1.png.webp" alt="" />
            <h1 className='md:text-3xl text-2xl font-bold'>25 +</h1>
            <h3 className='md:text-xl text-sm text-gray-400'>Successful Projects</h3>
          </div>
          <div className='text-white flex flex-col items-center w-1/4  justify-center gap-3'>
            <img src="https://xcelore.com/wp-content/uploads/2025/01/Layer_x0020_1.png.webp" alt="" />
            <h1 className='md:text-3xl text-2xl font-bold'>50 +</h1>
            <h3 className='md:text-xl text-sm text-center text-gray-400'>Years of Combined Leadership<br></br>experience</h3>
          </div>
          <div className='text-white flex flex-col items-center w-1/4  justify-center gap-3'>
            <img src="https://xcelore.com/wp-content/uploads/2025/01/Vector4.png.webp" alt="" />
            <h1 className='md:text-3xl text-2xl font-bold'>125 +</h1>
            <h3 className='md:text-xl text-sm text-gray-400'>Team Members</h3>
          </div>
      </div>
    </div>
  )
}
