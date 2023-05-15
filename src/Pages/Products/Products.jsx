import { EyeIcon, PencilIcon, TrashIcon, } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const Products = () => {
    const [allCoffee, setAllCoffee] = useState([]);
    useEffect(() => {
        fetch('https://coffee-server-nu.vercel.app/coffee-collection')
            .then(res => res.json())
            .then(data => {
                setAllCoffee(data);
            })
    })
    function deleteCoffee(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-server-nu.vercel.app/delete-coffee/${id}`, { method: "DELETE" })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount === 1) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remainingCoffee = allCoffee.filter((coffee) => coffee._id !== id);
                            setAllCoffee(remainingCoffee);
                        }
                    })
            }
        })

    }

    return (
        <section className='my-32 w-[90%] md:w-[80%] mx-auto '>
            <p className='text-center text-sm'>--- Sip & Savor ---</p>
            <h2 className="text-4xl text-[#331A15] text-center font-semibold my-4">Our Popular Products</h2>
            <div className='flex justify-center'>
                <Link to={'/add-coffee'} className='text-md py-2 px-4 border border-gray-500 hover:border-gray-300 rounded-md border-gray bg-none bg-[#a57c47] hover:bg-[#522e27] text-white duration-500'>Add Coffee
                </Link>
            </div>
            <article className='grid grid-cols-1 lg:grid-cols-2 my-10 gap-8 lg:gap-5'>
                {
                    allCoffee?.map((coffee) => {
                        return (
                            <div key={coffee._id} className='flex items-center justify-center bg-[#F5F4F1] bg-opacity-50 rounded-lg gap-3 p-5'>
                                <img src={coffee.photo} alt="" className='h-[80%]' />
                                <div className='flex gap-5 md:gap-16'>
                                    <div className='text-gray-500 flex flex-col justify-center gap-2'>
                                        <h3 className="text-md"><span className='text-black'>Name</span> : {coffee.name}</h3>
                                        <h3 className="text-md"><span className='text-black'>Chef</span> : {coffee.chef}</h3>
                                        <h3 className="text-md"><span className='text-black'>Price</span> : {coffee.price} TK</h3>
                                    </div>
                                    <div className='space-y-3 text-white'>
                                        <Link to={'/preview'} className='p-1 block bg-[#D2B48C] rounded-md cursor-pointer'><EyeIcon className='h-5 w-5' /></Link>
                                        <Link to={`/edit-coffee-info/${coffee._id}`} className='p-1 block cursor-pointer bg-[#3C393B] rounded-md'><PencilIcon className='h-5 w-5' /></Link>
                                        <p onClick={() => deleteCoffee(coffee._id)} className='p-1  bg-[#EA4744] cursor-pointer rounded-md'><TrashIcon className='h-5 w-5' /></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </article>
        </section>
    );
};

export default Products;