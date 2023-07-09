import { request } from "../lojinha/request";
import type { Collections } from "../lojinha/types";

export const collections: Collections = await request({ path: '/collections' })

export type { Collection, Collections } from '../lojinha/types'
