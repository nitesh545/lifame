"use client";

import React from 'react';
import {useState, useEffect} from 'react';

const Checkbox1 = () => {
	const [checked, setChecked] = useState(false);

	const handleClick = () => {
		setChecked(!checked);
	}

	return (
		<div className="w-full">
			<div className="flex justify-center content-center items-center">
				<input type="checkbox" onClick={handleClick} className="mr-4 size-12 h-24 rounded-3xl accent-purple-900" checked={checked}/>
				<div className="p-5 text-white text-2xl rounded-3xl bg-gradient-to-r from-purple-500 bg-blue-950">
					{checked ? "Task completed" : "Task Pending"}
				</div>
			</div>
		</div>
	);
};

export default Checkbox1;