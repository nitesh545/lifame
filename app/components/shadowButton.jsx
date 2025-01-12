"use client";

import React from 'react';
import {useState, useEffect} from 'react';

const ShadowButton = () => {
	const [value, setValue] = useState(false);

	const handleClick = () => {
		setValue(!value);
	}

	useEffect(() => {console.log(value?"pressed":"not pressed")}, [value]);

	return (
		<div className="w-screen">
			<div className="flex justify-center content-center items-center">
			<div className="rounded-3xl hover:shadow-lg hover:shadow-purple-600 hover:backdrop-blur-3xl drop-shadow-xl bg-gradient-to-r from-purple-500 to-red-500">
				<button onClick={handleClick} className="p-5 text-2xl text-white">
					Click me!
				</button>
			</div>
			</div>
		</div>
	);
};

export default ShadowButton;