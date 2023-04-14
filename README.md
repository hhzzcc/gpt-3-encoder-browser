# GPT-3-Encoder-Browser
基于gpt-3-encoder，改造成浏览器端可以使用的包

## 安装

```
npm install gpt-3-encoder-browser
```

## 使用

```js
import {encode, decode} from 'gpt-3-encoder-browser'

const str = 'This is an example sentence to try encoding out on!'
const encoded = encode(str)
console.log('Encoded this string looks like: ', encoded)

console.log('We can look at each token and what it represents')
for(let token of encoded){
  console.log({token, string: decode([token])})
}

const decoded = decode(encoded)
console.log('We can decode it back into:\n', decoded)

```


