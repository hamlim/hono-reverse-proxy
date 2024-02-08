console.log("Testing setup.cjs");

const globalAgent = require("global-agent");
const Undici = require("undici");
const ProxyAgent = Undici.ProxyAgent;
const setGlobalDispatcher = Undici.setGlobalDispatcher;

globalAgent.bootstrap();
// Monkey patch `fetch`
// https://github.com/gajus/global-agent/issues/52#issuecomment-1134525621
setGlobalDispatcher(new ProxyAgent(process.env.GLOBAL_AGENT_HTTP_PROXY));
