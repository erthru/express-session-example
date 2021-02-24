import express from "express";
import { createServer } from "http";
import cors from "cors";
import routes from "./routes";
import session from "express-session";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(session({ secret: "superSecred", resave: false, saveUninitialized: true, cookie: { sameSite: false, secure: false, httpOnly: false } }));
app.use(routes);

const server = createServer(app);

server.listen(3000, () => {
    console.log("⚡️[SERVER]: RUNNING");
    console.log(`⚡[PORT]: ${3000}`);
    console.log("⚡️[MESSAGE]: エブリシングOK、頑張ってねー、エルトホルくん。ヽ(o＾▽＾o)ノ");
});
