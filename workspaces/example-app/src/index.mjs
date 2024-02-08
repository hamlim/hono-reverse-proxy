import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

console.log(process.env);

app.get("/", async (c) => {
  let res = await fetch("http://www.wayfair.com", {
    method: "GET",
  });
  let t = await res.text();
  console.log(t);
  return c.text("Hello from the application!");
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
