<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { isPlainObject, getBoundingClientRectUsingIO } from "$lib/client/util/utilities";
  import { browser } from '$app/environment';

  export let state = {};
  export let label = "";
  export let gap = 8;

  let ref;
	const id = (isPlainObject(state) && state.subscribe instanceof Function) ? $state.drawerId : null;
	$: open = (isPlainObject(state) && state.subscribe instanceof Function) ? $state.open : false;
  let style = setPosition(0,0);

  $: if (open) {
    const { x, y } = checkBounds($state.disclosureRect.x, $state.disclosureRect.y);
    style = setPosition(x, y);
  }

	function close() {
		$state.open = false;
	}

  function setPosition(x, y) {
    return `position:fixed;transform:translate3d(${x}px,${y}px,0)`;
  }

  function checkBounds() {
    const hitRightBoundary = $state.disclosureRect.x + $state.dialogRect.width >= $state.viewport.width;
    // add if popover set to right alignment
    // const hitLeftBoundary = disclosurePosition <= 0;
    
    if (hitRightBoundary) {
      return {
        x: $state.disclosureRect.right - $state.dialogRect.width,
        y: $state.disclosureRect.bottom + gap
      };
    }

    return {
      x: $state.disclosureRect.left, 
      y: $state.disclosureRect.bottom + gap
    }
  }

  function popoverEvents(node) {
    let timeout = 0;
    function handleResize({ target }) {
      const { width, height } = target;
      $state.viewport = { width, height };
      if (!$state.open) return;
      if (timeout) {
        window.cancelAnimationFrame(timeout)
      }

      timeout = window.requestAnimationFrame(() => {
        $state.disclosureRect = $state.disclosure.getBoundingClientRect();
        const {x, y} = checkBounds();
        style = setPosition(x, y);
      });
    }

    function handleEscape(event) {
      const { key } = event;
      if (key == "Esc" || key == "Escape") {
        event.stopPropagation();
        close();
      }
    }

    function handleDocumentClick({ target }) {
      if (!$state.open || target == $state.disclosure || $state.disclosure.contains(target)) return;
      if ($state.dialog.contains(target) && target.closest("a")) {
        close();
      }

      if (target !== $state.dialog && !$state.dialog.contains(target)) {
        close();
      }
    }

    browser && document.addEventListener("click", handleDocumentClick);
    browser && document.addEventListener("keyup", handleEscape);
    window.visualViewport.addEventListener("resize", handleResize);

    return {
      destroy() {
        browser && document.removeEventListener("click", handleDocumentClick);
        browser && document.removeEventListener("keyup", handleEscape);
        window.visualViewport.removeEventListener("resize", handleResize);
      }
    }
  }

  onMount(async () => {
    const { width, height } = window.visualViewport;
    $state.viewport = { width, height };
    const rect = await getBoundingClientRectUsingIO(ref);
    $state.dialog = ref;
		$state.dialogRect = rect.toJSON();
  });
</script>
<div 
  bind:this={ref}
  use:popoverEvents
  id={id} 
	role="dialog" 
	tabindex="-1" 
	aria-label={label} 
	class="popover"
	class:popover--expanded={ open }
	{style}
>
	<slot />
</div>
<style>
  .popover {
		box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    background-color: rgb(255, 255, 255);
    position: absolute;
		top: 0;
		left: 0;
    border-radius: 4px;
    padding: 8px;
    max-height: calc(100vh - 56px);
    outline: 0px;
    border: 1px solid rgba(33, 33, 33, 0.25);
    color: rgb(33, 33, 33);
    z-index: 999;
		pointer-events: none;
    opacity: 0;
		transition: opacity 0.15s;
		transition-delay: 0.05s;
    min-width: 232px;
	}
	
	.popover--expanded {
		pointer-events: visible;
    opacity: 1;
	}
</style>