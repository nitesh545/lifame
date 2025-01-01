"use client";

import React from 'react';

const buttons = [
	"First", "Second", "Third", "Fourth"
];

const ButtonGroup = () => {
	return (
		<div className="w-screen">
			<div className="flex justify-center content-center items-center">
				<div className="flex bg-gradient-to-r from-purple-500 to-red-500 rounded-3xl">
					{
						buttons.map((button, index) => {return (
							<button
								key={index}
								className="text-white m-1 text-2xl p-5 rounded-3xl border-2 border-green-400"
								onClick={() => {
									console.log(`${button} button clicked`);
								}}
							>
								{button}
							</button>
						)
						})
					}
				</div>
			</div>
		</div>
	);
};

export default ButtonGroup;