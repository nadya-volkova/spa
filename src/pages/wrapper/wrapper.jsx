import { Outlet } from "react-router-dom";
import "./wrapper.css";
import Header from "./components/header/header.jsx";

export default function Wrapper() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
