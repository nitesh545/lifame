import Image from "next/image";
import Button from "@/app/components/button";
import Input from "@/app/components/input";
import Text from "@/app/components/text";
import React from "react";

let components = [
	{id: 1, type: "Input", component: <Input placeholder="Input"/>},
	{id: 2, type: "Button", component: <Button text="Button"/>},
	{id: 3, type: "Text", component: <Text text="This is my text"/>},
]

export default function Home() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center">
			{
				components.map((component, index) => {
					return (
						<div key={component.id} className="m-10">
							{component.component}
						</div>
					)
				})
			}
		</div>
	);
}
