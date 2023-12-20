import React from "react";
import { Bar, Title } from "@ui5/webcomponents-react";

const Header: React.FC = () => {
  return (
    <Bar style={{ height: 80 }}>
      <Title style={{ fontSize: 48, color: "darkBlue" }}>
        OMDB API Services
      </Title>
    </Bar>
  );
};

export default Header;
