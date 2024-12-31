"use client";
import React from 'react';
import {useState} from 'react';

const Checkbox = () => {
	let [status, setStatus] = useState(false);

	let updateStatus = () => {
		if (status) {
			setStatus(false);
		}
		else {
			setStatus(true);
		}
	};

	return (
		<div className="w-screen">
			<div className="flex justify-center content-center items-center">
				<input type="checkbox" className="h-24 size-12 rounded-2xl mr-4" onClick={updateStatus}/>
				<div className="h-full text-white text-2xl p-5 rounded-2xl justify-center content-center bg-gradient-to-r from-purple-500 to-red-500">
					This task is {status ? "complete" : "pending"}
				</div>
			</div>
		</div>
	);
};

export default Checkbox;