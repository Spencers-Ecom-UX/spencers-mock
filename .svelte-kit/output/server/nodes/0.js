import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/entry/_layout.svelte.4e09dee4.js';
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/entry/_layout.svelte.4e09dee4.js","_app/immutable/chunks/index.75170905.js","_app/immutable/chunks/forms.4edef69c.js","_app/immutable/chunks/parse.d12b0d5b.js","_app/immutable/chunks/singletons.cf898da0.js"];
export const stylesheets = ["_app/immutable/assets/_layout.382b8c84.css","_app/immutable/assets/forms.d3a843b8.css"];
export const fonts = [];
