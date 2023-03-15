<script>
	export let open = false;
</script>
	<div 
		class="backdrop"
		class:backdrop--open={open}
		on:click
		on:keypress
	/>
<style>
.backdrop {
	position: fixed;
	z-index: 518;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: block;
	background-color: rgba(0,0,0,.4);
	opacity: 0;
	pointer-events: none;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	will-change: opacity;
	transition: opacity .2s ease-in-out;
}

.backdrop--open {
  opacity: 1;
	pointer-events: initial;
}	
</style>