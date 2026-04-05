import { Suspense, useState } from "react";
import { Link } from "react-router";
import PostDetails2 from "../PostDetails2/PostDetails2";

const Post = ({ post }) => {
  const [showInfo, setShowInfo] = useState(false);
  const postPromise = fetch(
    `https://jsonplaceholder.typicode.com/posts/${post.id}`,
  ).then((res) => res.json());

  return (
    <div className="border-2 border-gray-300 rounded-2xl p-5 mt-5 capitalize">
      <p>{post.title}</p>
      <Link to={`/posts/${post.id}`} className="btn btn-primary mt-3">
        Show Details
      </Link>
      <button className="btn ml-5 mt-3" onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "Hide " : "Show "}info
      </button>
      {showInfo && (
        <Suspense fallback={<p>Loading...</p>}>
          <PostDetails2 key={post.id} postPromise={postPromise} />
        </Suspense>
      )}
    </div>
  );
};

export default Post;
