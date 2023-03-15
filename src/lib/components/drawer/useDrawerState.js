import { writable } from 'svelte/store';
import generateId from "$lib/client/util/local-unique-id-generator.js";

const id = generateId();

function useDrawerState() {
	return writable({
		drawerId: `aria-uikit-drawer-${id}`,
    disclosureId: `aria-uikit-drawer-disclosure-${id}`,
    open: false,
		showBack: false
	});
}

export default useDrawerState;