import { writable } from 'svelte/store';
import generateId from "$lib/client/util/local-unique-id-generator.js";

const id = generateId();
const mockRect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0
};

function useDrawerState() {
	return writable({
		popoverId: `aria-uikit-drawer-${id}`,
    disclosureId: `aria-uikit-drawer-disclosure-${id}`,
    open: false,
		disclosureRect: mockRect,
		dialogRect: mockRect,
		viewport: {
      width: 0,
      height: 0
    }
  });
}

export default useDrawerState;