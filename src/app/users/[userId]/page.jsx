import React from "react";

export async function generateMetadata({ params }) {
  const { userId } = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  const user = await res.json();
  return {
    title: user.name,
    description: `Details about ${user.name}`,
  };
}

const UserDetailsPage = async ({ params }) => {
  const { userId } = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  const user = await res.json();
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </div>
  );
};

export default UserDetailsPage;
