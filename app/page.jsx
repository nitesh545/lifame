import Image from "next/image";
import Button from "@/app/components/button";
import Input from "@/app/components/input";
import Text from "@/app/components/text";
import Select from "@/app/components/select";
import Checkbox from "@/app/components/checkbox";
import Slider from "@/app/components/slider";
import ButtonGroup from "@/app/components/buttonGroup";
import Stopwatch from "@/app/components/stopwatch";
import ProgressBar from "@/app/components/progressBar";
import Division from "@/app/components/division";
import GlowButton from "@/app/components/glowButton";
import React from "react";
import GlowProgressBar from "@/app/components/glowProgressBar";
import Randomizer from "@/app/components/randomizer";
import ShadowButton from "@/app/components/shadowButton";

let components = [
	{id: 1, type: "Input", component: <Input placeholder="Input"/>},
	{id: 2, type: "Button", component: <Button text="Button"/>},
	{id: 3, type: "Text", component: <Text text="Simple Text"/>},
	{id: 4, type: "Select", component: <Select />},
	{id: 5, type: "Checkbox", component: <Checkbox />},
	{id: 6, type: "Slider", component: <Slider />},
	{id: 7, type: "ButtonGroup", component: <ButtonGroup />},
	{id: 8, type: "Stopwatch", component: <Stopwatch />},
	{id: 9, type: "ProgressBar", component: <ProgressBar />},
	{id: 10, type: "Division", component: <Division>Division with children property</Division>},
	{id: 11, type: "GlowButton", component: <GlowButton />},
	{id: 12, type: "GlowProgressBar", component: <GlowProgressBar />},
	{id: 13, type: "Randomizer", component: <Randomizer />},
	{id: 14, type: "ShadowButton", component: <ShadowButton />},
];

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
