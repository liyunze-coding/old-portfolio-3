<script lang="ts">
	import { onMount } from "svelte";

	// Greeting
	let date = new Date();
	let hour = date.getHours();

	let greeting: string = "morning";

	if (hour >= 12 && hour < 18) {
		greeting = "afternoon";
	} else if (hour >= 18) {
		greeting = "evening";
	}

	// Roles
	let roles = ["student", "developer", "streamer", "YouTuber"];
	let roleState: string = "";
	let role: string;
	let counter: number = 0;
	let roleEmpty: boolean = true;
	const roleInterval: number = 50;
	const roleUpdateDelay: number = 2000; // delay after updating
	const roleRemoveDelay: number = 1000; // delay after removing
	
	function removeLastCharacter(str: string) {
		return str.slice(0, -1);
	}

	function addCharacter(str1: string, str2:string) {
		// str1: incomplete string, add a character after this
		// str2: complete string, add a character from this

		let str1Length = str1.length;
		let str2Length = str2.length;

		if (str1Length < str2Length) {
			return str1 + str2[str1Length];
		} else {
			return str1;
		}
	}

	function sleep(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async function animateRoles() {
		role = roles[counter];

		if (roleEmpty) {
			for (let i = 0; i < role.length; i++) {
				roleState = addCharacter(roleState, role);
				await sleep(roleInterval);
			}
			await sleep(roleUpdateDelay);
			roleEmpty = false;

			animateRoles();
		} else {
			for (let i = 0; i < role.length; i++) {
				roleState = removeLastCharacter(roleState);
				await sleep(roleInterval);
			}
			await sleep(roleRemoveDelay);
			if (counter < roles.length - 1) {
				counter++;
			} else {
				counter = 0;
			}
			roleEmpty = true;
			animateRoles();
		}
	}

	// after window finish loading, call animateRoles()
	onMount(() => {
		animateRoles();
	});
</script>

<div
	id="home"
	class="h-screen w-full flex flex-col justify-center items-center"
>
	<div class="w-3/4 h-fit flex flex-col items-center">
		<div class="text-lg text-center">Good {greeting}, I'm</div>
		<div
			id="name"
			class="animate-gradient text-5xl text-center py-10 font-bold w-fit"
		>
			RyanPython
		</div>
		<div class="text-2xl lg:text-4xl text-center translate-x-3 -z-10">
			I am a <span id="occupation">{roleState}</span><span
				class="animate-blink">|</span
			>
		</div>
	</div>
</div>

<style>
	#name {
		background: linear-gradient(
			90deg,
			#9845e8 0%,
			#33d2ff 55%,
			#ff7dac 100%
		);

		background-size: 300%;

		background-clip: text;
		-webkit-background-clip: text;

		-webkit-text-fill-color: transparent;
	}
</style>
