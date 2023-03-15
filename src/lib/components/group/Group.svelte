<script lang="ts">
  enum alignment {
    start = "start",
    center = "center",
    end = "end"
  }
  export let align: alignment = alignment.start;
</script>
<div 
  class="group"
  class:group--align-end={ align == alignment.end }
  role="group"
  {...$$restProps}
>
  <slot />
</div>
<style>
  .group {
    display: flex;
    align-items: center;
  }

  .group--align-end {
    justify-content: end;
  }
</style>