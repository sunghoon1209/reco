import styled from 'styled-components';
import logo from "../images/logo/logo.png"
import { useNavigate } from 'react-router-dom';
import { useLoginStore } from '../../stores/zustandStrore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
// import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';


const SiteHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
`;

const HeaderTop = styled.div`
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  display: flex;
  
  justify-content: space-between;
  align-items: center;
  /* padding: 0 40px; */
  border-bottom: 1px solid #eee;

`

const Logo = styled.div`
  width: 270px;
  font-size: 24px;
  font-weight: bold;
  color: #000;
  /* height: 100%; */
  display: flex;
  align-items: center;
  cursor: pointer;

  img{
    width: 100%;
    display: block;
  }
`;

const Nav = styled.nav`
  align-items: center; 
  display: flex;
  gap: 30px;
  height: 100%;
  position: relative;
  

  ul{
    display: flex;
    width: 600px;
    justify-content: space-between;
    cursor: pointer;
  }

  li {
    color: #000;
    text-decoration: none;
    font-weight: 500;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 0%;
        height: 2px;
        background: #2842FB;
        transition: 0.7s;
      }


    &:hover {
      color: #2842FB;

      &::after {
        content: '';
        
        bottom: -5px;
        width: 100%;        
        background: #2842FB;
      }
    }
  }
`;




const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  span{
    cursor: pointer;
  }

 



  
`;

const Inner = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #000;

  &:hover {
    color: #2842FB;
    cursor: pointer;
  }
`;


const Header = ()=>{
  const [isHover, setIsHover] = useState(false);
  const {isLoggedIn} = useLoginStore();

  const Navigate = useNavigate();

  const moveLogIn = ()=>{
    Navigate('/login');
  }
  const setIsLoggedIn = useLoginStore((state)=> state.setIsLoggedIn);

  const handleLogOut = ()=>{
    setIsLoggedIn(false);
    Navigate('/');
  }
  const moveEditInfo = ()=>{
    Navigate('/edit_info')
  }
  const moveHome = ()=>{
    Navigate('/')
  }
    return(
      <SiteHeader>
        <HeaderTop>
            <Inner>
                <Logo onClick={moveHome}><img src={logo} alt='로고' /></Logo>
                <Nav 
                  
                  onMouseOut={() => setIsHover(false)}
                >
                  <ul onMouseOver={() => setIsHover(true)}>
                    <li>COMPANY</li>
                    <li>EVENT</li>
                    <li>MARKETING</li>
                    <li>REQUEST</li>
                    {isLoggedIn ?(
                      <li onClick={moveEditInfo}>MYPAGE</li>
                    ):(
                  null
                )} 
                  </ul>

                    
                </Nav>
                <Actions>
                 
                {isLoggedIn ? (
                <>
                  <span onClick={handleLogOut}>로그아웃</span>                
                </>
                ) : (
                  <span onClick={moveLogIn}>로그인</span>
                )}

                </Actions>
            </Inner>
        </HeaderTop>
        
        </SiteHeader>
    )
}

export default Header;