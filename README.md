# GPT-3-Encoder-Browser

🍎 基于gpt-3-encoder改造，在浏览器端就可以将用户提交给ChatGpt的字符串解析成token。

## 安装

```
npm install gpt-3-encoder-browser
```

## 字符转token

```js
import { encode } from 'gpt-3-encoder-browser';
const tokens = encode('hello,你好，🌈 ');
// 13
console.log(tokens.length);

```

## token转字符

```js
import { encode } from 'gpt-3-encoder-browser';
let str = '';
for (let token of tokens) {
    str += decode([token]);
}
// hello,你好，🌈 
console.log(str);

```
