import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Users from "./components/Users/Users.jsx";
import Users2 from "./components/Users2/Users2.jsx";
import { Suspense } from "react";
import UserDetails from "./components/UserDetails/UserDetails.jsx";
import Posts from "./components/Posts/Posts.jsx";
import PostDetails from "./components/PostDetails/PostDetails.jsx";

const usersPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

const useLoading = () => {
  return (
    <div className="flex items-center justify-center mx-auto">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        HydrateFallback: useLoading,
        Component: Users,
      },
      {
        path: "users2",
        element: (
          <Suspense fallback={<p className="text-8xl">Loading...</p>}>
            <Users2 usersPromise={usersPromise} />
          </Suspense>
        ),
      },
      {
        path: "/users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        HydrateFallback: useLoading,
        Component: UserDetails,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        HydrateFallback: useLoading,
        Component: Posts,
      },
      {
        path: "/posts/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        HydrateFallback: useLoading,
        Component: PostDetails,
      },
      {
        path: "*",
        element: <p>404 Page Not Found!</p>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
