<script>
  import generateId from "$lib/client/util/local-unique-id-generator";
	const prefix = "aria-uikit-textfield";
  const n = generateId();
  
  export let id = `${prefix}-${n}`;
  export let label = "";
	
  const labelId = `${prefix}-label-${n}`;
	const labeledBy = $$restProps.hasOwnProperty("aria-label") ? null : labelId;
	$: invalid = false;
</script>
<div 
  class="textfield"
>
  <label 
		class="textfield__label"		 
		for={id}
		id={labelId} 
	>
		{label}
	</label>
  <input 
    aria-errormessage=""
		aria-invalid={invalid}
	  aria-labelledby={ label.length ? labeledBy : null }			 
    class="textfield__native-control"
    id={id}
		on:click
		on:change
		on:input
		on:keydown
		on:keyup
    on:focus
    on:blur
    on:mouseover
    on:mouseenter
    on:mouseleave
	  {...$$restProps}
  />
  <div class="textfield__message" aria-live="assertive" id="" role="alert"></div>
</div>
<style>
	.textfield {
		position: relative;
		display: grid;
		gap: 8px;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	}
	
	.textfield__native-control {
		outline: none;
		color: #212121;
		font-size: 16px;
		font-weight: 400;
		line-height: 1;
		letter-spacing: 0.04em;
		width: 100%;
		height: 36px;
		padding: 0 8px;
		border: 1px solid;
		border-color: #949499;
		border-radius: 4px;
		background: none;
		font-size: inherit;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
	  will-change: border, box-shadow;
  	box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px 0px
	}
	
	.textfield__native-control:hover {
		border-color: #000;
		box-shadow: inset 0 0 0 1px #000;
	}

	.textfield__native-control:focus-within {
		border-color: #3367d6 #285bc7 #2451b2;
		box-shadow: inset 0 0 0 1px #2451b2;
	}
	
	.textfield__message,
	.textfield__label {
		font-size: .875rem;
		line-height: 1;
	}
	
	.textfield__message {
		color: #d72c0d;
		word-break: break-word;
		overflow-wrap: break-word;
	}
	
	.textfield__message,
	.textfield__label:empty {
		display: none;
	}
</style>