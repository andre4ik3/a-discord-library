# schemas package

[Zod][1] schemas and typings for Discord REST API, Gateway, and other things.
The schemas provide runtime type validation, whilst the typings are there for
type-definitions for Discord libraries.

The schemas are also tested to make sure they properly parse valid values and
throw on invalid ones.

## Contributing/Details

- All the different things you can think of are all Zod schemas!
- With the exception of number enums. Those are TS enums, Zod nativeEnums.
  - This is because (to my knowledge) Zod doesn't support number enums.
- For things like the Gateway, all the different ops are split into files.
  - They are all then merged back with a [Discriminated Union][2].

For adding a new type, here is a handy template:

```ts
import { z } from "../deps.ts";

/** Description of your type... */
export const YourThing = z.object({
  // Remember, types are for raw data from the API, which is snake_case.
  some_property: z.string(),
});

export type YourThing = z.infer<typeof YourThing>;
```

It really is that simple.

[1]: https://github.com/colinhacks/zod
[2]: https://zod.dev/?id=discriminated-unions
