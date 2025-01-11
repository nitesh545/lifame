"use client";

import React from 'react';
import {useState, useEffect} from "react";
import Division from "@/app/components/division";

const Randomizer = () => {
	const [value, setValue] = useState(0);

	const randmValue = () => {
		setValue(Math.floor(((Math.random() * 10)/2)));
	};

	return (
		<Division>
			<div className="flex justify-center content-center">
			<div className="mr-4 min-h-10 text-3xl">
				{value}
			</div>
			<button
				className="ml-4 min-w-36 min-h-10 rounded-xl border-2 border-blue-950"
				onClick={() => setValue(randmValue)}
			>
				Randomize
			</button>
			</div>
		</Division>
	);
};

export default Randomizer;