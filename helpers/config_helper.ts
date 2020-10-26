import * as json from "../configs/config.json"

class ConfigHelper implements IConfigHelper{

    get url() : string {
        return json.url;
    }

    get port() : number {
        return json.port;
    }


    get ssl_key_path() : string {
        return json.ssl_key_path;
    }

    get ssl_cert_path() : string {
        return json.ssl_cert_path;
    }

}

export interface IConfigHelper {
    url : string,
    port: number,
    ssl_key_path: string,
    ssl_cert_path: string,
}

export default new ConfigHelper();
