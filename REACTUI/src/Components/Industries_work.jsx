import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Industries_work = () => {
    return (
        <div className='w-full h-auto bg-white p-5'>
            <div className='flex flex-col justify-center items-center'>
                <div className='h-1 w-28 bg-gradient-to-r from-purple-800 to-red-700'></div>
                <h1 className='mt-5 text-5xl text-center'><span className='font-semibold bg-gradient-to-r from-purple-800 to-red-700 bg-clip-text text-transparent inline-block'>Industries</span> we work with</h1>
                <p className='mt-5 md:text-2xl text-xl tracking-wider text-center'>Collaborating with forward-thinking clients to deliver transformative solutions.</p>
            </div>
            <div className='mt-[5%]'>
                <Swiper
                    modules={[Navigation ,Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000 }}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    spaceBetween={20}
                >
                    <SwiperSlide className='py-12'>
                        <div className="p-8 text-black text-xl rounded-xl shadow-lg">
                            <img className='border-1 border-black rounded-full' src="https://xcelore.com/wp-content/uploads/2025/01/Group-1000001852.png.webp" alt="" />
                            <h1 className='mt-2 font-bold text-2xl'>SaaS</h1>
                            <p className='mt-2'>Boost your SaaS platform with AI solutions for predictive analytics, automation, and personalized experiences, ensuring higher engagement, reduced churn, and seamless scalability.</p>
                            <button className='mt-4 p-2 bg-gradient-to-r from-orange-700 to-purple-600'>Read More.</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-12'>
                        <div className="p-8 text-black text-xl shadow-lg rounded-xl">
                            <img className='border-1 border-black rounded-full' src="https://xcelore.com/wp-content/uploads/2025/01/Group-1000001852.png.webp" alt="" />
                            <h1 className='mt-2 font-bold text-2xl'>SaaS</h1>
                            <p className='mt-2'>Boost your SaaS platform with AI solutions for predictive analytics, automation, and personalized experiences, ensuring higher engagement, reduced churn, and seamless scalability.</p>
                            <button className='mt-4 p-2 bg-gradient-to-r from-orange-700 to-purple-600'>Read More.</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-12'>
                        <div className="p-8 text-black text-xl shadow-lg rounded-xl">
                            <img className='border-1 border-black rounded-full' src="https://xcelore.com/wp-content/uploads/2025/01/Group-1000001852.png.webp" alt="" />
                            <h1 className='mt-2 font-bold text-2xl'>SaaS</h1>
                            <p className='mt-2'>Boost your SaaS platform with AI solutions for predictive analytics, automation, and personalized experiences, ensuring higher engagement, reduced churn, and seamless scalability.</p>
                            <button className='mt-4 p-2 bg-gradient-to-r from-orange-700 to-purple-600'>Read More.</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-12'>
                        <div className="p-8 text-black text-xl shadow-lg rounded-xl">
                            <img className='border-1 border-black rounded-full' src="https://xcelore.com/wp-content/uploads/2025/01/Group-1000001852.png.webp" alt="" />
                            <h1 className='mt-2 font-bold text-2xl'>SaaS</h1>
                            <p className='mt-2'>Boost your SaaS platform with AI solutions for predictive analytics, automation, and personalized experiences, ensuring higher engagement, reduced churn, and seamless scalability.</p>
                            <button className='mt-4 p-2 bg-gradient-to-r from-orange-700 to-purple-600'>Read More.</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-12'>
                        <div className="p-8 text-black text-xl shadow-lg rounded-xl">
                            <img className='border-1 border-black rounded-full' src="https://xcelore.com/wp-content/uploads/2025/01/Group-1000001852.png.webp" alt="" />
                            <h1 className='mt-2 font-bold text-2xl'>SaaS</h1>
                            <p className='mt-2'>Boost your SaaS platform with AI solutions for predictive analytics, automation, and personalized experiences, ensuring higher engagement, reduced churn, and seamless scalability.</p>
                            <button className='mt-4 p-2 bg-gradient-to-r from-orange-700 to-purple-600'>Read More.</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-12'>
                        <div className="p-8 text-black text-xl shadow-lg rounded-xl">
                            <img className='border-1 border-black rounded-full' src="https://xcelore.com/wp-content/uploads/2025/01/Group-1000001852.png.webp" alt="" />
                            <h1 className='mt-2 font-bold text-2xl'>SaaS</h1>
                            <p className='mt-2'>Boost your SaaS platform with AI solutions for predictive analytics, automation, and personalized experiences, ensuring higher engagement, reduced churn, and seamless scalability.</p>
                            <button className='mt-4 p-2 bg-gradient-to-r from-orange-700 to-purple-600'>Read More.</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
