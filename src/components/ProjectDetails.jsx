import PetGPT from "./projectComponents/projectMedia/PetGPT.webp";
import Inertia from "./projectComponents/projectMedia/Inertia.webp";
import ChatTaskTic from "./projectComponents/projectMedia/chat-task-tic-thumbnail.webp";
import Streamodoro from "./projectComponents/projectMedia/streamodoro.webp";
import chessBotDemo from "./projectComponents/projectMedia/chess-bot-demo.webp";
import spotifyOverlay from "./projectComponents/projectMedia/spotify_overlay.webp";
import coworkingGuide from "./projectComponents/projectMedia/cowo.webp";

const slides = [
	{
		name: "Coworking Guide",
		description: "A guide for coworking streamers on Twitch",
		image: {
			src: coworkingGuide,
			alt: "Coworking Guide",
		},
		links: {
			Demo: "https://coworking-guide.vercel.app/",
			Github: "https://github.com/liyunze-coding/coworking-website",
		},
		tags: ["Astro", "Tailwind", "Markdown"],
	},
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
		name: "Chat-Task-Tic widget",
		description:
			"A task list widget for coworking and study streamers, allows streamer and chatters to submit tasks from Twitch chat to stream widget.",
		image: {
			src: ChatTaskTic,
			alt: "Chat-Task-Tic widget",
		},
		links: {
			Github: "https://github.com/liyunze-coding/chat-task-tic-overlay",
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
			Github: "https://github.com/liyunze-coding/streamodoro",
		},
		tags: ["Javascript", "HTML", "CSS", "ComfyJS"],
	},
	{
		name: "Spotify widget",
		description:
			"An OBS widget that displays the current track that you're listening to on Spotify",
		image: {
			src: spotifyOverlay,
			alt: "Spotify widget",
		},
		links: {
			Github: "https://github.com/liyunze-coding/spotify-widget-for-obs",
		},
		tags: [
			"Javascript",
			"Node JS",
			"Express",
			"Spotify API",
			"HTML",
			"CSS",
		],
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
			Video: "https://imgur.com/a/UAgRIR1",
		},
		tags: ["Python", "OpenCV", "PyAutoGUI"],
	},
];

export default slides;
