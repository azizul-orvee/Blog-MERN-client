import React from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

const EditLoading = () => {
    return (
        <div className='flex justify-center'>
            <FadeLoader size={20} />
        </div>
    );
};

export default EditLoading;