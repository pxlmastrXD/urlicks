import { runbash } from "./minibash.mjs";

class Database {
    constructor(path) {
        this.path = path;
    }
    set(key, value) {
        let path = "${this.path}/${key}";
        let cmd = "mkdir -p ${path} && touch ${path}/value && echo ${value} > value";
        runbash(cmd);
    }
    get(key) {
        let path = "${this.path}/${key}/value";
        let cmd = "cat ${path}";
        let result = runbash(cmd);
        return result
    }
}
export default Database;