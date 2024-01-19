import ENVIRONEMENT from "../environment";

const Config = {
    DEV: {
        URI: ENVIRONEMENT.URL.DEV,
        USER: "65aa1b91b5235ecc45117612"
    },
    PRO: {
        URI: ENVIRONEMENT.URL.PRO,
        USER: "659f9f9f48ed72c55e842c85"
    }
}

let config = Config[ENVIRONEMENT.MODEL];

export default config;