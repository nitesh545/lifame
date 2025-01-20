"use client";

import React from 'react';

import {useState, useEffect} from 'react';

const Slider1 = () => {
	const [value, setValue] = useState(50);

	const handleChange = (e) => {
		setValue(e.target.value);
	}

	return (
		<div className="w-full">
			<div className="flex justify-center items-center content-center">
				<input
					type="range"
					min={0}
					max={100}
					value={value}
					onChange={handleChange}
					className="w-72 appearance-none rounded-3xl cursor-pointer bg-blue-950 accent-pink-500 bg-gradient-to-r from-purple-500"
				/>
			</div>
		</div>
	);
};

export default Slider1;