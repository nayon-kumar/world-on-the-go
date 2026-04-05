import React, { use } from "react";

const PostDetails2 = ({ postPromise }) => {
  const post = use(postPromise);
  return (
    <div className="mt-4">
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails2;
