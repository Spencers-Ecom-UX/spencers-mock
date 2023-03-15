<script>
  export let variant = "";
  export let size = "";
	export let gap = 4;
	export let underlineOnHover = false;
</script>
<ol 
  class="list"
	class:list--underlineOnHover={ underlineOnHover }
  class:list--indented={ variant == 'indented' }
	class:list--sizeDense={ size == 'dense' }	
  class:list--sizeSmall={ size == 'small' }
  class:list--sizeLarge={ size == 'large' }
  {...$$restProps}
	style={`--list-gap:${gap}px`}
>
  <slot />
</ol>
<style>
	.list {
		position: relative;
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-flow: column;
		gap: var(--list-gap);
		background-color: #fff;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		font-size: .875rem;
	}

	.list--indented {
		border-left: 2px solid;
		margin-left: 24px;
	}
	
	.list--indented:after {
		content: "";
		position: absolute;
		width: 2px;
		height: 100%;
		background-color: white;
		z-index: 10;
		top: 0;
		left: -28px;
	} 
</style>