"use client";

import React from 'react';
import {useState, useEffect} from 'react';

const RoundButton = () => {
	const [value, setValue] = useState(0);

	const handleClick = () => {
		setValue(prev => prev + 1);
	}

	useEffect(() => {console.log(`Hover button pressed: ${value} times`)}, [value]);

	return (
		<div className="w-screen">
			<div className="flex justify-center content-center items-center">
				<button
					className="p-5 text-2xl text-white bg-gradient-to-r from-purple-500 to-red-500 rounded-bl-2xl
								rounded-tr-2xl hover:rounded-br-full hover:rounded-tl-full transition duration-300
								ease-in-out hover:scale-105 hover:bg-blue-600"
					onClick={handleClick}
				>
					Hover me!
				</button>
			</div>
		</div>
	);
};

export default RoundButton;