<script>
	// Customized Typewriter component - https://www.npmjs.com/package/svelte-typewriter
	import { onMount, createEventDispatcher, onDestroy } from "svelte";
	export let interval = 30;
	export let cascade = false;
	export let loop = false;
	export let cursor = true;
	export let active = true;
	export let delay = 0;
	
	let hidden = true;

	let node;
	let elements = [];

	const dispatch = createEventDispatcher();

	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
	const rng = (min, max) => Math.floor(Math.random() * (max - min) + min);
	const hasSingleTextNode = el => el.childNodes.length === 1 && el.childNodes[0].nodeType === 3;
	const typingInterval = async () => sleep(interval[rng(0, interval.length)] || interval);

	const getElements = parentElement => {
		const treeWalker = document.createTreeWalker(parentElement, NodeFilter.SHOW_ELEMENT);
		let currentNode = treeWalker.nextNode();
		while (currentNode) {
			const text = currentNode.textContent.split('');
			hasSingleTextNode(currentNode) && elements.push({ currentNode, text });
			currentNode = treeWalker.nextNode();
		}
		if (hasSingleTextNode(node)) {
			const text = node.textContent.split('');
			node.textContent = '';
			const childNode = document.createElement('p');
			node.appendChild(childNode);
			elements.push({ currentNode: childNode, text });
		}
	}

	const typewriterEffect = async ({ currentNode, text }) => {
		currentNode.textContent = '';
		hidden = false;
		currentNode.classList.add('typing');
		for (const letter of text) {
			currentNode.textContent += letter;
			const fullyWritten = loop && currentNode.textContent === text.join('');
			if (fullyWritten) {
				dispatch('done');
				await sleep(typeof loop === 'number' ? loop : 1500);
				while (currentNode.textContent !== '') {
					currentNode.textContent = currentNode.textContent.slice(0, -1);
					await typingInterval();
				}
				return;
			}
			await typingInterval();
		}
		currentNode.classList.length == 1
			? currentNode.removeAttribute('class')
			: currentNode.classList.remove('typing');
	}

	const loopMode = async () => {
		const loopParagraphTag = node.firstChild.tagName.toLowerCase();
		const loopParagraph = document.createElement(loopParagraphTag);
		node.childNodes.forEach(el => el.remove());
		node.appendChild(loopParagraph);
		while (loop) {
			for (const { currentNode, text } of elements) {
				node.childNodes.forEach(el => el.remove());
				const loopParagraphTag = currentNode.tagName.toLowerCase();
				const loopParagraph = document.createElement(loopParagraphTag);
				loopParagraph.textContent = text.join('');
				node.appendChild(loopParagraph);
				await typewriterEffect({ currentNode: loopParagraph, text });
				node.childNodes.forEach(el => el.remove());
			}
		}
	}

	const nonLoopMode = async () => {
		cascade && elements.forEach(({ currentNode }) => (currentNode.textContent = ''));
		for (const element of elements) {
			cascade ? await typewriterEffect(element) : typewriterEffect(element);
		}

		if (cascade) {
			dispatch('done');
		} else {
			const { currentNode: lastElementToFinish } = elements.reduce(
				(longestTextElement, element) => {
					const longestTextLength = longestTextElement.text.length;
					return element.text.length > longestTextLength
						? (longestTextElement = element)
						: longestTextElement;
				}
			)

			const observer = new MutationObserver(mutations => {
				mutations.forEach(mutation => {
					const lastElementFinishedTyping = !mutation.target.classList.contains('typing');
					if (mutation.type === 'attributes' && lastElementFinishedTyping) {
						dispatch('done');
					}
				})
			})

			observer.observe(lastElementToFinish, {
				attributes: true,
				childList: true,
				subtree: true
			})
		}
	}

	onMount(() => {
		setTimeout(() =>{
			if(active){
				getElements(node);
				loop ? loopMode() : nonLoopMode();
			} else hidden = false;
		}, delay);
	})

	onDestroy(() => (loop = false));
</script>

<style>
	@keyframes cursorFade {
		0% {
			opacity: 1;
		}

		50% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	.cursor :global(.typing::after) {
		content: '|';
		display: inline-block;
		color: var(--cursor-color);
		animation: cursorFade 1s infinite;
	}
</style>

<div
	class:cursor
	class="{hidden ? "invisible" : "visible"}"
	style="--cursor-color: {typeof cursor === 'string' ? cursor : 'black'}"
	bind:this={node}
>
	<slot/>
</div>
