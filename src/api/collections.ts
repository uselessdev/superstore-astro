import { request } from "./request";
import type { Collections } from "./types";

export const collections: Collections = await request({ path: '/collections' })

export type { Collection, Collections } from './types'
