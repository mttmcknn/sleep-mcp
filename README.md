# sleep-mcp

Give an LLM a real clock and a way to pause. `current_time` returns UTC and Unix timestamps. `sleep` takes milliseconds and reports the actual elapsed wait. Hosted on Cloudflare Workers Free; no client account or token needed.

**Quick start:** Add [https://sleep.mttmcknn.dev/mcp](https://sleep.mttmcknn.dev/mcp) as an HTTP MCP server. The original [workers.dev endpoint](https://sleep-mcp.mmckenna.workers.dev/mcp) remains supported.

Call `current_time` with `{}` or `sleep` with `{"ms":2000}`.

**Use cases**

- Pause two seconds for an explicitly timed end-to-end animation, then assert the UI result.
- Ground time calculations in current UTC time.
- Pace polling or retries with a measured pause.

**Development:** Shared source, setup instructions, and deployment configurations now live in [mttmcknn/tiny-tools](https://github.com/mttmcknn/tiny-tools). See the [Sleep README](https://github.com/mttmcknn/tiny-tools/tree/main/tools/sleep) for current usage and development commands. This repository remains available.

**Limits:** One-hour cap; client timeouts/disconnects apply; Free accounts share 100,000 requests/day and 10 ms CPU/request.

**Testing:** The shared repository passes 46 tests, typecheck, three Worker builds, and live legacy/modern MCP checks. Sleep retains the one-hour cap.

## Related endpoints

| Tool | Description | MCP URL |
| --- | --- | --- |
| [Sleep](https://github.com/mttmcknn/tiny-tools/tree/main/tools/sleep) | Observe UTC/epoch time and wait asynchronously. | [sleep.mttmcknn.dev/mcp](https://sleep.mttmcknn.dev/mcp) |
| [Random](https://github.com/mttmcknn/tiny-tools/tree/main/tools/random) | Generate reproducible seeded pseudorandom values. | [random.mttmcknn.dev/mcp](https://random.mttmcknn.dev/mcp) |
| [Tiny Tools](https://github.com/mttmcknn/tiny-tools#tiny-tools) | Use all three tools through one connection. | [tools.mttmcknn.dev/mcp](https://tools.mttmcknn.dev/mcp) |
