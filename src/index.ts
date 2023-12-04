import { OpenAPIHono } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";
import { cors } from "hono/cors";
import chatApp from "./apps/chat";
import imageApp from "./apps/image";

const app = new OpenAPIHono();

app.use("/*", cors());
app.get("/", (c) => c.text("Hello!"));
app.route("/api/v1/chat", chatApp);
app.route("/api/v1/image", imageApp);
app.get("/ui", swaggerUI({ url: "/docs" }));
app.doc("/docs", {
  info: {
    title: "An API",
    version: "v1",
  },
  openapi: "3.1.0",
});

export default app;
