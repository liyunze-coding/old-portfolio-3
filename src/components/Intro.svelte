<script lang="ts">
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
	let roleState: string = "student";
	let role: string;
	let counter: number = 0;
	let roleEmpty: boolean = false;

	function typeOutRole() {
		// type out next role
		let type = setInterval(() => {
			if (role[roleState.length]) {
				roleState += role[roleState.length];
			}

			if (roleState.length == role.length) {
				clearInterval(type);
				roleEmpty = false;
			}
		}, 70);
	}

	function backspaceRole() {
		// backspace on current role
		if (!roleEmpty) {
			let backspace = setInterval(() => {
				roleState = roleState.slice(0, -1);

				if (roleState.length === 0) {
					clearInterval(backspace);
					roleEmpty = true;
				}
			}, 70);
		}
	}

	// sleep function
	function sleep(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	// change role every 3 seconds
	setInterval(async () => {
		role = roles[counter];

		typeOutRole();

		await sleep(4000);
		backspaceRole();

		counter++;

		if (counter == roles.length) {
			counter = 0;
		}
	}, 5000);
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
