"use client";
import React, {useState} from 'react';

const Input = (props) => {
	let [value, setValue] = useState("");
	let handleChange = (e) => {
		setValue(e.target.value);
	}
	return (
		<div className="w-full">
			<div className="h-full flex justify-center content-center items-center">
				<input
					onChange={handleChange}
					value={value}
					className="input h-10 text-center rounded-3xl p-8 text-white placeholder:text-blue-950 text-2xl bg-gradient-to-r from-purple-600 to-pink-600"
					placeholder={props.placeholder}
				/>
			</div>
		</div>
	);
};

export default Input;