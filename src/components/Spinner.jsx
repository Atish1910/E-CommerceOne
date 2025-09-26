import React from 'react';

const Spinner = () => {
    return (
        <>
        <section className='h-100'>
            wait we are fetchig data from api
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>  
        </section>
        </>
    );
};

export default Spinner;