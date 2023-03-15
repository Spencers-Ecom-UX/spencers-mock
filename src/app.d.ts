import { PrismaClient } from '@prisma/client';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	interface Window {
		VisualViewport: object
	}

	namespace App {
		// interface Error {}
		interface Locals {
			validate: import("@lucia-auth/sveltekit").Validate
			validateUser: import("@lucia-auth/sveltekit").ValidateUser
			setSession: import("@lucia-auth/sveltekit").SetSession
		}
		
		// interface PageData {}
		interface Platform {
			env: {
				COUNTER: DurableObjectNamspace;
			};
			context: {
				waitUntil(promise: Promise<any>): void;
			};
			caches: CacheStorage & { default: Cache }
		}
	}

	// eslint-disable-next-line no-var
	var prisma: PrismaClient

  declare namespace Lucia {
    type Auth = import("$lib/server/lucia").Auth;
    type UserAttributes = {
      username: string
      name: string
    }
  }

}

export {};
