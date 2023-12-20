import React, { PropsWithChildren } from "react";
import { Page } from "@ui5/webcomponents-react";
import Header from "./components/header";

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Page header={<Header />} style={{ height: "100vh" }}>
      {children}
    </Page>
  );
};

export default Layout;
