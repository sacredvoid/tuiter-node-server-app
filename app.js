import express from 'express';
import HelloController from './controllers/hello-controller.js';
import UserController from './users/users-controller.js';
import tuitsController from './controllers/tuits/tuits-controller.js';
import cors from 'cors';
import session from 'express-session';
import AuthController from './users/auth-controller.js';

const app = express();

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false
};
app.use(session(sessionOptions));
app.use(express.json());
HelloController(app);
tuitsController(app);
UserController(app);
AuthController(app);
app.listen(4000);