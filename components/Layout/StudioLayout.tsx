import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";


import { StyledLayout } from "./layout.elements";


const StudioLayout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </StyledLayout>
  );
};

export default StudioLayout;
