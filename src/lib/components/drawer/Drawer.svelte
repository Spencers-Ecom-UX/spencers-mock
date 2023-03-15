<script lang="ts">
	import type { Writable } from "svelte/store";
	import type { DrawerStore } from "./DrawerStore";
	import DrawerDismiss from "./DrawerDismiss.svelte";
	import Icon from "$lib/components/icon";
	import Backdrop from "$lib/components/backdrop";
  export let state: Writable<DrawerStore>;
	const id = $state.drawerId;
	$: open = $state.open;
	
	function close() {
		$state.open = false;
	}
</script>
<div
	id={id}	 
  role="dialog"
	aria-modal="true"
	class="drawer"
	class:drawer--open={ open }
	tabindex="-1"	 
>
	<header class="drawer__header">
		<Icon variant="logo" viewbox="0 0 72 32">
			<path d="M64.4 15.9c-.5-.7-2.2-2.7-.4-5 .6-.7 1.3-1.5 1.7-.8.6 1-.4 4.4-.4 4.4l1.9.6 2-5.9-1.9-.5-.2.5s-.9-1.8-2.2-1.4c-2 .7-3.5 2.4-3.8 4.6-.1.5-.1.9-.1 1.3-.8-1.2-1.7-2.5-2-3.6-.4-1.6-.6-3.2-.7-4.8l-2.4.3s-.4 1.6-.1 2.5c.2.9.6 2.6.6 2.6h-.9v1.4c-2.1-1-7.1-3.6-8.2-5 0 0-1.4.7-1.4 1.9 0 .7.9 1 .9 1l.5 3.5s-.7 1.3-.8 1.7c0 .5.1 1.1 1.1 1.2 0 0 .2 1.5.3 3.1l-1.3 1c.5.9 1 2.5-.7 4.1-1.7 1.6-3.2.6-4-.8-.8-1.4 1.5-9.2 1.5-9.2l.8 3.4 2.1-1.3s-.6-1.8-.9-2.9c-.4-1-.4-4.7-.4-4.7l-2.1-.5s-.3 1.8-.6 3.1c-.3 1.1-1.3 3.9-2 6 .2-5.5.6-12.7.7-14.1-.8-.1-2.4 1.2-3.5 1.6l.2 12.8c-1.5-3.8-2.7-7.2-3.8-10.1-1 .1-1.7.3-2.2.7v3.9C29.4 11 25.2 8 24.4 6.4c0 0-1.6.6-1.7 1.9-.1.8.8 1.2.8 1.2v3.9l-.6 1c-.4-.4-.8-.7-1.3-1-1.7-1.3-2.9-2.3-3.6-3.1-1.2-1.4-1.9-3.1-2.3-5.1l-.3-.1c-.4.5-.7 1-1.1 1.5l.6-4.4-3.2-.3-.2.9s-2-2.9-4-1.7c-1.5.9-5.1 3.6-5 9.4s4.6 8.5 6.2 9.1c1.5.6 6.2 1.6 6.8 3.2.5 1.6-1.4 5-3.5 4.6-.3-.1-2-.2-2.1-3.5l-2.5 1.9s.8 4.2 2.3 4.5c1.9.4 5.7.6 8.5-6 .3 2 .6 4.3.7 5.4l.3.5c1-.5 2.5-1.7 2.5-1.7l-1-5.5c-.1-.6-.2-1.1-.3-1.7l2.3-1.9c.2-.1.4-.3.6-.5-.1 2.4-.1 5.8-.1 6.1 0 .5-.2 2 2.2 1.5 2.2-.4 2.4-1.5 5.3-2.1l.4-.6c-.2 1.8-.5 4.1-.5 4.4l.1.2c1.1 0 2.8-1 2.8-1s.6-10.6.6-11.3c1.4 3.4 2.8 7 3.6 9.2.5-.1 1.4-.6 1.8-.8.4 1.1 1.2 2 2.8 2.5 3.2.9 5.2-1 6.2-2.6.1.5.6 1.1 2.1.6 2-.6 1.8-.6 3.7-1.2-.2 1.7-.5 3.1-.7 3.9l2.8-1.2s0-2.8.2-3.8.6-2.9.6-2.9 5.2 7.2 6.2 10.6l2.8.8s-6-10.6-7.3-12.1c0 0 2.9.1 3.7-1.4.1-.1.1-.3.1-.4.4.4.8.7 1.1.9.8.5 3.5 1.6 3.7 2.5.1.9-1.2 2.4-2.4 2-.2-.1-1.3-.2-1-2l-1.7.8s0 2.4.9 2.7c1.7.8 3.5 1.2 5.9-2.2 1.7-2.7-3.5-4.3-4.8-6.1zM9 15.5c-1-1-4.5-3.9-2.3-8.7.7-1.5 1.7-3 2.5-2 1.2 1.6.7 7.9.7 7.9l3.4.5.5-3.9.2.6c.4 1 .7 1.6 1 2 .3 1.1.7 2.7 1.3 4.9.4 1.3.7 2.5.9 3.4-2-2-6.4-2.9-8.2-4.7zm11.1 4.2c0-.1-.3-1-.8-2.5-.5-1.6-.8-2.4-.8-2.4v-.1c2 1 3.4 2 4.2 3.1-1.3 1.1-2.1 1.8-2.6 1.9zm11.5-4.8c0 1.9-.1 3.4-.1 4.7 0 .2-.1.9-.2 2.2 0 .1 0 .3-.1.5-.8 0-2 .2-3.6 1-2.7 1.4-2.4 0-2.4-.6s.1-5.2.1-5.2 3.1.9 4.1.7c0 0 1.4-.8 1.6-1.2 0 0-1.4-.6-3-1.2-.9-.3-1.9-.7-2.7-1.2l.1-3.4s4.1 3.2 6 3.5l.1-.1c.1.2.1.3.1.3zm23 6.5c-.6 0-1.3.3-2.2.9-2.4 1.6-2.3-.1-2.4-.6-.1-.5-.5-4.7-.5-4.7s2.5.8 3.4.5c0 0 1.2-1.2 1.4-1.6 0 0-2.1-.6-2.4-.7-1.6-.4-2.7-.8-2.7-.8l-.3-3s4.2 2.4 6 2.4l.4-.3c-.1 2.1-.4 5.1-.7 7.9zm5.7-4.3c-.3.9-2.6.3-2.6.3l.6-3.7s2.3 2.5 2 3.4z"/>
		</Icon>
		<DrawerDismiss on:click={close} />
	</header>
	{#if $state.showBack}
		<div class="drawer__back">
			<slot name="back" />
		</div>
	{/if}
	<div class="drawer__content">
		<div>
			<slot />
		</div>
	</div>
</div>
<Backdrop open={open} on:click={close}></Backdrop>
<style>
	.drawer {
		position: fixed;
		background-color: #fff;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		height: 100vh;
		width: 100vw;
		z-index: 519;
		top: 0;
		left: 0;
		transform: translate3d(-100%, 0, 0);
		transition: transform .2s cubic-bezier(.22,.61,.36,1);
		transition-delay: .1s;	
  }
	
	.drawer__back {
		font-size: .875rem;
		display: flex;
		align-items: center;
		background-color: #f2f2f2;
		height: 32px;
		gap: 8px;
		border-bottom: 1px solid #93939a;
		box-sizing: border-box;
		cursor: pointer;
	}

	.drawer__header {
		display: grid;
		grid-template-columns: 1fr 40px;
		align-items: center;
		border-bottom: 1px solid #93939a;
		padding: 8px;
	}
	
	.drawer--open {
		transform: translate3d(0, 0, 0);
	}
	
	.drawer__content {
		height: calc(100% - 72px);
		box-sizing: border-box;
		overflow: auto;
	}
	
	.drawer__content > div {
		box-sizing: border-box;
		padding: 4px 0 32px;
	}

	@media (min-width: 561px) {
		.drawer {
			max-width: 352px;
		}
	}
</style>