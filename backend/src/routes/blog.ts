import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import { CreateBlogInput, UpdateBlogInput } from "@neerajk11/blog-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use(async (c, next) => {
  const jwt = c.req.header("Authorization") || "";
  if (!jwt) {
    return c.json({ msg: "Unauthorized" });
  }
  const token = jwt.split(" ")[1];
  const payload = await verify(token, c.env.JWT_SECRET);
  if (!payload) {
    c.status(401);
    return c.json({ error: "Unauthorized" });
  }

  c.set("userId", payload.id as string);

  await next();
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: c.env.DATABASE_URL,
      },
    },
  }).$extends(withAccelerate());

  try {
    const blogs = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        author :{
          select:{
            name : true
          }
        }
    }
  });
    return c.json({ blogs });
  } catch (err) {
    return c.json({ msg: "Try after some time" });
  }
});

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const result = CreateBlogInput.safeParse(body);
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

  const userId = c.get("userId");

  const respone = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: userId,
    },
  });
  console.log(respone);
  return c.json({ message: "Blog created successfully", blogId: respone.id });
});

blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const result = UpdateBlogInput.safeParse(body);
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

  const blogId = body.blogId;

  const userId = c.get("userId");

  try {
    const blog = await prisma.post.findUnique({
      where: {
        id: blogId,
      },
    });

    if (blog?.authorId != userId) {
      return c.json({ msg: "You are not the father...", author: false });
    }

    const updatedBlog = await prisma.post.update({
      where: {
        id: blogId,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return c.json({ updatedBlog, author: true });
  } catch (err) {
    return c.json({ msg: "Error while fetching blog post " });
  }
});

blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");

  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: c.env.DATABASE_URL,
      },
    },
  }).$extends(withAccelerate());
  try {
    const blog = await prisma.post.findFirst({
      where: {
        id: id,
      },
      select :{
        id : true,
        title : true,
        content : true,
        author:{
          select:{
            name :true
          }
        }
      }
    });

    console.log(blog);
    return c.json({ message: "Blog fetched successfully", blog });
  } catch (e) {
    return c.json({ msg: "Error while fetching blog post" });
  }
});

blogRouter.delete("/:id", async (c) => {
  const id = c.req.param("id");
  const userId = c.get("userId");

  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: c.env.DATABASE_URL,
      },
    },
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });

    if (blog?.authorId != userId) {
      return c.json({ msg: "You are not the father..." });
    }
    await prisma.post.delete({
      where: {
        id,
      },
    });

    return c.json({ msg: "Blog deleted successfully" });
  } catch (err) {
    return c.json({ msg: "Try after some time" });
  }
});
