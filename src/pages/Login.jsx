import styled from 'styled-components';
import logo from  "../assets/images/logo/logo.svg";
import naverLogo from "../assets/images/button/naverbg.png";
import { useNavigate } from 'react-router-dom';

const LoginWrap = styled.section`
    width: 100%;
    display: flex;    
    height: calc(100vh - 80px);
    align-items: center;
    justify-content: space-between;
    
`
const LoginArea = styled.div`
    width: 50%;
    justify-content: center;
    
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const LogoArea = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const IdInput = styled.input`
    width: 100%;
    height: 52px;
    border: none;
    padding-left: 10px;
    outline: none;
    padding: 0 15px;
    border: 1px solid #ddd;
`
const PwInput = styled.input`
    width: 100%;
    height: 52px;
    border: none;
    padding-left: 10px;
    outline: none;
        padding: 0 15px;
    border: 1px solid #ddd;
`

const BtnArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const LoginBtn = styled.button`
    width: 100%;
    height: 52px;
    border: none;
    background: #000;
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
`
const JoinBtn = styled.button`
    width: 100%;
    height: 52px;
    border: 1px solid #000;
    background: #fff;
    color: #000;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;

`
const NaverBtn = styled.button`
    width: 100%;
    height: 52px;    
    /* background: #03c75a; */
    background: #000;
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    background: url(${naverLogo}) no-repeat center #03c75a;
    background-position: left 30% center;
    background-size: 60px;


`

const Title = styled.h2`
    font-size: 32px;
    font-weight: 600;
    text-align: center;
`


const Login = ()=>{
    const Navigate = useNavigate();

    const moveJoin = ()=>{
      Navigate('/join');
    }
    return(
        <>
            <LoginWrap>
                <LoginArea>
                    <Title>로그인</Title>
                    <IdInput type='text' placeholder='ID'></IdInput>
                    <PwInput type='password' placeholder='password' ></PwInput>
                    <BtnArea>
                        <LoginBtn>로그인</LoginBtn>
                        <JoinBtn onClick={moveJoin}>회원가입</JoinBtn>
                        <NaverBtn>네이버 로그인</NaverBtn>
                    </BtnArea>
                </LoginArea>
                <LogoArea>
                    <img src={logo}></img>
                </LogoArea>
            </LoginWrap>
        </>
    )
}

export default Login;