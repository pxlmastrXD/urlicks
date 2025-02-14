import * as fs from 'node:fs';
import { runbash } from "./minibash";

export class Database {
    constructor(public path: string) {
        this.path = path;
    }
    async set(key: string, value: string): Promise<string> {
        let keypath = "${this.path}/${key}";
        let command = "mkdir ${keypath} && touch ${keypath}/value && echo ${value} > ${keypath}/value";
        await runbash(command);
        return value;
    }
    async get(key: string): Promise<string> {
        let keypath = "${this.path}/${key}";
        let command = "cat ${keypath}/value"
        let result = await runbash(command);
        return result
    }
}