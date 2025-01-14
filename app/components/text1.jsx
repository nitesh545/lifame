"use client";

import React from 'react';
import {useState, useEffect} from 'react';

const Text1 = () => {
	const [text, setText] = useState("");
	const updateText = (e) => {
		setText(e.target.value);
	}
	return (
		<div className="w-screen">
			<div className="flex justify-center content-center items-center">
				<input
					onChange={(e) => updateText(e)}
					className="text-white text-2xl p-5 rounded-3xl bg-gradient-to-r from-purple-500 to-transparent bg-blue-950"
				/>
			</div>
		</div>
	);
};

export default Text1;