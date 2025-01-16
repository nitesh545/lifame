"use client";

import React from 'react';

const Text1 = (props) => {
	return (
		<div className="w-full">
			<div className="flex items-center justify-center content-center">
				<div className="p-5 text-2xl rounded-3xl text-white bg-gradient-to-r from-purple-500 to-transparent bg-blue-950">
					{props.text}
				</div>
			</div>
		</div>
	);
};

export default Text1;