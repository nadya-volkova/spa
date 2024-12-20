import Users, { loader as usersLoader } from "./pages/users/users.jsx";
import Albums, { loader as albumsLoader } from "./pages/albums/albums.jsx";
import Wrapper from "./pages/wrapper/wrapper.jsx";
import User, { loader as userLoader } from "./pages/user/user.jsx";
import NotFound from "./pages/notFound/notFound.jsx";
import Album, { loader as albumLoader } from "./pages/album/album.jsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Navigate to="/users" replace />,
      },
      {
        path: "/users",
        loader: usersLoader,
        element: <Users />,
      },
      {
        path: "/users/:userId",
        loader: userLoader,
        element: <User />,
        errorElement: <NotFound />,
      },
      {
        path: "/albums/:albumId",
        loader: albumLoader,
        element: <Album />,
        errorElement: <NotFound />,
      },
      {
        path: "/albums",
        loader: albumsLoader,
        element: <Albums />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
