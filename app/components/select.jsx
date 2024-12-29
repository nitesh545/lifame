"use client";

import React from 'react';
import {useState} from 'react';

const Select = () => {
	let [selected, setSelected] = useState(null);
	let handleSelect = (e) => {
		setSelected(e.target.value);
	}
	return (
		<div className="w-screen">
			<div className="h-full flex justify-center content-center">
				<select
					name="chose"
					value={selected}
					className="text-white text-2xl rounded-3xl p-5 bg-gradient-to-r from-purple-500 to-pink-500"
					onChange={handleSelect}
				>
					<option className="text-black" value="1">One</option>
					<option className="text-black" value="2">Two</option>
					<option className="text-black" value="3">Three</option>
					<option className="text-black" value="4">Four</option>
				</select>
			</div>
		</div>
	);
};

export default Select;