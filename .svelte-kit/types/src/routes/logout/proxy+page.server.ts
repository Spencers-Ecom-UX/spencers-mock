// @ts-nocheck
import { type Actions, fail, redirect } from "@sveltejs/kit";
import { auth } from "$lib/server/lucia";

export const actions = {
  default: async ({ locals }: import('./$types').RequestEvent) => {
    const session = await locals.validate();
    if (!session) return fail(401);
    await auth.invalidateSession(session.sessionId);
    locals.setSession(null);
    throw redirect(302, "/login");
  }
};null as any as Actions;