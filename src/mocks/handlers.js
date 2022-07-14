import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "choclate", imagePath: "/image/choclate.pnd" },
        { name: "vanilla", imagePath: "/image/vaanilla.pnd" },
      ])
    );
  }),
];
