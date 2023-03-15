import { c as create_ssr_component, b as compute_rest_props, a as add_attribute, h as escape, d as spread, g as escape_attribute_value, e as escape_object, v as validate_component } from "../../../chunks/index3.js";
import "../../../chunks/utils.js";
import { g as generateId, I as Icon, B as Button } from "../../../chunks/local-unique-id-generator.js";
const TextField_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.textfield.svelte-xxkotj{position:relative;display:grid;gap:8px;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"}.textfield__native-control.svelte-xxkotj{outline:none;color:#212121;font-size:16px;font-weight:400;line-height:1;letter-spacing:0.04em;width:100%;height:36px;padding:0 8px;border:1px solid;border-color:#949499;border-radius:4px;background:none;font-size:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none;transition:border 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);will-change:border, box-shadow;box-shadow:rgba(0, 0, 0, 0.05) 0px 1px 0px 0px\n	}.textfield__native-control.svelte-xxkotj:hover{border-color:#000;box-shadow:inset 0 0 0 1px #000}.textfield__native-control.svelte-xxkotj:focus-within{border-color:#3367d6 #285bc7 #2451b2;box-shadow:inset 0 0 0 1px #2451b2}.textfield__message.svelte-xxkotj,.textfield__label.svelte-xxkotj{font-size:.875rem;line-height:1}.textfield__message.svelte-xxkotj{color:#d72c0d;word-break:break-word;overflow-wrap:break-word}.textfield__message.svelte-xxkotj,.textfield__label.svelte-xxkotj:empty{display:none}',
  map: null
};
const prefix = "aria-uikit-textfield";
const TextField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let invalid;
  let $$restProps = compute_rest_props($$props, ["id", "label"]);
  const n = generateId();
  let { id = `${prefix}-${n}` } = $$props;
  let { label = "" } = $$props;
  const labelId = `${prefix}-label-${n}`;
  const labeledBy = $$restProps.hasOwnProperty("aria-label") ? null : labelId;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css$1);
  invalid = false;
  return `<div class="textfield svelte-xxkotj"><label class="textfield__label svelte-xxkotj"${add_attribute("for", id, 0)}${add_attribute("id", labelId, 0)}>${escape(label)}</label>
  <input${spread(
    [
      { "aria-errormessage": "" },
      {
        "aria-invalid": escape_attribute_value(invalid)
      },
      {
        "aria-labelledby": escape_attribute_value(label.length ? labeledBy : null)
      },
      { class: "textfield__native-control" },
      { id: escape_attribute_value(id) },
      escape_object($$restProps)
    ],
    { classes: "svelte-xxkotj" }
  )}>
  <div class="textfield__message svelte-xxkotj" aria-live="assertive" id="" role="alert"></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.page.svelte-tqlhiz{display:grid;gap:8px;padding:8px 0;justify-content:center;width:100%;max-width:1200px;margin:0 auto;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-weight:400;line-height:1.4em;font-size:16px;direction:ltr;background-color:#fff;unicode-bidi:embed;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;font-synthesis:none;font-feature-settings:"liga", "kern"}.page-header.svelte-tqlhiz{display:grid;gap:8px}.page-header > :first-child{justify-self:center}.page-header__title.svelte-tqlhiz{line-height:1.2;font-size:24px}form.svelte-tqlhiz{display:grid;max-width:480px;gap:8px}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-z9cm8u_START -->${$$result.title = `<title>Sign in - Spencer&#39;s</title>`, ""}<meta name="robots" content="noindex nofollow"><!-- HEAD_svelte-z9cm8u_END -->`, ""}

<div class="page svelte-tqlhiz"><header class="page-header svelte-tqlhiz">${validate_component(Icon, "Icon").$$render($$result, { variant: "logo", viewbox: "0 0 72 32" }, {}, {
    default: () => {
      return `<path d="M66 15.9c-.5-.7-2.4-2.8-.5-5.3.6-.8 1.4-1.5 1.8-.9.6 1-.4 4.7-.4 4.7l2 .7 2.2-6.2-2-.5-.2.5S68 7 66.6 7.5c-2.2.7-3.7 2.6-4 4.8-.1.5-.1.9-.1 1.4-.9-1.3-1.8-2.7-2.1-3.8-.4-1.7-.7-3.4-.7-5.1L57 5s-.4 1.6-.1 2.6.6 2.8.6 2.8h-1v1.5c-2.2-1.1-7.5-3.8-8.7-5.3 0 0-1.5.7-1.5 2 0 .8 1 1 1 1l.5 3.7s-.8 1.3-.8 1.8.2 1.2 1.1 1.2c0 0 .2 1.6.4 3.3l-1.4 1c.6.9 1.1 2.7-.7 4.4s-3.4.7-4.3-.8c-.9-1.5 1.5-9.7 1.5-9.7l.8 3.5 2.2-1.4s-.7-1.9-1-3c-.3-1.2-.3-5.1-.3-5.1L43 8s-.3 1.9-.7 3.3c-.3 1.1-1.4 4.1-2.1 6.4.3-5.9.7-13.5.9-15-.8-.1-2.6 1.2-3.7 1.7l.2 13.6c-1.5-4-2.9-7.6-4-10.7-1.1.1-1.8.4-2.3.8v4.1c-2.4-1.7-6.8-4.9-7.7-6.5 0 0-1.7.6-1.8 2-.1.8.9 1.2.9 1.2v4.2s-.4.5-.7 1c-.4-.4-.9-.7-1.4-1.1-1.8-1.4-3.1-2.4-3.8-3.3-1.2-1.5-2-3.3-2.4-5.4l-.4-.1c-.3.8-.6 1.3-1 1.8l.6-4.6-3.4-.3-.2 1S7.9-1 5.7.3C4.3 1.2.5 4 .6 10.2s4.9 9 6.5 9.6c1.6.6 6.6 1.7 7.1 3.4.6 1.6-1.5 5.2-3.7 4.8-.3-.1-2.1-.2-2.2-3.7l-2.6 2.1s.8 4.5 2.4 4.8c2 .4 6.1.7 9-6.3.3 2.1.6 4.6.8 5.7l.3.5c1.1-.5 2.7-1.8 2.7-1.8l-1-5.8-.3-1.8 2.4-2c.2-.1.4-.3.6-.5-.1 2.5-.1 6.1-.1 6.4 0 .5-.2 2.1 2.3 1.6 2.3-.4 2.5-1.6 5.6-2.2l.4-.6c-.2 1.9-.5 4.3-.5 4.6l.1.2c1.2 0 2.9-1.1 2.9-1.1S34 17 34 16.2c1.5 3.6 3 7.4 3.8 9.7.6-.1 1.4-.6 1.9-.9.4 1.2 1.3 2.2 2.9 2.6 3.4.9 5.5-1.1 6.5-2.7.2.5.6 1.2 2.2.6 2.1-.6 1.9-.6 3.9-1.3-.2 1.8-.5 3.2-.7 4.1l3-1.3s0-3 .2-4.1c.2-1.1.6-3 .6-3s5.5 7.6 6.5 11.1l3 .8S61.5 20.6 60.1 19c0 0 3 .2 3.9-1.5.1-.1.1-.3.1-.4.4.5.9.8 1.1.9.9.5 3.7 1.7 3.9 2.6.2 1-1.3 2.5-2.6 2.1-.2-.1-1.4-.2-1.1-2.1l-1.8.8s0 2.5.9 2.9c1.8.8 3.7 1.3 6.2-2.3 2.1-2.5-3.3-4.2-4.7-6.1zm-58.5-.5c-1.1-1.1-4.7-4.2-2.4-9.1.7-1.6 1.8-3.2 2.6-2.1 1.3 1.7.7 8.3.7 8.3l3.6.5.6-4.2.2.7c.4 1 .7 1.7 1 2.1.3 1.2.7 2.9 1.4 5.2.4 1.4.7 2.6 1 3.6-2.2-2-6.8-3.1-8.7-5zM19.2 20c0-.1-.3-1-.9-2.7-.5-1.7-.8-2.5-.8-2.6v-.1c2.2 1 3.6 2.1 4.5 3.2-1.4 1.3-2.3 2-2.8 2.2zm12.2-5.1c0 2-.1 3.6-.1 4.9 0 .2-.1 1-.2 2.3 0 .1 0 .3-.1.6-.8 0-2.1.2-3.8 1.1-2.8 1.5-2.6 0-2.6-.6s.2-5.5.2-5.5 3.3.9 4.4.7c0 0 1.4-.9 1.7-1.3 0 0-1.4-.6-3.2-1.2-1-.4-2-.8-2.9-1.3L25 11s4.3 3.4 6.3 3.7l.1-.1v.3zm24.3 6.8c-.6 0-1.4.3-2.4 1-2.5 1.7-2.4-.1-2.5-.6-.1-.6-.5-5-.5-5s2.6.8 3.6.5c0 0 1.2-1.3 1.4-1.7 0 0-2.2-.7-2.5-.7-1.7-.4-2.9-.8-2.9-.8l-.3-3.2s4.5 2.6 6.3 2.6l.4-.3c0 2.1-.3 5.3-.6 8.2zm6-4.5c-.4 1-2.8.3-2.8.3l.6-3.9s2.5 2.6 2.2 3.6z"></path>`;
    }
  })}
    <h1 class="page-header__title svelte-tqlhiz">Sign into your Spencer&#39;s account</h1></header>
  <section class="page-section"><form method="POST" class="svelte-tqlhiz">
      ${validate_component(TextField, "TextField").$$render(
    $$result,
    {
      label: "Username",
      type: "text",
      id: "username",
      name: "username",
      required: true
    },
    {},
    {}
  )}
      ${validate_component(TextField, "TextField").$$render(
    $$result,
    {
      label: "Password",
      type: "password",
      id: "password",
      name: "password",
      required: true
    },
    {},
    {}
  )}
      ${validate_component(Button, "Button").$$render(
    $$result,
    {
      rounded: true,
      variant: "primary",
      type: "submit"
    },
    {},
    {
      default: () => {
        return `Sign in
      `;
      }
    }
  )}</form></section>
  </div>`;
});
export {
  Page as default
};
