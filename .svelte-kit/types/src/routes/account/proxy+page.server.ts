// @ts-nocheck
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = async ({ locals }: Parameters<PageServerLoad>[0]) => {
  const { user } = await locals.validateUser();
  
  if (!user) {
    throw redirect(302, "/login");
  }

  return { user };
}