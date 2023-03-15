<script>
  export let type = "";
</script>
<div
  class="badge"
  class:badge--size={type === "small"}
>
  {#if type !== "small"}
    <slot />
  {/if}
</div>
<style>
  .badge {
    background-color: #2a508f;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
      Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
    display: flex;
    height: 16px;
    min-width: 16px;
    padding: 0 4px;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 8px;
    position: absolute;
    top: 0;
    right: 0;
  }
</style>