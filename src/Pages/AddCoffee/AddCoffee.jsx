import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import NavigationMenu from '../../Shared/Navigation/NavigationMenu';

const AddCoffee = () => {
    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const coffeeInfo = { name, price, supplier, category, chef, taste, details, photo };
        fetch('https://coffee-server-nu.vercel.app/add-coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffeeInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Coffee Added',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    form.reset();
                }
            })
    }
    return (
        <div>
            <div className='bg-MenuBg bg-cover bg-no-repeat px-10'>
                <NavigationMenu />
            </div>
            <article className='bg-addCoffeeBg bg-cover bg-no-repeat'>
                <article className='w-[80%] mx-auto my-10'>
                    <Link to={'/'} className='text-md font-semibold flex items-center gap-1 mb-7'><ArrowLeftIcon className='w-5 h-5' /> Back To Home</Link>
                    <div className='p-10 bg-[#F4F3F0] rounded-lg'>
                        <h2 className='text-3xl font-semibold text-center my-6 text-[#331A15]'>Add New Coffee</h2>
                        <p className='text-sm text-justify md:text-center md:w-[70%] mx-auto text-gray-500 mb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                        <form onSubmit={handleSubmit}>
                            <div className='md:flex gap-10 my-5'>
                                <div className='md:w-1/2 space-y-5'>
                                    <div className='space-y-3'>
                                        <label htmlFor="Name" className='text-md font-semibold text-gray-600'>Name</label><br />
                                        <input type="text" name='name' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Coffee Name' /><br />
                                    </div>
                                    <div className='space-y-3'>
                                        <label htmlFor="Supplier" className='text-md font-semibold text-gray-600'>Supplier</label><br />
                                        <input type="text" name='supplier' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Coffee Supplier' /><br />
                                    </div>
                                    <div className='space-y-3'>
                                        <label htmlFor="Category" className='text-md font-semibold text-gray-600'>Category</label><br />
                                        <input type="text" name='category' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Coffee Category' /><br />
                                    </div>
                                    <div className='space-y-3'>
                                        <label htmlFor="Photo" className='text-md font-semibold text-gray-600'>Photo</label><br />
                                        <input type="text" name='photo' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Photo URL' /><br />
                                    </div>
                                </div>
                                <div className='md:w-1/2 space-y-5'>
                                    <div className='space-y-3'>
                                        <label htmlFor="Price" className='text-md font-semibold text-gray-600'>Price</label><br />
                                        <input type="text" name='price' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Price' /><br />
                                    </div>
                                    <div className='space-y-3'>
                                        <label htmlFor="Taste" className='text-md font-semibold text-gray-600'>Taste</label><br />
                                        <input type="text" name='taste' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Coffee Taste' /><br />
                                    </div>
                                    <div className='space-y-3'>
                                        <label htmlFor="Details" className='text-md font-semibold text-gray-600'>Details</label><br />
                                        <input type="text" name='details' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Coffee Details' /><br />
                                    </div>
                                    <div className='space-y-3'>
                                        <label htmlFor="Chef" className='text-md font-semibold text-gray-600'>Chef</label><br />
                                        <input type="text" name='chef' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Chef Name' /><br />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-center'>
                                    <button type='submit' className='text-md py-3 border border-gray-100 hover:border-gray-300 rounded-md bg-none bg-[#a57c47] hover:bg-[#522e27] text-white duration-500 w-full'>Add Coffee
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </article>
            </article>
        </div>
    );
};

export default AddCoffee;