const blogPost = new BlogPost('My Blog Post', 'This is a blog post', 'John Doe');

console.log(blogPost);

//constructor function
function BlogPost(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}
