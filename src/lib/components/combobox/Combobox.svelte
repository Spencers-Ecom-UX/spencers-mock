<script lang="ts">
	import type { Writable } from "svelte/store";
	import type { ComboboxStore } from "./ComboboxStore";
	export let rounded = false;
	export let state: Writable<ComboboxStore>;
	const id = $state.comboboxId;
	
	function handleKeyup(event: KeyboardEvent) {
    const { target } = event;
		console.log(target?.value); 
	}
</script>
<div 
	class="combobox"
	class:combobox--rounded={ rounded }
	{...$$restProps}
>
	<input
		id={id}
		role="combobox"
		class="combobox__native-control"
		type="text"
		aria-labelledby=""
		aria-invalid="false"
		aria-autocomplete="list"
		aria-expanded={$state.open}
		value=""
		tabindex={0}
		aria-controls="<popoverid>"
		aria-owns="<popoverid>"
		aria-activedescendant="<listboxOptionId>"
		on:keyup={handleKeyup}
		on:keyup
		on:blur
		on:focus
		on:click
		{...$$restProps}
	/>
</div>
<style>
	.combobox {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		position: relative;
		display: grid;
    width: 100%;
	}
	
	.combobox--rounded .combobox__native-control {
		border-radius: 18px;
		padding: 0 16px;
	}
	
	.combobox__native-control {
		outline: none;
		color: #212121;
		font-size: 16px;
		font-weight: 400;
		line-height: 1;
		letter-spacing: 0.04em;
		width: 100%;
		height: 36px;
		padding: 0 8px;
		border: 1px solid;
		border-color: #949499;
		border-radius: 4px;
		background: none;
		font-size: inherit;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
		will-change: border, box-shadow;
		box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px 0px
	}
	
  .combobox__native-control:hover {
    border-color: #000;
    box-shadow: inset 0 0 0 1px #000;
  }

	.combobox__native-control:focus {
		border-color: #3367d6 #285bc7 #2451b2;
		box-shadow: inset 0 0 0 1px #2451b2;
	}
</style>