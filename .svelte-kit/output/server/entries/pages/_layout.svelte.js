import { c as create_ssr_component, a as add_attribute, b as compute_rest_props, d as spread, e as escape_object, f as subscribe, g as escape_attribute_value, v as validate_component, h as escape, i as each } from "../../chunks/index3.js";
import { g as generateId, B as Button, I as Icon } from "../../chunks/local-unique-id-generator.js";
import { w as writable } from "../../chunks/index2.js";
import "../../chunks/utils.js";
const NavMenuBar_svelte_svelte_type_style_lang = "";
const css$d = {
  code: ".menunav.svelte-19gp0uw{display:flex;align-items:center;justify-content:center;width:100%}.menubar.svelte-19gp0uw{list-style:none;margin:0;padding:0;display:flex;width:100%;max-width:1256px;flex-flow:row wrap;min-height:32px;align-items:center;justify-content:center}",
  map: null
};
const NavMenuBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css$d);
  return `<nav class="menunav svelte-19gp0uw"${add_attribute("aria-label", label, 0)}><ol class="menubar svelte-19gp0uw" role="menubar"${add_attribute("aria-label", label, 0)}>${slots.default ? slots.default({}) : ``}</ol>
</nav>`;
});
const NavMenuItem_svelte_svelte_type_style_lang = "";
const css$c = {
  code: ".navmenu__link.svelte-1lu6l70{-webkit-tap-highlight-color:transparent;font-size:0.875rem;font-weight:500;letter-spacing:0.04em;line-height:1.875rem;text-decoration:none;text-transform:initial;display:inline-flex;align-items:center;justify-content:center;position:relative;height:32px;padding:0 12px;border:none;border-radius:16px;outline:0;white-space:nowrap;background-color:transparent;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;appearance:none}.navmenu__link.svelte-1lu6l70:visited{color:#211e22}.navmenu__link.svelte-1lu6l70:hover{background-color:#f2f2f2;text-decoration:underline}",
  map: null
};
const NavMenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "" } = $$props;
  let { active = false } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  $$result.css.add(css$c);
  return `<li class="navmenu__item" role="none"><a class="navmenu__link svelte-1lu6l70"${add_attribute("href", href, 0)}${add_attribute("tabindex", active ? 0 : -1, 0)}${add_attribute("aria-current", active ? "page" : null, 0)}>${slots.default ? slots.default({}) : ``}</a>
</li>`;
});
const Globalheader_svelte_svelte_type_style_lang = "";
const css$b = {
  code: '.global-header.svelte-h9gr5h{width:100%;position:relative;min-height:60px;display:flex;align-items:center;justify-content:center;box-sizing:border-box;will-change:background;background-color:#fff;border-bottom:1px solid #d1d1d6;z-index:9}.global-header__container.svelte-h9gr5h{display:grid;grid-template-areas:"menu logo search group";grid-template-columns:32px 72px 1fr minmax(auto, max-content);gap:8px;align-items:center;height:100%;width:100%;max-width:1256px;padding:0px 8px}@media(max-width: 560px){.global-header__container.svelte-h9gr5h{padding:8px;grid-template-areas:"menu logo search group";grid-template-columns:36px 40px 1fr 64px}}',
  map: null
};
const Globalheader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$b);
  return `<header class="global-header svelte-h9gr5h"><div class="global-header__container svelte-h9gr5h">${slots.default ? slots.default({}) : ``}</div>
</header>`;
});
const Badge_svelte_svelte_type_style_lang = "";
const css$a = {
  code: '.badge.svelte-u5cke{background-color:#2a508f;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,\n      Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-size:12px;font-weight:400;line-height:1;display:flex;height:16px;min-width:16px;padding:0 4px;align-items:center;justify-content:center;color:#fff;border-radius:8px;position:absolute;top:0;right:0}',
  map: null
};
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$result.css.add(css$a);
  return `<div class="${["badge svelte-u5cke", type === "small" ? "badge--size" : ""].join(" ").trim()}">${type !== "small" ? `${slots.default ? slots.default({}) : ``}` : ``}
</div>`;
});
const Group_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ".group.svelte-ptfuhq{display:flex;align-items:center}.group--align-end.svelte-ptfuhq{justify-content:end}",
  map: null
};
const Group = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["align"]);
  var alignment = /* @__PURE__ */ ((alignment2) => {
    alignment2["start"] = "start";
    alignment2["center"] = "center";
    alignment2["end"] = "end";
    return alignment2;
  })(alignment || {});
  let { align = "start" } = $$props;
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  $$result.css.add(css$9);
  return `<div${spread([{ class: "group" }, { role: "group" }, escape_object($$restProps)], {
    classes: (align == alignment.end ? "group--align-end" : "") + " svelte-ptfuhq"
  })}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const Combobox_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: '.combobox.svelte-gni0ax.svelte-gni0ax{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";position:relative;display:grid;width:100%}.combobox--rounded.svelte-gni0ax .combobox__native-control.svelte-gni0ax{border-radius:18px;padding:0 16px}.combobox__native-control.svelte-gni0ax.svelte-gni0ax{outline:none;color:#212121;font-size:16px;font-weight:400;line-height:1;letter-spacing:0.04em;width:100%;height:36px;padding:0 8px;border:1px solid;border-color:#949499;border-radius:4px;background:none;font-size:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none;transition:border 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);will-change:border, box-shadow;box-shadow:rgba(0, 0, 0, 0.05) 0px 1px 0px 0px\n	}.combobox__native-control.svelte-gni0ax.svelte-gni0ax:hover{border-color:#000;box-shadow:inset 0 0 0 1px #000}.combobox__native-control.svelte-gni0ax.svelte-gni0ax:focus{border-color:#3367d6 #285bc7 #2451b2;box-shadow:inset 0 0 0 1px #2451b2}',
  map: null
};
const Combobox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["rounded", "state"]);
  let $state, $$unsubscribe_state;
  let { rounded = false } = $$props;
  let { state } = $$props;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  const id2 = $state.comboboxId;
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  $$result.css.add(css$8);
  $$unsubscribe_state();
  return `<div${spread([{ class: "combobox" }, escape_object($$restProps)], {
    classes: (rounded ? "combobox--rounded" : "") + " svelte-gni0ax"
  })}><input${spread(
    [
      { id: escape_attribute_value(id2) },
      { role: "combobox" },
      { class: "combobox__native-control" },
      { type: "text" },
      { "aria-labelledby": "" },
      { "aria-invalid": "false" },
      { "aria-autocomplete": "list" },
      {
        "aria-expanded": escape_attribute_value($state.open)
      },
      { value: "" },
      { tabindex: escape_attribute_value(0) },
      { "aria-controls": "<popoverid>" },
      { "aria-owns": "<popoverid>" },
      {
        "aria-activedescendant": "<listboxOptionId>"
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-gni0ax" }
  )}>
</div>`;
});
const id$2 = generateId();
function useComboBoxState() {
  return writable({
    comboboxId: `ariakit-combobox-${id$2}`,
    popoverId: `ariakit-popover-${id$2}`,
    listboxId: `ariakit-listbox-${id$2}`,
    open: false,
    activeOption: null,
    value: null
  });
}
const DrawerDismiss = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Button, "Button").$$render(
    $$result,
    {
      "aria-label": "close",
      variant: "icon",
      style: "border-radius:50%;max-width:36px"
    },
    {},
    {
      default: () => {
        return `${validate_component(Icon, "Icon").$$render($$result, {}, {}, {
          default: () => {
            return `<title>close</title>
		<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>`;
          }
        })}`;
      }
    }
  )}`;
});
const Backdrop_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".backdrop.svelte-1cffh0t{position:fixed;z-index:518;top:0;right:0;bottom:0;left:0;display:block;background-color:rgba(0,0,0,.4);opacity:0;pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;will-change:opacity;transition:opacity .2s ease-in-out}.backdrop--open.svelte-1cffh0t{opacity:1;pointer-events:initial}",
  map: null
};
const Backdrop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css$7);
  return `<div class="${["backdrop svelte-1cffh0t", open ? "backdrop--open" : ""].join(" ").trim()}"></div>`;
});
const Drawer_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: '.drawer.svelte-14mhfvm.svelte-14mhfvm{position:fixed;background-color:#fff;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";height:100vh;width:100vw;z-index:519;top:0;left:0;transform:translate3d(-100%, 0, 0);transition:transform .2s cubic-bezier(.22,.61,.36,1);transition-delay:.1s}.drawer__back.svelte-14mhfvm.svelte-14mhfvm{font-size:.875rem;display:flex;align-items:center;background-color:#f2f2f2;height:32px;gap:8px;border-bottom:1px solid #93939a;box-sizing:border-box;cursor:pointer}.drawer__header.svelte-14mhfvm.svelte-14mhfvm{display:grid;grid-template-columns:1fr 40px;align-items:center;border-bottom:1px solid #93939a;padding:8px}.drawer--open.svelte-14mhfvm.svelte-14mhfvm{transform:translate3d(0, 0, 0)}.drawer__content.svelte-14mhfvm.svelte-14mhfvm{height:calc(100% - 72px);box-sizing:border-box;overflow:auto}.drawer__content.svelte-14mhfvm>div.svelte-14mhfvm{box-sizing:border-box;padding:4px 0 32px}@media(min-width: 561px){.drawer.svelte-14mhfvm.svelte-14mhfvm{max-width:352px}}',
  map: null
};
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open;
  let $state, $$unsubscribe_state;
  let { state } = $$props;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  const id2 = $state.drawerId;
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  $$result.css.add(css$6);
  open = $state.open;
  $$unsubscribe_state();
  return `<div${add_attribute("id", id2, 0)} role="dialog" aria-modal="true" class="${["drawer svelte-14mhfvm", open ? "drawer--open" : ""].join(" ").trim()}" tabindex="-1"><header class="drawer__header svelte-14mhfvm">${validate_component(Icon, "Icon").$$render($$result, { variant: "logo", viewbox: "0 0 72 32" }, {}, {
    default: () => {
      return `<path d="M64.4 15.9c-.5-.7-2.2-2.7-.4-5 .6-.7 1.3-1.5 1.7-.8.6 1-.4 4.4-.4 4.4l1.9.6 2-5.9-1.9-.5-.2.5s-.9-1.8-2.2-1.4c-2 .7-3.5 2.4-3.8 4.6-.1.5-.1.9-.1 1.3-.8-1.2-1.7-2.5-2-3.6-.4-1.6-.6-3.2-.7-4.8l-2.4.3s-.4 1.6-.1 2.5c.2.9.6 2.6.6 2.6h-.9v1.4c-2.1-1-7.1-3.6-8.2-5 0 0-1.4.7-1.4 1.9 0 .7.9 1 .9 1l.5 3.5s-.7 1.3-.8 1.7c0 .5.1 1.1 1.1 1.2 0 0 .2 1.5.3 3.1l-1.3 1c.5.9 1 2.5-.7 4.1-1.7 1.6-3.2.6-4-.8-.8-1.4 1.5-9.2 1.5-9.2l.8 3.4 2.1-1.3s-.6-1.8-.9-2.9c-.4-1-.4-4.7-.4-4.7l-2.1-.5s-.3 1.8-.6 3.1c-.3 1.1-1.3 3.9-2 6 .2-5.5.6-12.7.7-14.1-.8-.1-2.4 1.2-3.5 1.6l.2 12.8c-1.5-3.8-2.7-7.2-3.8-10.1-1 .1-1.7.3-2.2.7v3.9C29.4 11 25.2 8 24.4 6.4c0 0-1.6.6-1.7 1.9-.1.8.8 1.2.8 1.2v3.9l-.6 1c-.4-.4-.8-.7-1.3-1-1.7-1.3-2.9-2.3-3.6-3.1-1.2-1.4-1.9-3.1-2.3-5.1l-.3-.1c-.4.5-.7 1-1.1 1.5l.6-4.4-3.2-.3-.2.9s-2-2.9-4-1.7c-1.5.9-5.1 3.6-5 9.4s4.6 8.5 6.2 9.1c1.5.6 6.2 1.6 6.8 3.2.5 1.6-1.4 5-3.5 4.6-.3-.1-2-.2-2.1-3.5l-2.5 1.9s.8 4.2 2.3 4.5c1.9.4 5.7.6 8.5-6 .3 2 .6 4.3.7 5.4l.3.5c1-.5 2.5-1.7 2.5-1.7l-1-5.5c-.1-.6-.2-1.1-.3-1.7l2.3-1.9c.2-.1.4-.3.6-.5-.1 2.4-.1 5.8-.1 6.1 0 .5-.2 2 2.2 1.5 2.2-.4 2.4-1.5 5.3-2.1l.4-.6c-.2 1.8-.5 4.1-.5 4.4l.1.2c1.1 0 2.8-1 2.8-1s.6-10.6.6-11.3c1.4 3.4 2.8 7 3.6 9.2.5-.1 1.4-.6 1.8-.8.4 1.1 1.2 2 2.8 2.5 3.2.9 5.2-1 6.2-2.6.1.5.6 1.1 2.1.6 2-.6 1.8-.6 3.7-1.2-.2 1.7-.5 3.1-.7 3.9l2.8-1.2s0-2.8.2-3.8.6-2.9.6-2.9 5.2 7.2 6.2 10.6l2.8.8s-6-10.6-7.3-12.1c0 0 2.9.1 3.7-1.4.1-.1.1-.3.1-.4.4.4.8.7 1.1.9.8.5 3.5 1.6 3.7 2.5.1.9-1.2 2.4-2.4 2-.2-.1-1.3-.2-1-2l-1.7.8s0 2.4.9 2.7c1.7.8 3.5 1.2 5.9-2.2 1.7-2.7-3.5-4.3-4.8-6.1zM9 15.5c-1-1-4.5-3.9-2.3-8.7.7-1.5 1.7-3 2.5-2 1.2 1.6.7 7.9.7 7.9l3.4.5.5-3.9.2.6c.4 1 .7 1.6 1 2 .3 1.1.7 2.7 1.3 4.9.4 1.3.7 2.5.9 3.4-2-2-6.4-2.9-8.2-4.7zm11.1 4.2c0-.1-.3-1-.8-2.5-.5-1.6-.8-2.4-.8-2.4v-.1c2 1 3.4 2 4.2 3.1-1.3 1.1-2.1 1.8-2.6 1.9zm11.5-4.8c0 1.9-.1 3.4-.1 4.7 0 .2-.1.9-.2 2.2 0 .1 0 .3-.1.5-.8 0-2 .2-3.6 1-2.7 1.4-2.4 0-2.4-.6s.1-5.2.1-5.2 3.1.9 4.1.7c0 0 1.4-.8 1.6-1.2 0 0-1.4-.6-3-1.2-.9-.3-1.9-.7-2.7-1.2l.1-3.4s4.1 3.2 6 3.5l.1-.1c.1.2.1.3.1.3zm23 6.5c-.6 0-1.3.3-2.2.9-2.4 1.6-2.3-.1-2.4-.6-.1-.5-.5-4.7-.5-4.7s2.5.8 3.4.5c0 0 1.2-1.2 1.4-1.6 0 0-2.1-.6-2.4-.7-1.6-.4-2.7-.8-2.7-.8l-.3-3s4.2 2.4 6 2.4l.4-.3c-.1 2.1-.4 5.1-.7 7.9zm5.7-4.3c-.3.9-2.6.3-2.6.3l.6-3.7s2.3 2.5 2 3.4z"></path>`;
    }
  })}
		${validate_component(DrawerDismiss, "DrawerDismiss").$$render($$result, {}, {}, {})}</header>
	${$state.showBack ? `<div class="drawer__back svelte-14mhfvm">${slots.back ? slots.back({}) : ``}</div>` : ``}
	<div class="drawer__content svelte-14mhfvm"><div class="svelte-14mhfvm">${slots.default ? slots.default({}) : ``}</div></div></div>
${validate_component(Backdrop, "Backdrop").$$render($$result, { open }, {}, {})}`;
});
const DrawerDisclosure = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open;
  let $$restProps = compute_rest_props($$props, ["state"]);
  let $state, $$unsubscribe_state;
  let { state } = $$props;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  const id2 = $state.disclosureId;
  const drawerId = $state.drawerId;
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  open = $state.open;
  $$unsubscribe_state();
  return `${validate_component(Button, "Button").$$render($$result, Object.assign({}, { id: id2 }, { "aria-expanded": open }, { "aria-controls": drawerId }, { "aria-haspopup": "dialog" }, { variant: "icon" }, $$restProps), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const id$1 = generateId();
function useDrawerState$1() {
  return writable({
    drawerId: `aria-uikit-drawer-${id$1}`,
    disclosureId: `aria-uikit-drawer-disclosure-${id$1}`,
    open: false,
    showBack: false
  });
}
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
const Popover_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: '.popover.svelte-1wd8af6{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);font-family:-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";background-color:rgb(255, 255, 255);position:absolute;top:0;left:0;border-radius:4px;padding:8px;max-height:calc(100vh - 56px);outline:0px;border:1px solid rgba(33, 33, 33, 0.25);color:rgb(33, 33, 33);z-index:999;pointer-events:none;opacity:0;transition:opacity 0.15s;transition-delay:0.05s;min-width:232px}.popover--expanded.svelte-1wd8af6{pointer-events:visible;opacity:1}',
  map: null
};
function setPosition(x, y) {
  return `position:fixed;transform:translate3d(${x}px,${y}px,0)`;
}
const Popover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open;
  let $state, $$unsubscribe_state;
  let { state = {} } = $$props;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  let { label = "" } = $$props;
  let { gap = 8 } = $$props;
  let ref;
  const id2 = isPlainObject(state) && state.subscribe instanceof Function ? $state.drawerId : null;
  let style = setPosition(0, 0);
  function checkBounds() {
    const hitRightBoundary = $state.disclosureRect.x + $state.dialogRect.width >= $state.viewport.width;
    if (hitRightBoundary) {
      return {
        x: $state.disclosureRect.right - $state.dialogRect.width,
        y: $state.disclosureRect.bottom + gap
      };
    }
    return {
      x: $state.disclosureRect.left,
      y: $state.disclosureRect.bottom + gap
    };
  }
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  $$result.css.add(css$5);
  open = isPlainObject(state) && state.subscribe instanceof Function ? $state.open : false;
  {
    if (open) {
      const { x, y } = checkBounds($state.disclosureRect.x, $state.disclosureRect.y);
      style = setPosition(x, y);
    }
  }
  $$unsubscribe_state();
  return `<div${add_attribute("id", id2, 0)} role="dialog" tabindex="-1"${add_attribute("aria-label", label, 0)} class="${["popover svelte-1wd8af6", open ? "popover--expanded" : ""].join(" ").trim()}"${add_attribute("style", style, 0)}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const PopoverDisclosure = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  let { state = {} } = $$props;
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  const id2 = $state.disclosureId;
  let ref;
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Button, "Button").$$render(
      $$result,
      {
        id: id2,
        type: "button",
        variant: "icon",
        style: "padding:0 4px",
        "aria-expanded": $state.open,
        "aria-controls": $state.dialogId,
        "aria-haspopup": "dialog",
        this: ref
      },
      {
        this: ($$value) => {
          ref = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_state();
  return $$rendered;
});
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
const List_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: '.list.svelte-1nwpwdf{position:relative;margin:0;padding:0;list-style:none;display:flex;flex-flow:column;gap:var(--list-gap);background-color:#fff;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-size:.875rem}.list--indented.svelte-1nwpwdf{border-left:2px solid;margin-left:24px}.list--indented.svelte-1nwpwdf:after{content:"";position:absolute;width:2px;height:100%;background-color:white;z-index:10;top:0;left:-28px}',
  map: null
};
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["variant", "size", "gap", "underlineOnHover"]);
  let { variant = "" } = $$props;
  let { size = "" } = $$props;
  let { gap = 4 } = $$props;
  let { underlineOnHover = false } = $$props;
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.underlineOnHover === void 0 && $$bindings.underlineOnHover && underlineOnHover !== void 0)
    $$bindings.underlineOnHover(underlineOnHover);
  $$result.css.add(css$4);
  return `<ol${spread(
    [
      { class: "list" },
      escape_object($$restProps),
      {
        style: escape_attribute_value(`--list-gap:${gap}px`)
      }
    ],
    {
      classes: (underlineOnHover ? "list--underlineOnHover" : "") + " " + (variant == "indented" ? "list--indented" : "") + " " + (size == "dense" ? "list--sizeDense" : "") + " " + (size == "small" ? "list--sizeSmall" : "") + " " + (size == "large" ? "list--sizeLarge" : "") + " svelte-1nwpwdf"
    }
  )}>${slots.default ? slots.default({}) : ``}
</ol>`;
});
const ListItem_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".list__item.svelte-28x3pt{position:relative;flex:1 1 auto;padding:0 8px;min-height:36px;display:flex;align-items:center;border-radius:4px}.list__item--focused.svelte-28x3pt,.list__item.svelte-28x3pt:hover{background-color:#f6f6f7;cursor:pointer}.list--sizeSmall .list__item.svelte-28x3pt{min-height:32px}.list--sizeDense .list__item.svelte-28x3pt{min-height:24px}.list--sizeDense .list__item.svelte-28x3pt{font-size:12px}.list--underlineOnHover .list__item.svelte-28x3pt:hover{background-color:transparent;text-decoration:underline}.list__item--bold.svelte-28x3pt{font-weight:700}.list__item--iconWithText.svelte-28x3pt{display:grid;grid-template-columns:24px 1fr;gap:8px}",
  map: null
};
const ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["bold", "focused", "variant"]);
  let { bold = false } = $$props;
  let { focused = false } = $$props;
  let { variant = "" } = $$props;
  if ($$props.bold === void 0 && $$bindings.bold && bold !== void 0)
    $$bindings.bold(bold);
  if ($$props.focused === void 0 && $$bindings.focused && focused !== void 0)
    $$bindings.focused(focused);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  $$result.css.add(css$3);
  return `<li${spread([{ class: "list__item" }, escape_object($$restProps)], {
    classes: (focused ? "list__item--focused" : "") + " " + (bold ? "list__item--bold" : "") + " " + (variant == "iconWithText" ? "list__item--iconWithText" : "") + " svelte-28x3pt"
  })}>${slots.default ? slots.default({}) : ``}
</li>`;
});
const Separator_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".separator.svelte-11og2{border:none;margin:var(--gap, 0);height:1px;background-color:#a8a8ae;width:100%}",
  map: null
};
const Separator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { gap = 0 } = $$props;
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  $$result.css.add(css$2);
  return `<hr aria-orientation="horizontal" class="separator svelte-11og2"${add_attribute("style", `--gap: ${gap}px 0`, 0)}>`;
});
const LazyImage_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".image.svelte-vc9074{display:block;height:auto;width:100%}.image-container.svelte-vc9074{width:60px;height:60px;border-radius:50%;overflow:hidden;border:1px solid #cdcdcd}",
  map: null
};
const LazyImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width = "" } = $$props;
  let { height = "" } = $$props;
  let { alt = "" } = $$props;
  let { src = "" } = $$props;
  let { mobileSrc = "" } = $$props;
  const mbsrc = mobileSrc ? mobileSrc : src;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.mobileSrc === void 0 && $$bindings.mobileSrc && mobileSrc !== void 0)
    $$bindings.mobileSrc(mobileSrc);
  $$result.css.add(css$1);
  return `<picture class="image-container svelte-vc9074"><source media="(max-width: 560px)"${add_attribute("srcset", mbsrc, 0)}>
	<img class="image svelte-vc9074" loading="lazy"${add_attribute("width", width, 0)}${add_attribute("height", height, 0)}${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} decoding="async"> 
</picture>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".list__item-link.svelte-1wm0b9s,.list__item-link.svelte-1wm0b9s:visited{display:grid;gap:8px;grid-template-columns:24px 1fr;text-decoration:none;color:#212121}.desktop-navmenu.svelte-1wm0b9s{position:relative;border-bottom:1px solid #d1d1d6;padding:4px}.drawer__title.svelte-1wm0b9s{margin:8px;line-height:1.2;font-size:20px;font-weight:500;;}.drawer__item.svelte-1wm0b9s{width:100%;background-color:transparent;border:none;display:grid;grid-template-columns:60px 1fr 24px;gap:8px;text-align:left;align-items:center;height:72px;padding:0;margin:0;cursor:pointer}.drawer__item--no-image.svelte-1wm0b9s{grid-template-columns:1fr 24px;height:40px;padding:0 8px}.link.svelte-1wm0b9s{display:inline-flex;justify-content:center}.link--button.svelte-1wm0b9s{-webkit-tap-highlight-color:transparent;font-size:0.875rem;font-weight:500;letter-spacing:0.04em;line-height:1.875rem;text-decoration:none;text-transform:initial;display:inline-flex;align-items:center;justify-content:center;position:relative;min-width:64px;height:36px;border:none;outline:0;overflow:hidden;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;appearance:none;gap:4px;transition:background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);background-color:#2a508f;color:#fff;box-shadow:inset 0 0 0 2px #1D3864;border-radius:18px;padding:0 16px}.subtext.svelte-1wm0b9s,.text.svelte-1wm0b9s{text-align:left;line-height:1.1}.subtext.svelte-1wm0b9s{font-size:12px}.text.svelte-1wm0b9s{font-weight:500;font-size:16px}.flex-center.svelte-1wm0b9s{display:flex;align-items:center;justify-content:center}.desktop-only.svelte-1wm0b9s{display:block}@media(max-width: 560px){.desktop-only.svelte-1wm0b9s,.desktop-navmenu.svelte-1wm0b9s{display:none}}",
  map: null
};
const transparentPixel = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABICAQAAAAARl4uAAAAOUlEQVR42u3NMQ0AAAwDoNW/6Zlo0gcMkBuJWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisbjpAfxoAEn3HhGlAAAAAElFTkSuQmCC";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let menu;
  let $drawerState, $$unsubscribe_drawerState;
  let { data } = $$props;
  let drawerBackText = "Main Menu";
  let title = "All Categories";
  const searchState = useComboBoxState();
  const drawerState = useDrawerState$1();
  $$unsubscribe_drawerState = subscribe(drawerState, (value) => $drawerState = value);
  const popoverState = useDrawerState();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  menu = data.categories;
  $$unsubscribe_drawerState();
  return `${validate_component(Drawer, "Drawer").$$render($$result, { state: drawerState }, {}, {
    back: () => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          slot: "back",
          variant: "underline",
          label: "Back to " + drawerBackText
        },
        {},
        {
          default: () => {
            return `${validate_component(Icon, "Icon").$$render($$result, {}, {}, {
              default: () => {
                return `<title>arrow-left</title>
      <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>`;
              }
            })}
    Back to ${escape(drawerBackText)}`;
          }
        }
      )}`;
    },
    default: () => {
      return `${$drawerState.showBack ? `<h2 class="drawer__title svelte-1wm0b9s">${escape(title)}</h2>
  ${validate_component(List, "List").$$render($$result, {}, {}, {
        default: () => {
          return `${each(menu, (item) => {
            return `${validate_component(ListItem, "ListItem").$$render($$result, {}, {}, {
              default: () => {
                return `${item.subnav.length ? `<button type="button" class="${[
                  "drawer__item svelte-1wm0b9s",
                  item.img == transparentPixel ? "drawer__item--no-image" : ""
                ].join(" ").trim()}">${item.img !== transparentPixel ? `${validate_component(LazyImage, "LazyImage").$$render(
                  $$result,
                  {
                    height: "72",
                    width: "58",
                    src: item.img,
                    alt: item.name
                  },
                  {},
                  {}
                )}` : ``}
          ${escape(item.name)}
          ${item.subnav.length ? `${validate_component(Icon, "Icon").$$render($$result, {}, {}, {
                  default: () => {
                    return `<title>chevron-right</title>
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
            `;
                  }
                })}` : ``}
        </button>` : `<div class="${[
                  "drawer__item svelte-1wm0b9s",
                  item.img == transparentPixel ? "drawer__item--no-image" : ""
                ].join(" ").trim()}">${item.img !== transparentPixel ? `${validate_component(LazyImage, "LazyImage").$$render(
                  $$result,
                  {
                    height: "72",
                    width: "58",
                    src: item.img,
                    alt: item.name
                  },
                  {},
                  {}
                )}` : ``}
            ${escape(item.name)}
            ${item.subnav.length ? `${validate_component(Icon, "Icon").$$render($$result, {}, {}, {
                  default: () => {
                    return `<title>chevron-right</title>
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
              `;
                  }
                })}` : ``}
          </div>`}
      `;
              }
            })}`;
          })}`;
        }
      })}` : `${validate_component(List, "List").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(ListItem, "ListItem").$$render($$result, { variant: "iconWithText" }, {}, {
            default: () => {
              return `${validate_component(Icon, "Icon").$$render($$result, {}, {}, {
                default: () => {
                  return `<title>dots-grid</title>
        <path d="M12 16C13.1 16 14 16.9 14 18S13.1 20 12 20 10 19.1 10 18 10.9 16 12 16M12 10C13.1 10 14 10.9 14 12S13.1 14 12 14 10 13.1 10 12 10.9 10 12 10M12 4C13.1 4 14 4.9 14 6S13.1 8 12 8 10 7.1 10 6 10.9 4 12 4M6 16C7.1 16 8 16.9 8 18S7.1 20 6 20 4 19.1 4 18 4.9 16 6 16M6 10C7.1 10 8 10.9 8 12S7.1 14 6 14 4 13.1 4 12 4.9 10 6 10M6 4C7.1 4 8 4.9 8 6S7.1 8 6 8 4 7.1 4 6 4.9 4 6 4M18 16C19.1 16 20 16.9 20 18S19.1 20 18 20 16 19.1 16 18 16.9 16 18 16M18 10C19.1 10 20 10.9 20 12S19.1 14 18 14 16 13.1 16 12 16.9 10 18 10M18 4C19.1 4 20 4.9 20 6S19.1 8 18 8 16 7.1 16 6 16.9 4 18 4Z"></path>`;
                }
              })}
      Categories
    `;
            }
          })}`;
        }
      })}
  ${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})}
  ${validate_component(List, "List").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(ListItem, "ListItem").$$render($$result, { variant: "iconWithText" }, {}, {
            default: () => {
              return `${validate_component(Icon, "Icon").$$render($$result, {}, {}, {
                default: () => {
                  return `<title>account-circle-outline</title>
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"></path>`;
                }
              })}
      My Account
    `;
            }
          })}
    ${validate_component(ListItem, "ListItem").$$render($$result, { variant: "iconWithText" }, {}, {
            default: () => {
              return `${validate_component(Icon, "Icon").$$render($$result, {}, {}, {
                default: () => {
                  return `<title>package-variant-closed</title>
        <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L10.11,5.22L16,8.61L17.96,7.5L12,4.15M6.04,7.5L12,10.85L13.96,9.75L8.08,6.35L6.04,7.5M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z"></path>`;
                }
              })}
      Order Status
    `;
            }
          })}`;
        }
      })}
  ${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})}
  ${validate_component(List, "List").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(ListItem, "ListItem").$$render($$result, { variant: "iconWithText" }, {}, {
            default: () => {
              return `${validate_component(Icon, "Icon").$$render($$result, {}, {}, {
                default: () => {
                  return `<title>comment-question</title>
        <path d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2M12.19,5.5C11.3,5.5 10.59,5.68 10.05,6.04C9.5,6.4 9.22,7 9.27,7.69H11.24C11.24,7.41 11.34,7.2 11.5,7.06C11.7,6.92 11.92,6.85 12.19,6.85C12.5,6.85 12.77,6.93 12.95,7.11C13.13,7.28 13.22,7.5 13.22,7.8C13.22,8.08 13.14,8.33 13,8.54C12.83,8.76 12.62,8.94 12.36,9.08C11.84,9.4 11.5,9.68 11.29,9.92C11.1,10.16 11,10.5 11,11H13C13,10.72 13.05,10.5 13.14,10.32C13.23,10.15 13.4,10 13.66,9.85C14.12,9.64 14.5,9.36 14.79,9C15.08,8.63 15.23,8.24 15.23,7.8C15.23,7.1 14.96,6.54 14.42,6.12C13.88,5.71 13.13,5.5 12.19,5.5M11,12V14H13V12H11Z"></path>`;
                }
              })}
      Live Chat
    `;
            }
          })} 
    ${validate_component(ListItem, "ListItem").$$render($$result, { variant: "iconWithText" }, {}, {
            default: () => {
              return `${validate_component(Icon, "Icon").$$render($$result, {}, {}, {
                default: () => {
                  return `<title>post-outline</title>
        <path d="M19 5V19H5V5H19M21 3H3V21H21V3M17 17H7V16H17V17M17 15H7V14H17V15M17 12H7V7H17V12Z"></path>`;
                }
              })}
      The Inspo Spot
    `;
            }
          })}
    ${validate_component(ListItem, "ListItem").$$render($$result, { variant: "iconWithText" }, {}, {
            default: () => {
              return `${validate_component(Icon, "Icon").$$render($$result, {}, {}, {
                default: () => {
                  return `<title>store-marker-outline</title>
        <path d="M20 6H4V4H20V6M14.3 12C13.5 12.96 13 14.18 13 15.5C13 16.64 13.43 17.86 14 19V20H4V14H3V12L4 7H20L20.7 10.5C20.04 10.18 19.32 10 18.56 10L18.36 9H5.64L5.04 12H14.3M12 14H6V18H12V14M22 15.5C22 18.1 18.5 22 18.5 22S15 18.1 15 15.5C15 13.6 16.6 12 18.5 12S22 13.6 22 15.5M19.7 15.6C19.7 15 19.1 14.4 18.5 14.4S17.3 14.9 17.3 15.6C17.3 16.2 17.8 16.8 18.5 16.8S19.8 16.2 19.7 15.6Z"></path>`;
                }
              })}
      Find Stores
    `;
            }
          })}
    ${validate_component(ListItem, "ListItem").$$render($$result, { variant: "iconWithText" }, {}, {
            default: () => {
              return `${validate_component(Icon, "Icon").$$render($$result, {}, {}, {
                default: () => {
                  return `<title>help-circle-outline</title>
        <path d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z"></path>`;
                }
              })}
      Help
    `;
            }
          })}`;
        }
      })}`}`;
    }
  })}
${validate_component(Popover, "Popover").$$render($$result, { state: popoverState }, {}, {
    default: () => {
      return `${!data.user ? `<a href="/login" class="link link--button svelte-1wm0b9s">Sign in or Create Account
    </a>
    ${validate_component(Separator, "Separator").$$render($$result, { gap: 8 }, {}, {})}` : ``}
  ${validate_component(List, "List").$$render($$result, {}, {}, {
        default: () => {
          return `${data.user ? `${validate_component(ListItem, "ListItem").$$render($$result, {}, {}, {
            default: () => {
              return `<a href="/account" class="list__item-link svelte-1wm0b9s">${validate_component(Icon, "Icon").$$render($$result, {}, {}, {
                default: () => {
                  return `<title>account-circle-outline</title>
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"></path>`;
                }
              })}
        My Account
        </a>`;
            }
          })}` : ``}
    ${validate_component(ListItem, "ListItem").$$render($$result, { variant: "iconWithText" }, {}, {
            default: () => {
              return `${validate_component(Icon, "Icon").$$render($$result, {}, {}, {
                default: () => {
                  return `<title>package-variant-closed</title>
        <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L10.11,5.22L16,8.61L17.96,7.5L12,4.15M6.04,7.5L12,10.85L13.96,9.75L8.08,6.35L6.04,7.5M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z"></path>`;
                }
              })}
      Order Status
    `;
            }
          })}`;
        }
      })}
  ${data.user ? `${validate_component(Separator, "Separator").$$render($$result, { gap: 8 }, {}, {})}
    <form method="post" action="/logout">${validate_component(Button, "Button").$$render(
        $$result,
        {
          fullwidth: true,
          rounded: true,
          variant: "primary",
          type: "submit"
        },
        {},
        {
          default: () => {
            return `Sign out`;
          }
        }
      )}</form>` : ``}`;
    }
  })}
${validate_component(Globalheader, "GlobalHeader").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(DrawerDisclosure, "DrawerDisclosure").$$render(
        $$result,
        {
          state: drawerState,
          style: "grid-area:menu;max-width:36px",
          label: "Main Menu"
        },
        {},
        {
          default: () => {
            return `${validate_component(Icon, "Icon").$$render($$result, {}, {}, {
              default: () => {
                return `<path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"></path>`;
              }
            })}`;
          }
        }
      )}
  <a href="/" title="Spener's Gift" class="link svelte-1wm0b9s" style="grid-area:logo">${validate_component(Icon, "Icon").$$render($$result, { variant: "logo", viewbox: "0 0 72 32" }, {}, {
        default: () => {
          return `<path d="M66 15.9c-.5-.7-2.4-2.8-.5-5.3.6-.8 1.4-1.5 1.8-.9.6 1-.4 4.7-.4 4.7l2 .7 2.2-6.2-2-.5-.2.5S68 7 66.6 7.5c-2.2.7-3.7 2.6-4 4.8-.1.5-.1.9-.1 1.4-.9-1.3-1.8-2.7-2.1-3.8-.4-1.7-.7-3.4-.7-5.1L57 5s-.4 1.6-.1 2.6.6 2.8.6 2.8h-1v1.5c-2.2-1.1-7.5-3.8-8.7-5.3 0 0-1.5.7-1.5 2 0 .8 1 1 1 1l.5 3.7s-.8 1.3-.8 1.8.2 1.2 1.1 1.2c0 0 .2 1.6.4 3.3l-1.4 1c.6.9 1.1 2.7-.7 4.4s-3.4.7-4.3-.8c-.9-1.5 1.5-9.7 1.5-9.7l.8 3.5 2.2-1.4s-.7-1.9-1-3c-.3-1.2-.3-5.1-.3-5.1L43 8s-.3 1.9-.7 3.3c-.3 1.1-1.4 4.1-2.1 6.4.3-5.9.7-13.5.9-15-.8-.1-2.6 1.2-3.7 1.7l.2 13.6c-1.5-4-2.9-7.6-4-10.7-1.1.1-1.8.4-2.3.8v4.1c-2.4-1.7-6.8-4.9-7.7-6.5 0 0-1.7.6-1.8 2-.1.8.9 1.2.9 1.2v4.2s-.4.5-.7 1c-.4-.4-.9-.7-1.4-1.1-1.8-1.4-3.1-2.4-3.8-3.3-1.2-1.5-2-3.3-2.4-5.4l-.4-.1c-.3.8-.6 1.3-1 1.8l.6-4.6-3.4-.3-.2 1S7.9-1 5.7.3C4.3 1.2.5 4 .6 10.2s4.9 9 6.5 9.6c1.6.6 6.6 1.7 7.1 3.4.6 1.6-1.5 5.2-3.7 4.8-.3-.1-2.1-.2-2.2-3.7l-2.6 2.1s.8 4.5 2.4 4.8c2 .4 6.1.7 9-6.3.3 2.1.6 4.6.8 5.7l.3.5c1.1-.5 2.7-1.8 2.7-1.8l-1-5.8-.3-1.8 2.4-2c.2-.1.4-.3.6-.5-.1 2.5-.1 6.1-.1 6.4 0 .5-.2 2.1 2.3 1.6 2.3-.4 2.5-1.6 5.6-2.2l.4-.6c-.2 1.9-.5 4.3-.5 4.6l.1.2c1.2 0 2.9-1.1 2.9-1.1S34 17 34 16.2c1.5 3.6 3 7.4 3.8 9.7.6-.1 1.4-.6 1.9-.9.4 1.2 1.3 2.2 2.9 2.6 3.4.9 5.5-1.1 6.5-2.7.2.5.6 1.2 2.2.6 2.1-.6 1.9-.6 3.9-1.3-.2 1.8-.5 3.2-.7 4.1l3-1.3s0-3 .2-4.1c.2-1.1.6-3 .6-3s5.5 7.6 6.5 11.1l3 .8S61.5 20.6 60.1 19c0 0 3 .2 3.9-1.5.1-.1.1-.3.1-.4.4.5.9.8 1.1.9.9.5 3.7 1.7 3.9 2.6.2 1-1.3 2.5-2.6 2.1-.2-.1-1.4-.2-1.1-2.1l-1.8.8s0 2.5.9 2.9c1.8.8 3.7 1.3 6.2-2.3 2.1-2.5-3.3-4.2-4.7-6.1zm-58.5-.5c-1.1-1.1-4.7-4.2-2.4-9.1.7-1.6 1.8-3.2 2.6-2.1 1.3 1.7.7 8.3.7 8.3l3.6.5.6-4.2.2.7c.4 1 .7 1.7 1 2.1.3 1.2.7 2.9 1.4 5.2.4 1.4.7 2.6 1 3.6-2.2-2-6.8-3.1-8.7-5zM19.2 20c0-.1-.3-1-.9-2.7-.5-1.7-.8-2.5-.8-2.6v-.1c2.2 1 3.6 2.1 4.5 3.2-1.4 1.3-2.3 2-2.8 2.2zm12.2-5.1c0 2-.1 3.6-.1 4.9 0 .2-.1 1-.2 2.3 0 .1 0 .3-.1.6-.8 0-2.1.2-3.8 1.1-2.8 1.5-2.6 0-2.6-.6s.2-5.5.2-5.5 3.3.9 4.4.7c0 0 1.4-.9 1.7-1.3 0 0-1.4-.6-3.2-1.2-1-.4-2-.8-2.9-1.3L25 11s4.3 3.4 6.3 3.7l.1-.1v.3zm24.3 6.8c-.6 0-1.4.3-2.4 1-2.5 1.7-2.4-.1-2.5-.6-.1-.6-.5-5-.5-5s2.6.8 3.6.5c0 0 1.2-1.3 1.4-1.7 0 0-2.2-.7-2.5-.7-1.7-.4-2.9-.8-2.9-.8l-.3-3.2s4.5 2.6 6.3 2.6l.4-.3c0 2.1-.3 5.3-.6 8.2zm6-4.5c-.4 1-2.8.3-2.8.3l.6-3.9s2.5 2.6 2.2 3.6z"></path>`;
        }
      })}</a>
  <div class="flex-center svelte-1wm0b9s" style="grid-area:search">${validate_component(Combobox, "Combobox").$$render(
        $$result,
        {
          placeholder: "Search",
          rounded: true,
          state: searchState,
          style: "max-width:640px"
        },
        {},
        {}
      )}</div>
  ${validate_component(Group, "Group").$$render($$result, { align: "end" }, {}, {
        default: () => {
          return `${validate_component(PopoverDisclosure, "PopoverDisclosure").$$render($$result, { state: popoverState }, {}, {
            default: () => {
              return `${validate_component(Icon, "Icon").$$render($$result, {}, {}, {
                default: () => {
                  return `<path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.893 7.893 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.928 7.928 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11Z"></path>`;
                }
              })}
      <div class="desktop-only svelte-1wm0b9s"><div class="subtext svelte-1wm0b9s">${escape(data.user ? `Hi, ${data.user.name.split(" ")[0]}` : "Sign in")}</div>
        <div class="text svelte-1wm0b9s">Account</div></div>`;
            }
          })}
    ${validate_component(Button, "Button").$$render($$result, { variant: "icon" }, {}, {
            default: () => {
              return `${validate_component(Icon, "Icon").$$render($$result, {}, {}, {
                default: () => {
                  return `<path d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2M1 2v2h2l3.6 7.59-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2Z"></path>`;
                }
              })}
      ${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
                default: () => {
                  return `0`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}
<div class="desktop-navmenu svelte-1wm0b9s">${validate_component(NavMenuBar, "NavMenuBar").$$render($$result, {}, {}, {
    default: () => {
      return `${each(data.categories, (item) => {
        return `${validate_component(NavMenuItem, "NavMenuItem").$$render($$result, {}, {}, {
          default: () => {
            return `${escape(item.name)}`;
          }
        })}`;
      })}`;
    }
  })}</div>
<main class="page-container">${slots.default ? slots.default({}) : ``}
</main>`;
});
export {
  Layout as default
};
