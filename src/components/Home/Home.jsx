import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className='flex flex-col justify-center items-center min-h-screen'>
            <h2 className='text-center text-4xl'>Welcome to Our Shop</h2>
            <Link to='/survey' className='py-3 px-10 bg-teal-500 text-white text-xl cursor-pointer font-bold mt-5'>Leave Feedback</Link>
        </section>
    );
};

export default Home;