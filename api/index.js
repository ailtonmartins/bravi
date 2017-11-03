import express from 'express';
import bodyParser from  'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import firebaseAdmin from 'firebase-admin';

import routes from './routes';

const app = express();

let serviceAccount = require("./bravi-91b8f-firebase-adminsdk-phdo4-4922ff84f7.json");

app.firebase = firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: "https://bravi-91b8f.firebaseio.com"
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

routes(app);

app.listen(3000, () => {
    console.log('Express server has been started');
});