# GPT-3-Encoder-Browser
基于gpt-3-encoder改造，在浏览器端就可以将用户提交给ChatGpt的字符串解析成对应token，方便计算发送的token数

## 安装

```
npm install gpt-3-encoder-browser
```

## 使用

```js
import { encode, decode } from 'gpt-3-encoder-browser'

const encoded = encode('hello,你好，🌈 ')
// 13
console.log(encode.length)

// hello,你好，🌈 
for(let token of encoded){
  console.log({token, string: decode([token])})
}

```