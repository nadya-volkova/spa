import { Suspense } from "react";
import { useLoaderData, Link, Await } from "react-router-dom";
import "./user.css";

export const loader = async ({ params: { userId } }) => {
  const userResponse = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!userResponse.ok) {
    throw new Response("User not found", { status: 404 });
  }

  const user = await userResponse.json();

  const albumsPromise = fetch(
    ` https://jsonplaceholder.typicode.com/users/${userId}/albums`
  ).then((response) => {
    if (!response.ok) {
      throw new Response("Albums not found", { status: 404 });
    }
    return response.json();
  });

  return { user, albumsPromise };
};

export default function User() {
  const { user, albumsPromise } = useLoaderData();

  return (
    <div className="user">
      <h1>User Information</h1>
      <div>Name: {user.name}</div>
      <div>Username: {user.username}</div>
      <div>Email: {user.email}</div>
      <div>Phone: {user.phone}</div>
      <div>Website: {user.website}</div>

      <h2>Albums</h2>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Await resolve={albumsPromise}>
          {(albums) => (
            <ul>
              {albums.map((album) => (
                <li key={album.id}>
                  <Link to={`/albums/${album.id}`}>{album.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </Await>
      </Suspense>
    </div>
  );
}
