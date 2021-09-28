const { readFileSync } = require("fs");

require("./src/parsers/SendChannelMessage")(readFileSync("./test/index.bot", { "encoding": "utf-8" }));