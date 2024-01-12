# Blog Post API

## Overview

This Node.js API provides functionality for managing blog posts. Follow the instructions below to set up the API, add, retrieve, update, and delete blog posts.

## Installation

1. Run the following command to start the API:

   bash
   npm start
   

   The API will be available at http://localhost:3001.

## Adding a Blog Post

To add a new blog post, send a POST request to http://localhost:3001/api/blog with the following payload:

json
{
  "title": "This is an example blog post",
  "content": "Hi, this is [Your Name] writing an example post",
  "author": "[Your Name]"
}


## Retrieving Blog Posts

1. To get all blog posts, send a GET request to http://localhost:3001/api/blog.

2. To get a specific blog post by ID, send a GET request to http://localhost:3001/api/blog/:id.

## Updating a Blog Post

To update a blog post, send a PUT request to http://localhost:3001/api/blog/:id with the updated payload.

## Deleting a Blog Post

To delete a blog post, send a DELETE request to http://localhost:3001/api/blog/:id.
