// @ts-nocheck
import { auth } from "$lib/server/lucia"
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load = async ({ locals }: Parameters<PageServerLoad>[0]) => {
  const session = await locals.validate();
  if (session) {
    throw redirect(302, "/");
  }
}

export const actions = {
  default: async ({ request, locals }: import('./$types').RequestEvent) => {
    const { username, password } = Object.fromEntries(
      await request.formData()
    ) as Record<string, string>

    try {
      const key = await auth.validateKeyPassword("username", username,  password);
      const session = await auth.createSession(key.userId);
      locals.setSession(session);
      // await auth.createUser({
      //   key: {
      //     providerId: 'username',
      //     providerUserId: username,
      //     password
      //   },
      //   attributes: {
      //     name,
      //     username
      //   }
      // });
    } catch (err) {
      console.error(err);
      return fail(400, { message: "Could not login user"});
    }
    throw redirect(302, "/login");
  }
};;null as any as Actions;