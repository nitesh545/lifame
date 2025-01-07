import React from 'react';

const Division = ({children}) => {
    return (
        <div className="w-screen">
            <div className="flex justify-center content-center items-center">
                <div className="text-white text-2xl p-5 rounded-3xl bg-gradient-to-r from-purple-500 to-red-500">
                {children}
                </div>
            </div>
        </div>
    );
};

export default Division;