import { REDIS_URI } from '$env/static/private';
import { Redis } from "ioredis";

export const redis = new Redis(REDIS_URI);