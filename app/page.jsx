import Image from "next/image";
import React from "react";
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
import GlowProgressBar from "@/app/components/glowProgressBar";
import Randomizer from "@/app/components/randomizer";
import ShadowButton from "@/app/components/shadowButton";
import RoundButton from "@/app/components/roundButton";
import Input1 from "@/app/components/input1";
import Button1 from "@/app/components/button1";
import Text1 from "@/app/components/text1";
import Select1 from "@/app/components/select1";
import Checkbox1 from "@/app/components/checkbox1";

let components1 = [
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
	{id: 15, type: "RoundButton", component: <RoundButton />},
];

let components2 = [
	{id: 1, type: "Input", component: <Input1 />},
	{id: 2, type: "Button", component: <Button1 text="Button1"/>},
	{id: 3, type: "Text", component: <Text1 text="Simple Text"/>},
	{id: 4, type: "Select", component: <Select1 />},
	{id: 5, type: "Checkbox", component: <Checkbox1 />},
];

export default function Home() {
	return (
		<div className="flex w-screen h-screen justify-around">
			<div className="flex flex-col items-start justify-center content-center">
				{
					components1.map((component, index) => {
						return (
							<div key={component.id} className="m-2">
								{component.component}
							</div>
						)
					})
				}
			</div>
			<div className="flex flex-col items-start justify-center content-center">
				{
					components2.map((component, index) => {
						return (
							<div key={component.id} className="m-2">
								{component.component}
							</div>
						)
					})
				}
			</div>
		</div>
	);
}
