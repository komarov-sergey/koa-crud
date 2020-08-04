import * as Koa from "koa";
import * as Router from "koa-router";
import logger = require("koa-logger");
import bodyparser = require("koa-bodyparser");

import taskRouter from "./routes/tasks";

const app = new Koa();
const router = new Router();

app.use(logger());
app.use(bodyparser());

router.get("/", async (ctx) => {
  ctx.body = "Welcome to my Koa App";
});

app.use(router.routes());
app.use(taskRouter.routes());

app.listen(3005);

console.log(`My Koa server is up and listening on port 3005`);
