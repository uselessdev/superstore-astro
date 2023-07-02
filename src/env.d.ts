/// <reference types="astro/client-image" />

interface ImportMetaEnv {
  readonly LOJINHA_API_KEY: string;
  readonly LOJINHA_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
