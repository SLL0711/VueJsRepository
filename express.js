const express = require('express')
const path = require('path');
const app = express();

console.log(path.resolve(__dirname))
app.use('/static', express.static(path.join(path.resolve(__dirname), '/WebPack使用')));

app.listen('3000',()=>{
    console.log('server start...')
})