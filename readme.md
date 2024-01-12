*Blog post api*

1 - npm start

2- add blog post

send a POST request to http://localhost:3001/api/blog with the following payload

{
	"title": "this is a example blog post 1",
    "content":"hi this is vikash writing an example post",
    "author":"vikash kumar"
}

3- send a GET request to /api/blog to get all blog posts

4- send a GET request to /api/blog/:id to get a blog post with a id

5- send a PUT request to  /api/blog/:id  to update a blog post with a id

6- send a delete request to  /api/blog/:id to delete a blog post with a id
