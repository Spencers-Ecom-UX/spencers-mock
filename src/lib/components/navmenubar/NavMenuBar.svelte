<script>
  export let label = "";
</script>
<nav class="menunav" aria-label={label}>
  <ol class="menubar" role="menubar" aria-label={label}>
    <slot />
  </ol>
</nav>
<style>
  .menunav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .menubar {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    width: 100%;
    max-width: 1256px;
    flex-flow: row wrap;
    min-height: 32px;
    align-items: center;
    justify-content: center;
  }


</style>