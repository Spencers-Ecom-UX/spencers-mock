import { c as create_ssr_component, b as compute_rest_props, d as spread, g as escape_attribute_value, e as escape_object, a as add_attribute } from "./index3.js";
const Button_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".btn.svelte-148hg7f{-webkit-tap-highlight-color:transparent;font-size:0.875rem;font-weight:500;letter-spacing:0.04em;line-height:1.875rem;text-decoration:none;text-transform:initial;display:inline-flex;align-items:center;justify-content:center;position:relative;min-width:64px;height:36px;padding:0 16px;border:none;border-radius:4px;outline:0;background-color:transparent;overflow:hidden;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;appearance:none;gap:4px;transition:background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)}.btn--sizeSmall.svelte-148hg7f{height:32px}.btn--icon.svelte-148hg7f{padding:0;min-width:32px;transition:transform .3s ease-in}.btn--rounded.svelte-148hg7f{box-shadow:inset 0 0 0 2px #000;border-radius:18px;padding:0 16px}.btn--full-width.svelte-148hg7f{width:100%}.btn--raised.svelte-148hg7f{box-shadow:0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.btn--raised.svelte-148hg7f:hover,.btn--raised.svelte-148hg7f:focus{box-shadow:0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)}.btn.svelte-148hg7f:not(:disabled){color:#212121;background-color:transparent}.btn.svelte-148hg7f:hover{background-color:#f2f2f2;cursor:pointer}.btn.btn--primary.svelte-148hg7f{background-color:#2a508f;color:#fff}.btn--rounded.btn--primary.svelte-148hg7f{box-shadow:inset 0 0 0 2px #1D3864}.btn--underline.svelte-148hg7f:hover,.btn--underline.svelte-148hg7f:focus{background-color:transparent;text-decoration:underline}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "variant",
    "raised",
    "disabled",
    "size",
    "label",
    "el",
    "rounded",
    "fullwidth",
    "type",
    "class"
  ]);
  let { variant = "default" } = $$props;
  let { raised = false } = $$props;
  let { disabled = false } = $$props;
  let { size = "" } = $$props;
  let { label = "" } = $$props;
  let { el = null } = $$props;
  let { rounded = false } = $$props;
  let { fullwidth = false } = $$props;
  let { type = "button" } = $$props;
  let { class: clazz = null } = $$props;
  const css2 = clazz ? ` ${clazz}` : "";
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.raised === void 0 && $$bindings.raised && raised !== void 0)
    $$bindings.raised(raised);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.fullwidth === void 0 && $$bindings.fullwidth && fullwidth !== void 0)
    $$bindings.fullwidth(fullwidth);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  $$result.css.add(css$1);
  return `<button${spread(
    [
      {
        class: escape_attribute_value(`btn${css2}`)
      },
      { type: escape_attribute_value(type) },
      {
        "aria-label": escape_attribute_value(label)
      },
      { disabled: disabled || null },
      escape_object($$restProps)
    ],
    {
      classes: (variant == "primary" ? "btn--primary" : "") + " " + (variant == "outlined" ? "btn--outlined" : "") + " " + (variant == "underline" ? "btn--underline" : "") + " " + (variant == "icon" ? "btn--icon" : "") + " " + (rounded ? "btn--rounded" : "") + " " + (raised ? "btn--raised" : "") + " " + (size == "small" ? "btn--sizeSmall" : "") + " " + (size == "large" ? "btn--sizeLarge" : "") + " " + (fullwidth ? "btn--full-width" : "") + " svelte-148hg7f"
    }
  )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}
</button>`;
});
const Icon_svelte_svelte_type_style_lang = "";
const css = {
  code: ".icon.svelte-qfi37k{width:24px;height:24px;fill:#222}.icon--logo.svelte-qfi37k{width:72px;height:32px}",
  map: null
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["viewbox", "variant"]);
  let { viewbox = "0 0 24 24" } = $$props;
  let { variant = "" } = $$props;
  if ($$props.viewbox === void 0 && $$bindings.viewbox && viewbox !== void 0)
    $$bindings.viewbox(viewbox);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  $$result.css.add(css);
  return `<svg${spread(
    [
      { class: "icon" },
      { role: "presentation" },
      { focusable: "false" },
      { viewBox: escape_attribute_value(viewbox) },
      escape_object($$restProps)
    ],
    {
      classes: (variant == "logo" ? "icon--logo" : "") + " svelte-qfi37k"
    }
  )}>${slots.default ? slots.default({}) : ``}</svg>`;
});
let id = 0;
function nextId() {
  return ++id;
}
function generateId() {
  return nextId();
}
export {
  Button as B,
  Icon as I,
  generateId as g
};
