import Link from "next/link";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return (
    <div>
      <p>Users page</p>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {users.map((user) => (
          <div key={user.id}>
            <div className="card bg-primary text-primary-content w-96">
              <div className="card-body">
                <h2 className="card-title">{user.name}</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <Link href={`users/${user.id}`} className="btn">
                    Show Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
