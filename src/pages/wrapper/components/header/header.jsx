import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) => (isActive ? "link-active" : "")}
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/albums"
              className={({ isActive }) => (isActive ? "link-active" : "")}
            >
              Albums
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
