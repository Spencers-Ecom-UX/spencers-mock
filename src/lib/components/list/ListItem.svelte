<script>
	export let bold = false;
	export let focused = false;
	export let variant = "";
</script>
<li 
  class="list__item"
	class:list__item--focused={ focused }	
	class:list__item--bold={ bold }
	class:list__item--iconWithText={ variant == "iconWithText" }	
  {...$$restProps}
	on:click
>
	<slot />
</li>
<style>
	.list__item {
		position: relative;
		flex: 1 1 auto;
		padding: 0 8px;
		min-height: 36px;
		display: flex;
		align-items: center;
		border-radius: 4px;
	}

	.list__item--focused,
	.list__item:hover {
		background-color: #f6f6f7;
		cursor: pointer;
	}

	:global(.list--sizeSmall) .list__item {
		min-height: 32px;
	}	

	:global(.list--sizeDense) .list__item {
		min-height: 24px;
	}		
	
	:global(.list--sizeDense) .list__item {
		font-size: 12px;
	}
	
	:global(.list--underlineOnHover) .list__item:hover {
		background-color: transparent;
		text-decoration: underline;
	}
	
	.list__item--bold	{
		font-weight: 700;		
	}
	
	.list__item--iconWithText {
		display: grid;
		grid-template-columns: 24px 1fr;
		gap: 8px;
	}
</style>