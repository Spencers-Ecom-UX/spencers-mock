<script>
  import Button from "$lib/components/button";
	import { getBoundingClientRectUsingIO } from "$lib/client/util/utilities";
	import { onMount } from 'svelte';
	
  export let state = {};
	const id = $state.disclosureId;
	let ref;
	async function handleClick() {
		$state.open = !$state.open;
    const rect = await getBoundingClientRectUsingIO(ref.$$.ctx[0]);
		$state.disclosureRect = rect.toJSON();
	}
	
	onMount(async () => {
		const rect = await getBoundingClientRectUsingIO(ref.$$.ctx[0]);
		$state.disclosure = ref.$$.ctx[0];
		$state.disclosureRect = rect.toJSON();
	});
</script>
<Button
	bind:this={ref}
  id={id}
	type="button"
	variant="icon"
	style="padding:0 4px"
	aria-expanded={$state.open}
	aria-controls={$state.dialogId}
	aria-haspopup="dialog"
	on:click={handleClick}
	on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:blur
  on:focus
>
  <slot />
</Button>