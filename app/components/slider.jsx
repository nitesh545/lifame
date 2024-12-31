"use client";

import React from 'react';
import {useState} from 'react';

const Slider = () => {
	const [value, setValue] = useState(50);

	let handleChange = (e) => {
		setValue(e.target.value);
	}

	return (
		<div className="w-screen">
			<div className="flex justify-center content-center items-center">
				<input
					type="range"
					min={0}
					max={100}
					value={value}
					onChange={handleChange}
					// className="appearance-none bg-transparent cursor-pointer
					// [&::-webkit-slider-runnable-track]:bg-purple-500
					// [&::-webkit-slider-runnable-track]:rounded-3xl
					// [&::-webkit-slider-thumb]:bg-red-500
					// [&::-webkit-slider-thumb]:rounded-full"
					className="w-1/5 appearance-none h-2 bg-gradient-to-r from-purple-500 to-red-500 rounded-3xl cursor-pointer accent-green-400"
				/>
			</div>
		</div>
	);
};

export default Slider;