*Blog post api*

1 - npm start

1- add blog post

send a POST request to http://localhost:3001/api/blog with the following payload

{
	"title": "this is a example blog post 1",
    "content":"hi this is vikash writing an example post",
    "author":"vikash kumar"
}

send a GET request to /api/blog to get all blog posts

send a GET request to /api/blog/:id to get a blog post with a id

send a PUT request to  /api/blog/:id  to update a blog post with a id

send a delete request to  /api/blog/:id to delete a blog post with a id
