"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_1 = require("../src/hello");
test('message should be OK', () => {
    expect(hello_1.message).toBe('Hello, World!');
});
