"use client"
import { useState } from "react"
import { Carousel } from "react-responsive-carousel";
export default function Home({ isDarkMode, toggleTheme }: { isDarkMode: boolean; toggleTheme: () => void; }) {

    return (
        <div className="flex flex-col gap-10 ">

            {/*first container-box  */}

            <div className="mt-8 flex w-full gap-5 ">
                <div className={`flex flex-col gap-2 p-2 bg-${isDarkMode ? 'gray-800' : 'gray-800'} ${isDarkMode ? 'text-white' : 'text-black'}  ${isDarkMode ? 'shadow-2xl border-1 border-gray-200' : 'shadow-2xl border-gray-200'} w-1/5`}>
                    <div><img src="/pic1.jpg" alt="Pic1" className="w-64 h-96" /></div>
                    <p className="font-bold text-lg">Sacramento River Cats</p>
                    <div className={`bg-${isDarkMode ? 'gray-900' : 'gray-200'} flex w-full`}>

                        <div className="event">
                            <p className="text-gray-400 font-bold">Total Events	</p>
                            <p>48 Events</p>
                        </div>
                        <div className="ps-14">
                            <p className=" text-gray-400 font-bold">Sport</p>
                            <p className="">Baseball</p>
                        </div>
                    </div>
                </div>

                <div className={`flex flex-col gap-2 p-2 bg-${isDarkMode ? 'gray-800' : 'gray-400'} ${isDarkMode ? 'text-white' : 'text-black'}  ${isDarkMode ? 'shadow-2xl' : 'shadow-2xl'} w-1/5`}>
                    <div><img src="/pic2.jpg" alt="Pic1" className="w-64 h-96" /></div>
                    <p className="font-bold text-lg">Las Vegas Aviators</p>
                    <div className={`bg-${isDarkMode ? 'gray-900' : 'gray-200'} flex w-full`}>

                        <div className="event">
                            <p className="text-gray-400 font-bold">Total Events	</p>
                            <p>28 Events</p>
                        </div>
                        <div className="ps-14">
                            <p className=" text-gray-400 font-bold">Sport</p>
                            <p className="">Baseball</p>
                        </div>
                    </div>
                </div>

                <div className={`flex flex-col gap-2 p-2 bg-${isDarkMode ? 'gray-800' : 'gray-400'} ${isDarkMode ? 'text-white' : 'text-black'}  ${isDarkMode ? 'shadow-2xl' : 'shadow-2xl'} w-1/5`}>
                    <div><img src="/pic3.jpg" alt="Pic1" className="w-64 h-96" /></div>
                    <p className="font-bold text-lg">New Jersey Devils</p>
                    <div className={`bg-${isDarkMode ? 'gray-900' : 'gray-200'} flex w-full`}>

                        <div className="event">
                            <p className="text-gray-400 font-bold">Total Events	</p>
                            <p>15 Events</p>
                        </div>
                        <div className="ps-14">
                            <p className=" text-gray-400 font-bold">Sport</p>
                            <p className="">Ice hockey</p>
                        </div>
                    </div>
                </div>

                <div className={`flex flex-col gap-2 p-2 bg-${isDarkMode ? 'gray-800' : 'gray-400'} ${isDarkMode ? 'text-white' : 'text-black'}  ${isDarkMode ? 'shadow-2xl' : 'shadow-2xl'} w-1/5`}>
                    <div><img src="/pic2.jpg" alt="Pic1" className="w-64 h-96" /></div>
                    <p className="font-bold text-lg">Las Vegas Aviators</p>
                    <div className={`bg-${isDarkMode ? 'gray-800' : 'gray-200'} flex w-full`}>

                        <div className="event">
                            <p className="text-gray-400 font-bold">Total Events	</p>
                            <p>28 Events</p>
                        </div>
                        <div className="ps-14">
                            <p className=" text-gray-400 font-bold">Sport</p>
                            <p className="">Baseball</p>
                        </div>
                    </div>
                </div>

                <div className={`flex flex-col gap-2 p-2 bg-${isDarkMode ? 'gray-800' : 'gray-400'} ${isDarkMode ? 'text-white' : 'text-black'}  ${isDarkMode ? 'shadow-2xl' : 'shadow-2xl'} w-1/5`}>
                    <div><img src="/pic6.jpg" alt="Pic1" className="w-full h-50" />
                        <div className="absolute top-28 right-12 bg-black text-white px-2 py-1 text-xs">
                            Ad
                        </div>
                    </div>
                    <div className="font-bold text-center text-2xl">Advertisement Title</div>
                    <div className={`relative bg-${isDarkMode ? 'gray-900' : 'gray-200'}`}>
                        <p className={`absolute text-sm `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptatem eius, corporis quasi delectus accusamus facilis ea obcaecati ut eaque laudantium commodi odio repellat consequatur ipsa tempore pariatur rem doloribus!</p>
                    </div>
                </div>

            </div>

            <div className="flex justify-center ">
                <p className="text-white bg-sky-500 p-2 rounded-lg">See more</p>
            </div>


            {/* Second conatiner-box */}

            <div className={`bg-${isDarkMode ? 'gradient-to-b from-gray-800 to-black text-white' : 'white'} text-${isDarkMode ? 'white' : 'black'} ${isDarkMode ? 'shadow-2xl' : 'shadow-2xl'} h-auto px-56 py-8`}>
                <div className="text-center flex flex-col gap-8">
                    <h1 className="text-5xl font-bold">Collection Spotlight</h1>
                    <p>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
                    {/* <Carousel className="rounded-xl"> */}
                        <div className="flex gap-10 justify-center carousel">

                            <div className={`flex flex-col gap-3 p-2 bg-${isDarkMode ? 'gray-700' : 'white'} ${isDarkMode ? 'shadow-2xl' : 'shadow-2xl'} ${isDarkMode ? 'bg-gray-900' : 'bg-gray-900'}`}>
                                <div className="flex justify-center">
                                    <img src="/pic4.jpg" alt="" className="w-52 h-72" />
                                </div>
                                <p>-----------------------------</p>
                                <div className="text-sm flex flex-col gap-2">
                                    <p className="font-bold text-lg">Las Vegas Aviators</p>
                                    <p>OCT 15 | SUN | 4:30 PM</p>
                                    <p>Las Vegas Ballpark, Las Vegas, <br />Nevada</p>
                                </div>
                                <div className={`bg-black text-white`}>
                                    <p className="p-1">Take Flight Collection</p>
                                </div>
                            </div>

                            <div className={`flex flex-col gap-3 p-2 bg-${isDarkMode ? 'gray-700' : 'white'} ${isDarkMode ? 'shadow-2xl' : 'shadow-2xl'} ${isDarkMode ? 'bg-gray-900' : 'bg-gray-900'}`}>
                                <div className="flex justify-center">
                                    <img src="/pic5.jpg" alt="" className="w-52 h-72" />
                                </div>
                                <p>-----------------------------</p>
                                <div className="text-sm flex flex-col gap-2">
                                    <p className="font-bold text-lg">Sacramento River Cats</p>
                                    <p>OCT 15 | SUN | 4:30 PM</p>
                                    <p>Sutter Health Park, Sacramento, <br />California</p>
                                </div>
                                <div className={`bg-black text-white`}>
                                    <p className="p-1">Orange Collection</p>
                                </div>
                            </div>

                            <div className={`flex flex-col gap-3 p-2 bg-${isDarkMode ? 'gray-700' : 'white'} ${isDarkMode ? '' : 'shadow-2xl'} ${isDarkMode ? 'bg-gray-900' : 'bg-gray-900'}`}>
                                <div className="flex justify-center">
                                    <img src="/pic4.jpg" alt="" className="w-52 h-72" />
                                </div>
                                <p>-----------------------------</p>
                                <div className="text-sm flex flex-col gap-2">
                                    <p className="font-bold text-lg">Las Vegas Aviators</p>
                                    <p>OCT 15 | SUN | 4:30 PM</p>
                                    <p>Las Vegas Ballpark, Las Vegas, <br />Nevada</p>
                                </div>
                                <div className={`bg-black text-white`}>
                                    <p className="p-1">Take Flight Collection</p>
                                </div>
                            </div>
                        </div>
                    {/* </Carousel> */}
                </div>

            </div>

        </div>

    )
}