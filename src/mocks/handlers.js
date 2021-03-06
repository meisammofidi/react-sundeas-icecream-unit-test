import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "choclate", imagePath: "/image/choclate-scoop.pnd" },
        { name: "vanilla", imagePath: "/image/vanilla-scoop.pnd" },
      ])
    );
  }),

  rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Cherries", imagePath: "/image/cherries.pnd" },
        { name: "M&Ms", imagePath: "/image/m-and-ms.pnd" },
        { name: "Hot fudge", imagePath: "/image/hot-fudge.pnd" },
      ])
    );
  }),
];
