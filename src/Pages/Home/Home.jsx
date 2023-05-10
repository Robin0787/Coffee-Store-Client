import React from 'react';
import NavigationMenu from "../../Shared/Navigation/NavigationMenu";
import firstIcon from "../../assets/images/icons/1.png";
import secondIcon from "../../assets/images/icons/2.png";
import thirdIcon from "../../assets/images/icons/3.png";
import fourthIcon from "../../assets/images/icons/4.png";
import coffee from "../../assets/images/more/2.png";
import Products from '../Products/Products';
const Home = () => {
    return (
        <section>
            {/* Navbar and Banner */}
            <article className='bg-Banner bg-cover bg-no-repeat  lg:h-screen px-10 text-white '>
                <NavigationMenu />
                <div className='md:flex justify-center items-center space-y-8 md:space-y-0 pb-10'>
                    <div className='lg:w-1/2 md:w-1/3'>
                        <img src={coffee} className='w-[80%] object-contain opacity-40 hover:opacity-60 duration-700 pb-10' />
                    </div>
                    <div className='space-y-5 md:w-1/2 text-center md:text-left'>
                        <h1 className='text-sm leading-tight uppercase text-gray-400'>Would you like A Cup of <br /> <span className='text-5xl text-gray-300'>Delicious Coffee?</span></h1>
                        <p className='text-xs text-gray-300 md:w-[80%] text-justify'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className='text-md py-2 px-4 border border-gray-500 hover:border-gray-300 rounded-md border-gray bg-none hover:bg-[#3a1710] duration-500'>Learn More</button>
                    </div>
                </div>
            </article>
            {/* Features Section */}
            <article className='bg-[#ECEAE3] py-10 px-16 md:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div className='p-5'>
                    <img src={firstIcon} alt="" />
                    <h2 className="text-xl text-[#331A15] font-bold my-3">Awesome Aroma</h2>
                    <p className='text-sm text-[#1B1A1A]'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='p-5'>
                    <img src={secondIcon} alt="" />
                    <h2 className="text-xl text-[#331A15] font-bold my-3">Great Quality</h2>
                    <p className='text-sm text-[#1B1A1A]'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='p-5'>
                    <img src={thirdIcon} alt="" />
                    <h2 className="text-xl text-[#331A15] font-bold my-3">Pure Grades</h2>
                    <p className='text-sm text-[#1B1A1A]'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='p-5'>
                    <img src={fourthIcon} alt="" />
                    <h2 className="text-xl text-[#331A15] font-bold my-3">Proper Roasting</h2>
                    <p className='text-sm text-[#1B1A1A]'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </article>
            <article className='bg-ProductsBG1 bg-cover bg-no-repeat'>
                {/* Products Section */}
                <Products />
            </article>
        </section>
    );
};

export default Home;