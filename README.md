# LINEBot-Bottender

### env
#### You must fill the following variables in your .env file:
- Heroku_backend
- LINE_ACCESS_TOKEN
- LINE_CHANNEL_SECRET

#### requirements package
```
npm i
```

### using bottender dev you need to change package.js: 
```
"scripts": {
    "dev": "bottender dev",
    "start": "bottender start",
}

```
### Start bottender dev
```
npm run dev -- --console
```