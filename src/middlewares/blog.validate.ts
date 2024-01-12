export const validateCreate = async (req: any, res: any, next: any) => {
  const { title, content, author } = req.body;
  if (
    !title ||
    !content ||
    !author ||
    title === "" ||
    content === "" ||
    author === ""
  ) {
    await res.status(403).json({
      error: "please provide title, content and author of the blog post",
    });
  }
  return next();
};

export const validateGetBlogById = async (req: any, res: any, next: any) => {
  const blogId = req.params.id;
  if (!blogId) {
    await res
      .status(403)
      .json({ error: "please provide params id to get blog by id" });
  }
  return next();
};

export const validateUpdateBlogById = async (req: any, res: any, next: any) => {
  const blogId = req.params.id;
  if (!blogId) {
    await res
      .status(403)
      .json({ error: "please provide params id to update blog by id" });
  }
  return next();
};

export const validateDeleteBlogById = async (req: any, res: any, next: any) => {
  const blogId = req.params.id;
  if (!blogId) {
    await res
      .status(403)
      .json({ error: "please provide params id to delete blog by id" });
  }
  return next();
};
