import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

function PostLayout({ search, setSearch }) {
  return (
    <>
      <div className="app">
        <Header title={"React JS Blog"} />
        <Nav search={search} setSearch={setSearch} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default PostLayout;
