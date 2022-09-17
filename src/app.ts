import express from 'express';
import bodyParser from 'body-parser';
import connect from './utils';
import routes from "./routes";
import { ErrorHandler } from './middleware/errorHanlder';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);
app.use(ErrorHandler)

const port = process.env.PORT || 3456

app.listen(port, async () => {
    console.log(`Application is listening ${port} port`)
    await connect();
})
