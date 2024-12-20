import { Link } from "react-router-dom";
import "./notFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404</h2>
      <h1>Page not found</h1>
      <Link to="/users">Go to page Users</Link>
    </div>
  );
};

export default NotFound;
