import React from "react";
import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation";

const RootPage = () => {
  // const nav = useNavigation();
  return (
    <>
      <MainNavigation />
      {/* <main>{nav.state === "loading" ? <LoadingSpinner /> : <Outlet />}</main> */}
      <Outlet />
    </>
  );
};

export default RootPage;
