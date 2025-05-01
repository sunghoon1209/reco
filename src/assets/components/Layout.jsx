import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";


const Container = styled.main`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
    padding-top: 80px;
`

const Layout = () => {
    
    return(
    <>
      <Header/>
      <Container>
        <Outlet /> {/* 페이지별 컴포넌트 들어옴 */}
      </Container>
      
    </>
    )
};
  

export default Layout;