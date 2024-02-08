// // import { serve } from "@hono/node-server";
// import { Hono } from "hono";
// const app = new Hono();
// app.all((c) => {
//   console.log("Got a request?!?!?!?");
//   return c.text("Hello from the proxy!");
// });

// // serve({ fetch: app.fetch, port: 42069 });

// export default {
//   port: 42069,
//   fetch: app.fetch,
// };

// // export default function startProxy({ port }: { port: number }) {
// //   console.log("Starting proxy...");
// //   return serve({ fetch: app.fetch, port });
// // }
import * as mockttp from "mockttp";

let proxy = mockttp.getLocal();
proxy.start(42069);

proxy.addRequestRule({
  handler: {
    async handle(req, response) {
      console.log("Got a request?!?!?!?");
      response.end("hello from the proxy?!?!?!");
    },
    type: "simple",
    explain() {
      return "whattheheck";
    },
    serialize() {
      return "what the";
    },
    dispose() {
      return;
    },
  },
  matchers: [
    {
      type: "wildcard",
      explain() {
        return "hello?!?!?!";
      },
      serialize() {
        return "hello?!?!?!";
      },
      dispose() {
        return;
      },
      matches() {
        return true;
      },
    },
  ],
});

// Bun.serve({
//   port: 69420,
//   async fetch(request: Request): Promise<Response> {
//     console.log("Got a request?!?!?!?");
//     return new Response("Hello from the proxy!", {
//       headers: { "content-type": "text/plain" },
//     });
//   },
// });
