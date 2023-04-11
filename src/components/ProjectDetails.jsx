import PetGPT from "./projectComponents/projectMedia/PetGPT.png";
import Inertia from "./projectComponents/projectMedia/Inertia.png";
import ChatTaskTic from "./projectComponents/projectMedia/chat-task-tic-thumbnail.png";
import Streamodoro from "./projectComponents/projectMedia/streamodoro.png";
import chessBotDemo from "./projectComponents/projectMedia/chess-bot-demo.png";

const slides = [
	{
		name: "PetGPT",
		description: "PetGPT is a UI clone of ChatGPT, inspired by CatGPT.",
		image: {
			src: PetGPT,
			alt: "PetGPT",
		},
		links: {
			Demo: "https://pet-gpt-nine.vercel.app/",
			Github: "https://github.com/liyunze-coding/PetGPT",
		},
		tags: ["SvelteKit", "Tailwind", "Typescript"],
	},
	{
		name: "Inertia",
		description:
			"Inertia is inspired by Momentum, a Chrome extension that replaces the new tab page with a customizable dashboard featuring to-do lists, weather, and more.",
		image: {
			src: Inertia,
			alt: "Inertia",
		},
		links: {
			Demo: "https://liyunze-coding.github.io/inertia",
			Github: "https://github.com/liyunze-coding/inertia",
		},
		tags: ["Svelte", "Typescript"],
	},
	{
		name: "Chat-Task-Tic overlay",
		description:
			"A task list overlay for coworking and study streamers, allows users to submit tasks from Twitch chat.",
		image: {
			src: ChatTaskTic,
			alt: "Chat-Task-Tic overlay",
		},
		links: {
			Github: "https://liyunze-coding.github.io/chat-task-tic-overlay",
		},
		tags: ["Javascript", "HTML", "CSS", "ComfyJS"],
	},
	{
		name: "Streamodoro",
		description:
			"A pomodoro timer for coworking and study streamers, allows streamers to set the time for work time and break time",
		image: {
			src: Streamodoro,
			alt: "Streamodoro",
		},
		links: {
			Github: "https://liyunze-coding.github.io/streamodoro",
		},
		tags: ["Javascript", "HTML", "CSS", "ComfyJS"],
	},
	{
		name: "Chess bot",
		description:
			"A chess bot that takes over your mouse and plays chess for you",
		image: {
			src: chessBotDemo,
			alt: "Chess bot",
		},
		links: {
			Github: "https://github.com/liyunze-coding/chess-playing-bot-v2",
		},
		tags: ["Python", "OpenCV", "PyAutoGUI"],
	},
];

export default slides;
