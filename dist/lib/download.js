"use strict";
/**
 * Created by ChengZheLin on 2019/5/14.
 * Features: download
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("request"));
const fs_1 = __importDefault(require("fs"));
function default_1(obj) {
    return new Promise((resolve, reject) => {
        request_1.default.get(obj.url)
            .on('response', (response) => {
            console.log(response.statusCode);
            console.log(response.headers['content-type']);
        })
            .on('data', (data) => {
            console.log(data.length);
        })
            .on('error', (e) => {
            reject(e);
        })
            .pipe(fs_1.default.createWriteStream('doodle.zip'))
            .on('finish', () => {
            console.log('结束');
            resolve();
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=download.js.map