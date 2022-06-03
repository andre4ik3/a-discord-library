# Some random unnamed Discord library

Just a side project for now, although if everything goes to plan, it'll
become super cool.

Was sorta created out of frustration of lack of a legitimately good, friendly
Discord API wrapper.

No stability guaranteed until v1.0, beware!

## Branching

Before 1.0, everything will be done on the master branch because it's
quicker to iterate that way.

After 1.0:

- `master` branch will be default, production-ready code
- `develop` branch is where everything happens
- any changes must first be merged into develop, then to master
- each major release will branch out from master and receive separate patches

## Goals

- 100% TypeScript
- Modular, supports all kinds of bots and use cases
- Either little to no caching, or completely transparent cache
- Deno, Node, and Browser support all from 1 codebase
- Easy proxy server for browser support
- Runtime data type checking
- Bugfix outdated versions _to a reasonable degree_
- Easy to contribute, none of that husky/commitlint crap
- Sharding by default
- (investigate this, maybe it's useless) multithreading via optional web workers
- Backward-compatible as much as possible, when possible

- Provide multiple API layers:

  - "Low-level", allowing you to interface with raw WebSocket and HTTP.
  - "Mid-level", what you would call a library. Provides low-level wrappers.
  - "High-level", what you would call a framework.

- Avoid pitfalls of other libraries
  - Never ever hard crash on unknown data, unlike [discord.js][1]
  - Put in effort to support older runtime versions, unlike [discord.js][2]
  - Make intents easy, unlike [discord.js][3]
  - [Just][4] [don't][5] [be][6] [discord.js][7]
  - Better documentation than [Eris][8] and [Detritius][9]

[1]: https://github.com/discordjs/discord.js/issues/5526
[2]: https://github.com/discordjs/discord.js/issues/5119
[3]: https://github.com/discordjs/discord.js/issues/5516
[4]: https://v12.discordjs.guide/additional-info/changes-in-v12.html
[5]: https://github.com/discordjs/discord-api-types/pull/171
[6]: https://github.com/discordjs/discord.js/pull/6036
[7]: https://discordjs.guide/additional-info/changes-in-v13.html
[8]: https://abal.moe/Eris/docs/0.16.1
[9]: https://detritusjs.com
