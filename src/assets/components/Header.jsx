import styled from 'styled-components';
import logo from "../images/logo/logo.svg"
import { useNavigate } from 'react-router-dom';
import { useLoginStore } from '../../stores/zustandStrore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';


const SiteHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  border-bottom: 1px solid #eee;
  position: fixed;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;

  a {
    color: #000;
    text-decoration: none;
    font-weight: 500;
    position: relative;

    &:hover {
      color: #00C2A0;

      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background: #00C2A0;
      }
    }
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  .lang {
    font-size: 14px;
    cursor: pointer;
  }

  .login {
    font-size: 14px;
    cursor: pointer;
  }

  .apply-btn {
    background: #00C2A0;
    color: #fff;
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background: #009c84;
    }
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
    color: #00C2A0;
    cursor: pointer;
  }
`;


const Header = ()=>{
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
    return(
        <SiteHeader>
            <Inner>
                <Logo><img src={logo} alt='로고' /></Logo>
                <Nav>
                    <a href="#">전시회 소개</a>
                    
                </Nav>
                <Actions>
                {isLoggedIn ?(
                  <>
                    <Icon onClick={moveEditInfo} icon={faUser} />
                    <Icon icon={faCalendar} />
                  </>
                ):(
                  null
                )}                  
                {isLoggedIn ? (
                <>
                  <span onClick={handleLogOut}>로그아웃</span>                
                </>
                ) : (
                  <span onClick={moveLogIn}>로그인</span>
                )}

                </Actions>
            </Inner>
        </SiteHeader>
    )
}

export default Header;