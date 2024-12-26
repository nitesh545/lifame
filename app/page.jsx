import Image from "next/image";
import Button from "@/app/components/button";
import Input from "@/app/components/input";
import React from "react";

export default function Home() {
	return (
		<div className="container flex flex-col items-center justify-center">
			<div className="m-10">
				<Input placeholder="Input"/>
			</div>
			<div className="m-10">
				<Button text="Button"/>
			</div>
		</div>
	);
}
