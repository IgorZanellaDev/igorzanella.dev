<script>
	import Logo from "../components/Logo.svelte";
	import Fa from "svelte-fa";
	import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

	export let segment;
	let isOpen = false;
	let neverOpened = true;
</script>

<style>
	.nav-link {
		@apply text-light transition-all duration-500 ease-in-out py-1 px-2 rounded my-1;
	}

	.nav-link:hover, .nav-link.active {
		@apply bg-light text-dark;
	}
</style>

<nav class="w-full sm:flex sm:items-center z-20 {segment ? "" : "absolute"} transition-all duration-500 {isOpen ? "max-h-64" : "max-h-17"} sm:max-h-none sm:h-auto sm:flex-col">
	<div class="p-2 flex flex-row justify-between items-center sm:justify-center sm:flex-grow sm:w-full sm:pt-5">
		<div class="flex-grow px-2 mr-4 sm:max-w-md sm:h-full text-center">
			<a href="." on:click={() => isOpen = false}><Logo/></a>
		</div>
		<div on:click={() => {isOpen = !isOpen; neverOpened = false}} class="sm:hidden m-2 flex items-center border-2 rounded-lg p-2 border-light cursor-pointer">
			{#if !isOpen}
				<Fa icon={faBars} class="h-4 w-4 text-light fill-current"/>
			{:else}
				<Fa icon={faTimes} class="h-4 w-4 text-light fill-current"/>
			{/if}
		</div>
	</div>
	<div class="flex flex-col px-4 pb-2 {isOpen ? "scale-in-ver-top" : "hidden sm:flex"} {segment ? "" : "bg-dark xs:bg-transparent"} sm:flex-grow sm:flex-row sm:items-center sm:pb-0 sm:justify-center">
		<a on:click={() => isOpen = false} class="nav-link sm:mx-2 sm:text-lg {segment ? "" : "active"}" href=".">home</a>
		<a on:click={() => isOpen = false} class="nav-link sm:mx-2 sm:text-lg {segment === "projects" ? "active" : ""} font-ubuntu" href="projects">projects</a>
		<a on:click={() => isOpen = false} class="nav-link sm:mx-2 sm:text-lg {segment === "articles" ? "active" : ""} font-ubuntu" href="articles">articles</a>
		<a on:click={() => isOpen = false} class="nav-link sm:mx-2 sm:text-lg {segment === "about" ? "active" : ""} font-ubuntu" href="about">about me</a>
	</div>
</nav>
