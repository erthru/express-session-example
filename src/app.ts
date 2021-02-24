import express from "express";
import { createServer } from "http";
import cors from "cors";
import routes from "./routes";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();
const PORT = 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

app.use(
    session({
        secret: "superSecred",
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 36000000, secure: false, httpOnly: true },
    })
);
app.use(routes);

const server = createServer(app);

server.listen(PORT, () => {
    console.log("⚡️[SERVER]: RUNNING");
    console.log(`⚡[PORT]: ${PORT}`);
    console.log("⚡️[MESSAGE]: エブリシングOK、頑張ってねー、エルトホルくん。ヽ(o＾▽＾o)ノ");
});
