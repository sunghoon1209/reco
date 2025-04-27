import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.main`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
    padding-top: 80px;
`

const Layout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Container>
        <Outlet /> {/* 페이지별 컴포넌트 들어옴 */}
      </Container>
      
    </>
    )
};
  

export default Layout;