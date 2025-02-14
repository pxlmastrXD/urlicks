import { runbash } from "./minibash.mjs";

class Database {
    constructor(path) {
        this.path = path;
    }
    async set(key, value) {
        let path = "${this.path}/${key}";
        let cmd = "mkdir -p ${path} && touch ${path}/value && echo ${value} > value";
        await runbash(cmd);
    }
    async get(key) {
        let path = "${this.path}/${key}/value";
        let cmd = "cat ${path}";
        let result = await runbash(cmd);
        return result
    }
}
export default Database;