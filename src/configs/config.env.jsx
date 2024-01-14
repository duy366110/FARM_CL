import ENVIRONEMENT from "../environment";

const Config = {
    DEV: {
        URI: ENVIRONEMENT.URL.DEV,
        USER: "659c05fcb1376203088d50a5"
    },
    PRO: {
        URI: ENVIRONEMENT.URL.PRO,
        USER: "659f9f9f48ed72c55e842c85"
    }
}

let config = Config[ENVIRONEMENT.MODEL];

export default config;