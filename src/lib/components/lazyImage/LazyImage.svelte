<script>
	export let width = "";
	export let height = "";
	export let alt = "";
	export let src = ""
	export let mobileSrc = "";
	const mbsrc = mobileSrc ? mobileSrc : src;
</script>
<picture class="image-container">
	<source media="(max-width: 560px)" srcset={mbsrc}>
	<img class="image" loading="lazy" width={width} height={height} src={src} alt={alt} decoding="async" /> 
</picture>
<style>
	.image {
		display: block;
		height: auto;
		width: 100%;
	}

	.image-container {
		width: 60px;
		height: 60px;
		border-radius: 50%;
    overflow: hidden;
    border: 1px solid #cdcdcd;
	}
</style>