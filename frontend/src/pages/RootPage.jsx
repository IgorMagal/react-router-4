import React from "react";
import { Outlet, useNavigation } from "react-router";
import MainNavigation from "../components/MainNavigation";
import LoadingSpinner from "../components/LoadingSpinner";

const RootPage = () => {
  const nav = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>{nav.state === "loading" ? <LoadingSpinner /> : <Outlet />}</main>
    </>
  );
};

export default RootPage;
