import React from 'react';

const useStyle = () => {
    const btnCustom = {
        color: 'white',
        backgroundImage: 'linear-gradient(to right, #4CB8C4 0%, #3CD3AD  51%, #4CB8C4  100%)',
        textAlign: 'center',
        textTransform: 'uppercase',
        transition: '0.5s',
        backgroundSize: '200% auto',
        color: 'white',
        display: 'block',
        '&:hover': {
            backgroundPosition: 'right center',
            color: ' #fff',
            textDecoration: 'none',
        }
    }

    return {
        btnCustom
    }
};

export default useStyle;