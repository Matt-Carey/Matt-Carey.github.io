import { IS_BROWSER, IS_NODE } from '../util/env.js';

class JSONFactory {
    static async get(url) {
        if(IS_BROWSER) {
            url = document.URL.substring(0, document.URL.lastIndexOf('/')) + url;
            const response = await fetch(url);
            return await response.json();
        }
        else if(IS_NODE) {
            const { fs, path } = global.nodeimports;
            const fullPath = path.join(global.gamePath + '/' + url);
            const file = fs.readFileSync(fullPath);
            return JSON.parse(file);
        }
    }
}

export { JSONFactory };
