# sleep-mcp

Give an LLM a real clock and a way to pause. `current_time` returns UTC and Unix timestamps. `sleep` takes milliseconds and reports the actual elapsed wait. Hosted on Cloudflare Workers Free; no client account or token needed.

**Quick start:** Add this URL as an HTTP MCP server:

https://sleep-mcp.mmckenna.workers.dev/mcp

Call `current_time` with `{}` or `sleep` with `{"ms":2000}`.

**Use cases**

- Pause two seconds for an explicitly timed end-to-end animation, then assert the UI result.
- Ground time calculations in current UTC time.
- Pace polling or retries with a measured pause.

**Setup:** Node 24.12+, `npm ci`, then `npm run dev` locally or `npm run deploy` after Cloudflare login and hostname configuration.

**Limits:** One-hour cap; client timeouts/disconnects apply; Free accounts share 100,000 requests/day and 10 ms CPU/request.

**Testing:** `npm test`, `npm run typecheck`, `npm run build`; 19 tests and live timing checks passed.
