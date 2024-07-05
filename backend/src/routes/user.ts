import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { SigninInput, SignupInput } from "@neerajk11/blog-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const body = await c.req.json();
  const result = SignupInput.safeParse(body);
  if (!result.success) {
    return c.json({ message: "Invalid input" });
  }
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: c.env.DATABASE_URL,
      },
    },
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.create({
      data: {
        email: body.username,
        password: body.password,
      },
    });

    const token = await sign(
      {
        id: user.id,
        email: user.email,
      },
      c.env.JWT_SECRET
    );

    return c.json({ jwt: token });
  } catch (e) {
    return c.json({ message: "Error in creating user" });
  }
});

userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
  const result = SigninInput.safeParse(body);
  if (!result.success) {
    return c.json({ message: "Invalid input" });
  }
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: c.env.DATABASE_URL,
      },
    },
  }).$extends(withAccelerate());

  const user = await prisma.user.findUnique({
    where: {
      email: body.username,
    },
  });

  if (!user) {
    return c.json({ message: "User not found" });
  }

  const jwt = await sign(
    {
      id: user.id,
      email: user.email,
    },
    c.env.JWT_SECRET
  );

  return c.json({ jwt });
});
