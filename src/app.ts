import express from "express";
import { createServer } from "http";
import routes from "./routes";
import cookieParser from "cookie-parser";
import session from "express-session";
import cors from "cors";

const app = express();
const PORT = 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://127.0.0.1:3003", credentials: true }));
app.use(cookieParser());
app.use(
    session({
        secret: "superSecred",
        resave: true,
        saveUninitialized: false,
        cookie: { secure: false, httpOnly: false },
    })
);
app.use(routes);

const server = createServer(app);

server.listen(PORT, () => {
    console.log("⚡️[SERVER]: RUNNING");
    console.log(`⚡[PORT]: ${PORT}`);
    console.log("⚡️[MESSAGE]: エブリシングOK、頑張ってねー、エルトホルくん。ヽ(o＾▽＾o)ノ");
});
