import BlogPost  from "../models/blog.model";
type ReqBlog = {
    body:any;
    params:any;
};

export const addBlogPost = async (req:ReqBlog, res:any) => {
    // console.log("req", req);
    
    const { title, content, author} = req.body;
    const blogpost = await BlogPost.findOne({title});
    const createBlog = await BlogPost.create({title, content, author});
    console.log("blog", createBlog);
    
    if (!createBlog) {
        res.status(500).json({error:"could not create blogpost"});
    }
    await res.status(200).json({data:createBlog});
};

export const getAllBlogPost = (req:ReqBlog, res:object) => {
    
};

export const deleteBlogPost = (req:ReqBlog, res:object) => {
    
};