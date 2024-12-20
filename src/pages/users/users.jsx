import { Link, useLoaderData } from "react-router-dom";
import "./users.css";

export const loader = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (r) => r.json()
  );
  return { users };
};

export default function Users() {
  const { users } = useLoaderData();

  return (
    <div className="users">
      <h2>Users</h2>
      {users.map((user) => (
        <Link key={user.id} to={`/users/${user.id}`}>
          <div>{user.name}</div>
        </Link>
      ))}
    </div>
  );
}
