// This is not a JSON file because such files cannot be imported as modules when
// running under `deno test`. However, it should still be treated as a JSON file
// in all other aspects. Most, if not all, of these objects are from the
// official Discord documentation - https://discord.dev/

export const activity = {
  simple: {
    details: "24H RL Stream for Charity",
    state: "Rocket League",
    name: "Twitch",
    type: 1,
    url: "https://www.twitch.tv/discord",
    created_at: 1234567890,
  },
  rich: {
    name: "Rocket League",
    type: 0,
    application_id: "379286085710381999",
    state: "In a Match",
    details: "Ranked Duos: 2-1",
    created_at: 1234567890,
    timestamps: {
      start: 15112000660000,
    },
    party: {
      id: "9dd6594e-81b3-49f6-a6b5-a679e6a060d3",
      size: [2, 2],
    },
    assets: {
      large_image: "351371005538729000",
      large_text: "DFH Stadium",
      small_image: "351371005538729111",
      small_text: "Silver III",
    },
    secrets: {
      join: "025ed05c71f639de8bfaa0d679d7c94b2fdce12f",
      spectate: "e7eb30d2ee025ed05c71ea495f770b76454ee4e0",
      match: "4b2fdce12f639de8bfa7e3591b71a0d679d7c93f",
    },
  },
  invalid: [],
} as const;

export const application = {
  data: {
    bot_public: true,
    bot_require_code_grant: false,
    cover_image: "31deabb7e45b6c8ecfef77d2f99c81a5",
    description: "Test",
    guild_id: "290926798626357260",
    icon: null,
    id: "172150183260323840",
    name: "Baba O-Riley",
    owner: {
      avatar: null,
      discriminator: "1738",
      flags: 1024,
      id: "172150183260323840",
      username: "i own a bot",
    },
    primary_sku_id: "172150183260323840",
    slug: "test",
    summary: "",
    team: {
      icon: "dd9b7dcfdf5351b9c3de0fe167bacbe1",
      id: "531992624043786253",
      members: [
        {
          membership_state: 2,
          permissions: ["*"],
          team_id: "531992624043786253",
          user: {
            avatar: "d9e261cd35999608eb7e3de1fae3688b",
            discriminator: "0001",
            id: "511972282709709995",
            username: "Mr Owner",
          },
        },
      ],
      name: "Epic Team",
      owner_user_id: "511972282709709995",
    },
    verify_key:
      "1e0a356058d627ca38a5c8c9648818061d49e49bd9da9e3ab17d98ad4d6bg2u8",
  },
  invalid: [],
} as const;

export const emoji = {
  standard: {
    id: null,
    name: "🔥",
  },
  custom: {
    id: "41771983429993937",
    name: null,
  },
  animated: {
    id: "41771983429993937",
    name: "LUL",
    animated: true,
  },
  full: {
    id: "41771983429993937",
    name: "LUL",
    roles: ["41771983429993000", "41771983429993111"],
    user: {
      username: "Luigi",
      discriminator: "0002",
      id: "96008815106887111",
      avatar: "5500909a3274e1812beb4e8de6631111",
      public_flags: 131328,
    },
    require_colons: true,
    managed: false,
    animated: false,
  },
} as const;

export const user = {
  data: {
    id: "80351110224678912",
    username: "Nelly",
    discriminator: "1337",
    avatar: "8342729096ea3675442027381ff50dfe",
    verified: true,
    email: "nelly@discord.com",
    flags: 64,
    banner: "06c16474723fe537c283b8efa61a30c8",
    accent_color: 16711680,
    premium_type: 1,
    public_flags: 64,
  },
  invalid: [{ id: "80351110224678912" }, { username: "Nelly" }],
} as const;
