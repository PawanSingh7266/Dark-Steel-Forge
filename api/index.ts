// Vercel Node.js serverless function that adapts the TanStack Start SSR
// handler (built to dist/server/server.js) to Vercel's Node req/res API.
import type { IncomingMessage, ServerResponse } from "node:http";
// @ts-expect-error - built artifact, exists after `vite build`
import server from "../dist/server/server.js";

function nodeReqToFetchRequest(req: IncomingMessage): Request {
  const host = req.headers.host ?? "localhost";
  const protocol = (req.headers["x-forwarded-proto"] as string) ?? "https";
  const url = new URL(req.url ?? "/", `${protocol}://${host}`);

  const headers = new Headers();
  for (const [k, v] of Object.entries(req.headers)) {
    if (Array.isArray(v)) v.forEach((vv) => headers.append(k, vv));
    else if (v != null) headers.set(k, String(v));
  }

  const method = req.method ?? "GET";
  const init: RequestInit = { method, headers };
  if (method !== "GET" && method !== "HEAD") {
    // @ts-expect-error - Node 18+ supports stream body
    init.body = req;
    // @ts-expect-error - required when body is a stream
    init.duplex = "half";
  }
  return new Request(url.toString(), init);
}

async function writeFetchResponse(res: ServerResponse, response: Response) {
  res.statusCode = response.status;
  response.headers.forEach((value, key) => res.setHeader(key, value));
  if (!response.body) {
    res.end();
    return;
  }
  const reader = response.body.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    res.write(value);
  }
  res.end();
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  try {
    const request = nodeReqToFetchRequest(req);
    const response: Response = await (server as { fetch: (r: Request) => Promise<Response> }).fetch(
      request,
    );
    await writeFetchResponse(res, response);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain");
    res.end("Internal Server Error");
  }
}
