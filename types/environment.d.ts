declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_API_DOMAIN: string;
        }
    }
}

export {};
