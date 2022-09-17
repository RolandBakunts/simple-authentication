import express from 'express';
import bodyParser from 'body-parser';
import connect from './utils';
import routes from "./routes";
import { ErrorHandler } from './middleware/errorHanlder';

const app = express();

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);
app.use(ErrorHandler)

//port numbers
const port = process.env.PORT || 3456

//check connections
app.listen(port, async () => {
    console.log(`Application is listening ${port} port`)
    await connect();
})
