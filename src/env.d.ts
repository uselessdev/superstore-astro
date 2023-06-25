/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly LOJINHA_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
