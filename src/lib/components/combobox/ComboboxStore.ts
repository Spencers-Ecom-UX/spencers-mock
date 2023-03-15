export interface ComboboxStore {
  comboboxId: string;
  popoverId: string;
  listboxId: string;
  open: boolean;
  activeOption: string | null;
  value: string | null;
}