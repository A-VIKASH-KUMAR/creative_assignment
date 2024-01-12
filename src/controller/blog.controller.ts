import BlogPost from "../models/blog.model";

type ReqBlog = {
  body: any;
  params: any;
};

// controller to add blog post
export const addBlogPost = async (req: ReqBlog, res: any) => {
  const { title, content, author } = req.body;
  const blogpost = await BlogPost.findOne({ title, deleted:false });
  if (blogpost) {
    res.status(409).json({ error: "Blog post already exists", data: blogpost });
  }
  const createBlog = await BlogPost.create({ title, content, author });

  if (!createBlog) {
    res.status(500).json({ error: "could not create blogpost" });
  }
  await res.status(200).json({ data: createBlog });
};

// Controller to get all blog posts
export const getAllBlogPost = async (req: ReqBlog, res: any) => {
  const blogposts = await BlogPost.find({});
  if (!blogposts) {
    res.status(500).json({ error: "Error occoured to get all blog posts" });
  }
  await res.status(200).json({ data: blogposts });
};

// get blog post by id
export const getBlogPostById = async (req: ReqBlog, res: any) => {
  const postId = req.params.id;
  const blogpost = await BlogPost.findById(postId, {deleted:false});
  if (!blogpost) {
    res.status(404).json({ error: "could not find blog post" });
  }
  await res.status(200).json({ data: blogpost });
};

// update blog post by id
export const updateBlogPostById = async (req: ReqBlog, res: any) => {
  const postId = req.params.id;
  const  updateBody  = req.body;
  const blogpost = await BlogPost.findByIdAndUpdate(postId, updateBody, {new:true});
  if (!blogpost) {
    res.status(404).json({ error: "could not find blog post" });
  }
  await res.status(200).json({ data: blogpost });
};

// delete blog post by updating deleted boolean to true
export const deleteBlogPost = async (req: ReqBlog, res: any) => {
  const postId = req.params.id;
  const blogpost = await BlogPost.findByIdAndUpdate(postId, {deleted:true}, {new:true});
  if (!blogpost) {
    res.status(404).json({ error: "could not find blog post" });
  }
  await res.status(200).json({ data: blogpost });
};
