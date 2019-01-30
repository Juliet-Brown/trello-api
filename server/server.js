"use strict";

const Hapi = require("hapi");
const nconf = require("nconf");
const request = require("request-promise");

const server = Hapi.server({
  port: 3002,
  host: "localhost"
});

server.route({
  method: "GET",
  path: "/",
  handler: (request, h) => {
    return "Hello, world!";
  }
});

const token =
  "fb5d6b8039e8dfa9c7f14466c4979307e8971681e94fe816cade95c7af78f016";
const key = "8f05e54f443c54afc22e78126fa04062";

server.route({
  method: "GET",
  path: "/members/v1/boards",
  handler: async (r, h) => {
    var options = {
      uri: "https://api.trello.com/1/members/julietbrown8/boards",
      qs: {
        token,
        key
      },
      headers: {
        "User-Agent": "Request-Promise"
      },
      json: true
    };

    const res = await request(options);

    return await JSON.stringify(res, undefined, 4);
  }
});

server.route({
  method: "GET",
  path: "/1/boards/id/actions",
  handler: async (r, h) => {
    var options = {
      uri: "https://api.trello.com//1/boards/SJ8Uf3Az/actions",
      qs: {
        token,
        key
      },
      headers: {
        "User-Agent": "Request-Promise"
      },
      json: true
    };

    const res = await request(options);

    return await JSON.stringify(res, undefined, 4);
  }
});

const init = async () => {
  await server.register({
    plugin: require("hapi-pino"),
    options: {
      prettyPrint: true,
      logEvents: ["response", "onPostStart"]
    }
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
