<script>
	import Button from "$lib/components/button";
  import Icon from "$lib/components/icon";
</script>
<Button 
  aria-label="close" 
	variant="icon"
	style="border-radius:50%;max-width:36px"
	on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:blur
  on:focus
>
	<Icon>
		<title>close</title>
		<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
	</Icon>
</Button>