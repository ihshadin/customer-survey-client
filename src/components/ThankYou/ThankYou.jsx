import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        return () => clearTimeout(interval);
    }, []);
    useEffect(() => {
        if (countdown === 0) {
            navigate('/');
        }
    }, [countdown, navigate])

    return (
        <div className='flex flex-col justify-center items-center min-h-screen relative'>
            <p className=''>Redirecting to home page in {countdown} seconds...</p>
            <img className='w-1.2 mx-auto mt-10' src="https://i.ibb.co/9tL2QnH/2378500-316747-P8-X8-EV-712.jpg" alt="" />
        </div>
    );
};

export default ThankYou;