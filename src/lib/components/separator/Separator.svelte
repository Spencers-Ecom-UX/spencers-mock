<script>
	export let gap = 0;
</script>
<hr aria-orientation="horizontal" class="separator" style={`--gap: ${gap}px 0`} />
<style>
	.separator {
		border: none;
		margin: var(--gap, 0);
		height: 1px;
		background-color: #a8a8ae;
		width:100%;
	}
</style>