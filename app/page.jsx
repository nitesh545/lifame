import Image from "next/image";
import Button from "@/app/components/button";
import Input from "@/app/components/input";
import Text from "@/app/components/text";
import Select from "@/app/components/select";
import Checkbox from "@/app/components/checkbox";
import Slider from "@/app/components/slider";
import React from "react";

let components = [
	{id: 1, type: "Input", component: <Input placeholder="Input"/>},
	{id: 2, type: "Button", component: <Button text="Button"/>},
	{id: 3, type: "Text", component: <Text text="This is my text"/>},
	{id: 4, type: "Select", component: <Select />},
	{id: 5, type: "Checkbox", component: <Checkbox />},
	{id: 6, type: "Slider", component: <Slider />}
]

export default function Home() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center">
			{
				components.map((component, index) => {
					return (
						<div key={component.id} className="m-2">
							{component.component}
						</div>
					)
				})
			}
		</div>
	);
}
