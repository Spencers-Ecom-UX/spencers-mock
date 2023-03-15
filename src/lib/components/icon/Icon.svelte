<script>
	export let viewbox = "0 0 24 24";
	export let variant = "";
</script>
<svg 
	class="icon"
  class:icon--logo={ variant == "logo" }
	role="presentation" 
	focusable="false" 
	viewBox={viewbox}
	{...$$restProps}
>
	<slot />
</svg>
<style>
	.icon {
		width: 24px;
		height: 24px;
		fill: #222;
	}
	
	.icon--logo {
		width: 72px;
		height: 32px;
	}
</style>