import express from "express";
import { createServer } from "http";
import cors from "cors";
import routes from "./routes";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoDBStore from "connect-mongodb-session";

const app = express();
const PORT = 3003;
const DBStore = MongoDBStore(session);
const dbStore = new DBStore({ uri: "mongodb://localhost:27017/express-session-example", collection: "sessions" });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

app.use(
    session({
        secret: "superSecred",
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 3600000, secure: false, httpOnly: true, sameSite: "lax" },
        store: dbStore,
    })
);
app.use(routes);

const server = createServer(app);

server.listen(PORT, () => {
    console.log("⚡️[SERVER]: RUNNING");
    console.log(`⚡[PORT]: ${PORT}`);
    console.log("⚡️[MESSAGE]: エブリシングOK、頑張ってねー、エルトホルくん。ヽ(o＾▽＾o)ノ");
});
