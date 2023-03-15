<script>
  export let href = "";
  export let active = false;
</script>
<li class="navmenu__item" role="none">
  <a 
    class="navmenu__link" 
    href={href} 
    tabindex={ active ? 0 : -1 } 
    aria-current={ active ? "page" : null }
    on:click
  >
    <slot />
  </a>
</li>
<style>
  .navmenu__link {
    -webkit-tap-highlight-color: transparent;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    line-height: 1.875rem;
    text-decoration: none;
    text-transform: initial;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 32px;
    padding: 0 12px;
    border: none;
    border-radius: 16px;
    outline: 0;
    white-space: nowrap;
    background-color: transparent;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-appearance: none;
    appearance: none;
  }

  .navmenu__link:visited {
    color: #211e22;
  }

  .navmenu__link:hover {
    background-color: #f2f2f2;
    text-decoration: underline;
  }
</style>