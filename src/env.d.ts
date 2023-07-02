/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly LOJINHA_API_KEY: string;
  readonly LOJINHA_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
