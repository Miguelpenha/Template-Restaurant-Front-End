declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_DOMAIN: string
        NEXT_PUBLIC_API_URL: string
        NEXT_PUBLIC_API_KEY: string
        NEXT_PUBLIC_NAME_COOKIE_LOGIN: string
      }
    }
}

export {}