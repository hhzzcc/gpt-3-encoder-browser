import { describe, it, expect } from 'vitest';
import { decode, encode } from '../core/encoder';

describe("encoder tests", () => {
    it.each([
        ["hello world", [31373, 995]],
        ["The quick brown fox jumps over the lazy dog", [464, 2068, 7586, 21831, 18045, 625, 262, 16931, 3290]],
    ])("should '%s' text", (text, tokens) => {
        expect(encode(text)).toEqual(tokens);
    });
});

describe('should decode text', () => {
    it.each([
        [[31373, 995], "hello world"],
        [[464, 2068, 7586, 21831, 18045, 625, 262, 16931, 3290], "The quick brown fox jumps over the lazy dog"],
    ])("should decode %s", (tokens, text) => {
        expect(decode(tokens)).toEqual(text);
    });
});
