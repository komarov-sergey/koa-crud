import * as Router from "koa-router";

const router = new Router();

router.get("/tasks", async (ctx) => {
  ctx.body = "Returns all tasks";
});

router.get("/tasks/:id", async (ctx) => {
  ctx.body = "Returns tasks with id " + ctx.params.id;
});

router.post("/tasks", async (ctx) => {
  ctx.body = "Create a new task";
});

router.put("/tasks/:id", async (ctx) => {
  ctx.body = "Updates task with id " + ctx.params.id;
});

router.delete("/tasks/:id", async (ctx) => {
  ctx.body = "Deletes task with id " + ctx.params.id;
});

export default router;
