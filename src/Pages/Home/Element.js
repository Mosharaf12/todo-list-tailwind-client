import React from 'react';

const Element = () => {
    return (
        <div className='p-20 grid grid-cols-4 gap-10'>
            <h2 className='text-center w-52 h-52 bg-primary'>
                primary color
            </h2>
            <h2 className='text-center w-52 h-52 bg-secondary'>
                secondary color
            </h2>
            <h2 className='text-center w-52 h-52 bg-accent'>
                accent color
            </h2>
            <h2 className='text-center w-52 h-52 bg-info'>
                info color
            </h2>
        </div>
    );
};

export default Element;