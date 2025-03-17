import express, {Application} from 'express';
import sum from './sum';
const app: Application = express();

app.get('/', (req, res) => {
    const result = sum(1, 2);
    res.send('Hello World! ' + result);
});
app.listen(3000,()=>{console.log('Server is running on port 3000')});

// import * as express from "express";
// const app: express.Application = express();

//testmore..