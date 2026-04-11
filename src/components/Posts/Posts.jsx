import { use } from "react";

const Posts = ({ postPormise }) => {
  const posts = use(postPormise);
  console.log(posts);
  return (
    <div>
      <p>Posts</p>
    </div>
  );
};

export default Posts;
