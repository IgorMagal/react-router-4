import React from "react";
import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation";

const RootPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
