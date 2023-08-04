import express from 'express';
import HelloController from './controllers/hello-controller.js';
import UserController from './users/users-controller.js';
import tuitsController from './controllers/tuits/tuits-controller.js';
import cors from 'cors';
import session from 'express-session';
import AuthController from './users/auth-controller.js';
import "dotenv/config";

const app = express();

app.use(cors({
    credentials: true,
    origin: [process.env.FRONTEND_URL, process.env.PROD_URL]
}));
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));
app.use(express.json());
HelloController(app);
tuitsController(app);
UserController(app);
AuthController(app);
app.listen(4000);