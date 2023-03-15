import { writable } from 'svelte/store';
import generateId from "$lib/client/util/local-unique-id-generator.js";

const id = generateId();

function useComboBoxState() {
	return writable({
		comboboxId: `ariakit-combobox-${id}`,
		popoverId: `ariakit-popover-${id}`,
		listboxId: `ariakit-listbox-${id}`,
		open: false,
		activeOption: null,
		value: null
	});
}

export default useComboBoxState;