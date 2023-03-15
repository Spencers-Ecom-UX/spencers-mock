<script lang="ts">
	import type { Writable } from "svelte/store";
	import type { DrawerStore } from "./DrawerStore";
	import Button from "$lib/components/button";
	export let state: Writable<DrawerStore>;

	const id = $state.disclosureId;
	const drawerId = $state.drawerId;
	
	function handleClick() {
		$state.open = !$state.open;
	}
	
	$: open = $state.open;
</script>
<Button 
  id={id} 
	aria-expanded={open} 
	aria-controls={drawerId} 
	aria-haspopup="dialog"
	variant="icon"
	on:click={handleClick}
	on:blur
	on:focus
	on:click
	{...$$restProps}
>
	<slot />
</Button>