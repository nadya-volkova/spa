import { Link, useLoaderData } from "react-router-dom";
import "./albums.css";

export const loader = async () => {
  const albums = await fetch(
    "https://jsonplaceholder.typicode.com/albums"
  ).then((r) => r.json());
  return { albums };
};

export default function Albums() {
  const { albums } = useLoaderData();

  return (
    <div className="albums">
      <h2>Albums</h2>
      {albums.map((album) => (
        <Link key={album.id} to={`/albums/${album.id}`}>
          <div>{album.title}</div>
        </Link>
      ))}
    </div>
  );
}
