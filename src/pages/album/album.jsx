import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";
import "./album.css";

export const loader = async ({ params }) => {
  const albumResponse = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${params.albumId}`
  );

  if (!albumResponse.ok) {
    throw new Response("Album not found", { status: 404 });
  }

  const album = await albumResponse.json();

  const userResponse = await fetch(
    `https://jsonplaceholder.typicode.com/users/${album.userId}`
  );
  const user = await userResponse.json();

  const photosPromise = fetch(
    `https://jsonplaceholder.typicode.com/albums/${params.albumId}/photos`
  ).then((response) => response.json());

  return { album, user, photosPromise };
};

export default function Album() {
  const { album, user, photosPromise } = useLoaderData();

  return (
    <div className="container">
      <h2>{album.title}</h2>
      <h3>
        Created by:
        <Link to={`/users/${user.id}`}>{user.name}</Link>
      </h3>
      <div className="photos">
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Await resolve={photosPromise}>
            {(photos) =>
              photos.map((photo) => (
                <img
                  key={photo.id}
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                />
              ))
            }
          </Await>
        </Suspense>
      </div>
    </div>
  );
}
