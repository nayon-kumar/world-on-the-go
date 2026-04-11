import Posts from "@/components/Posts/Posts";
import { Suspense } from "react";

const PostsPage = () => {
  const postPormise = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json(),
  );
  return (
    <div>
      <p>Post page</p>
      <Suspense fallback={<p>Loading...</p>}>
        <Posts postPormise={postPormise} />
      </Suspense>
    </div>
  );
};

export default PostsPage;
