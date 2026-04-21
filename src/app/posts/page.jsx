const PostPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts!");
  }
  const posts = await res.json();
  console.log(posts);
  return (
    <div>
      <p>Total posts: {posts.length}</p>
    </div>
  );
};

export default PostPage;
