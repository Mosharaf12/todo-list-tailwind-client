import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Assets/gif_404.gif'

const ErrorPage = () => {
    return (
        <section className="flex items-center h-full p-44 bg-gray-100 text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
                <img src={img} alt="" />
               
                <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                <p className="mt-4 mb-8 text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                <Link to='/' className="px-8 py-3 font-semibold rounded bg-secondary uppercase text-gray-50">Back to homepage</Link>
            </div>
        </div>
    </section>
    );
};

export default ErrorPage;