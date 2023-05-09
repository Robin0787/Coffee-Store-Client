import { EyeIcon, PencilIcon, TrashIcon, } from '@heroicons/react/24/solid';
import React from 'react';
import first from "../../assets/images/1.png";
import second from "../../assets/images/2.png";
import third from "../../assets/images/3.png";
import fourth from "../../assets/images/4.png";
import fifth from "../../assets/images/5.png";
import sixth from "../../assets/images/6.png";
const Products = () => {
    return (
        <section className='my-32 w-[90%] md:w-[80%] mx-auto '>
            <p className='text-center text-sm'>--- Sip & Savor ---</p>
            <h2 className="text-4xl text-[#331A15] text-center font-semibold my-4">Our Popular Products</h2>
            <div className='flex justify-center'>
                <button className='text-md py-2 px-4 border border-gray-500 hover:border-gray-300 rounded-md border-gray bg-none bg-[#a57c47] hover:bg-[#522e27] text-white duration-500'>Add Coffee
                </button>
            </div>
            <article className='grid grid-cols-1 lg:grid-cols-2 my-10 gap-8 lg:gap-5'>
                <div className='flex items-center justify-center bg-[#F5F4F1] bg-opacity-50 rounded-lg gap-3 px-3.5'>
                    <img src={first} alt="" className='h-[80%]'/>
                    <div className='flex gap-5 md:gap-16'>
                    <div className='text-gray-500 flex flex-col justify-center gap-2'>
                        <h3 className="text-md"><span className='text-black'>Name</span> : Macchiato</h3>
                        <h3 className="text-md"><span className='text-black'>Chef</span> : Mr. Matin Paul</h3>
                        <h3 className="text-md"><span className='text-black'>Price</span> : 450 TK</h3>
                    </div>
                    <div className='space-y-3 text-white'>
                        <p className='p-1  bg-[#D2B48C] rounded-md cursor-pointer'><EyeIcon className='h-5 w-5'/></p>
                        <p className='p-1 cursor-pointer bg-[#3C393B] rounded-md'><PencilIcon className='h-5 w-5'/></p>
                        <p className='p-1  bg-[#EA4744] cursor-pointer rounded-md'><TrashIcon className='h-5 w-5'/></p>
                    </div>
                    </div>
                </div>
                <div className='flex items-center justify-center bg-[#F5F4F1] bg-opacity-50 rounded-lg gap-3 px-3.5'>
                    <img src={second} alt="" className='h-[80%]'/>
                    <div className='flex gap-5 md:gap-16'>
                    <div className='text-gray-500 flex flex-col justify-center gap-2'>
                        <h3 className="text-md"><span className='text-black'>Name</span> : Cappuccino Coffee</h3>
                        <h3 className="text-md"><span className='text-black'>Chef</span> : Mr. Matin Paul</h3>
                        <h3 className="text-md"><span className='text-black'>Price</span> : 450 TK</h3>
                    </div>
                    <div className='space-y-3 text-white'>
                        <p className='p-1  bg-[#D2B48C] rounded-md cursor-pointer'><EyeIcon className='h-5 w-5'/></p>
                        <p className='p-1 cursor-pointer bg-[#3C393B] rounded-md'><PencilIcon className='h-5 w-5'/></p>
                        <p className='p-1  bg-[#EA4744] cursor-pointer rounded-md'><TrashIcon className='h-5 w-5'/></p>
                    </div>
                    </div>
                </div>
                <div className='flex items-center justify-center bg-[#F5F4F1] bg-opacity-50 rounded-lg gap-3 px-3.5'>
                    <img src={third} alt="" className='h-[80%]'/>
                    <div className='flex gap-5 md:gap-16'>
                    <div className='text-gray-500 flex flex-col justify-center gap-2'>
                        <h3 className="text-md"><span className='text-black'>Name</span> : Espresso Coffee</h3>
                        <h3 className="text-md"><span className='text-black'>Chef</span> : Mr. Matin Paul</h3>
                        <h3 className="text-md"><span className='text-black'>Price</span> : 450 TK</h3>
                    </div>
                    <div className='space-y-3 text-white'>
                        <p className='p-1  bg-[#D2B48C] rounded-md cursor-pointer'><EyeIcon className='h-5 w-5'/></p>
                        <p className='p-1 cursor-pointer bg-[#3C393B] rounded-md'><PencilIcon className='h-5 w-5'/></p>
                        <p className='p-1  bg-[#EA4744] cursor-pointer rounded-md'><TrashIcon className='h-5 w-5'/></p>
                    </div>
                    </div>
                </div>
                <div className='flex items-center justify-center bg-[#F5F4F1] bg-opacity-50 rounded-lg gap-3 px-3.5'>
                    <img src={fourth} alt="" className='h-[80%]'/>
                    <div className='flex gap-5 md:gap-16'>
                    <div className='text-gray-500 flex flex-col justify-center gap-2'>
                        <h3 className="text-md"><span className='text-black'>Name</span> : Americano Coffee</h3>
                        <h3 className="text-md"><span className='text-black'>Chef</span> : Mr. Matin Paul</h3>
                        <h3 className="text-md"><span className='text-black'>Price</span> : 450 TK</h3>
                    </div>
                    <div className='space-y-3 text-white'>
                        <p className='p-1  bg-[#D2B48C] rounded-md cursor-pointer'><EyeIcon className='h-5 w-5'/></p>
                        <p className='p-1 cursor-pointer bg-[#3C393B] rounded-md'><PencilIcon className='h-5 w-5'/></p>
                        <p className='p-1  bg-[#EA4744] cursor-pointer rounded-md'><TrashIcon className='h-5 w-5'/></p>
                    </div>
                    </div>
                </div>
                <div className='flex items-center justify-center bg-[#F5F4F1] bg-opacity-50 rounded-lg gap-3 px-3.5'>
                    <img src={fifth} alt="" className='h-[80%]'/>
                    <div className='flex gap-5 md:gap-16'>
                    <div className='text-gray-500 flex flex-col justify-center gap-2'>
                        <h3 className="text-md"><span className='text-black'>Name</span> :  Black Coffee</h3>
                        <h3 className="text-md"><span className='text-black'>Chef</span> : Mr. Matin Paul</h3>
                        <h3 className="text-md"><span className='text-black'>Price</span> : 450 TK</h3>
                    </div>
                    <div className='space-y-3 text-white'>
                        <p className='p-1  bg-[#D2B48C] rounded-md cursor-pointer'><EyeIcon className='h-5 w-5'/></p>
                        <p className='p-1 cursor-pointer bg-[#3C393B] rounded-md'><PencilIcon className='h-5 w-5'/></p>
                        <p className='p-1  bg-[#EA4744] cursor-pointer rounded-md'><TrashIcon className='h-5 w-5'/></p>
                    </div>
                    </div>
                </div>
                <div className='flex items-center justify-center bg-[#F5F4F1] bg-opacity-50 rounded-lg gap-3 px-3.5'>
                    <img src={sixth} alt="" className='h-[80%]'/>
                    <div className='flex gap-5 md:gap-16'>
                    <div className='text-gray-500 flex flex-col justify-center gap-2'>
                        <h3 className="text-md"><span className='text-black'>Name</span> :  Decaf Coffee</h3>
                        <h3 className="text-md"><span className='text-black'>Chef</span> : Mr. Matin Paul</h3>
                        <h3 className="text-md"><span className='text-black'>Price</span> : 450 TK</h3>
                    </div>
                    <div className='space-y-3 text-white'>
                        <p className='p-1  bg-[#D2B48C] rounded-md cursor-pointer'><EyeIcon className='h-5 w-5'/></p>
                        <p className='p-1 cursor-pointer bg-[#3C393B] rounded-md'><PencilIcon className='h-5 w-5'/></p>
                        <p className='p-1  bg-[#EA4744] cursor-pointer rounded-md'><TrashIcon className='h-5 w-5'/></p>
                    </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Products;