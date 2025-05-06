import styled from 'styled-components';
import naverLogo from "../assets/images/button/naverbg.png";
import { useNavigate } from 'react-router-dom';
import { useLoginStore } from '../stores/zustandStrore';

const LoginSection = styled.section`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const FormWrap = styled.form`
    display: flex;
    flex-direction: column;
    
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 30%;
`



const InputWrap = styled.div`
    position: relative;
    width: 320px;
    margin-bottom: 20px;
`;

const InputLabel = styled.label`
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    font-size: 14px;
    color: #bbb;
    pointer-events: none;
    transition: 0.3s ease;
`;

const InputDefault = styled.input`
    width: 100%;
    height: 44px;
    border: none;
    border-bottom: 1px solid #ddd;
    outline: none;
    font-size: 15px;
    padding-left: 10px;
    padding-top: 10px; /* label 겹치지 않게 */
    transition: border-bottom 0.7s;

    &:focus {
        border-bottom: 1px solid #000;
    }

    &:focus + ${InputLabel},
    &:not(:placeholder-shown) + ${InputLabel} {
        left: 0;
        top: 0;
        transform: translateY(-50%) scale(0.85);
        color: #444;
    }
    &:not(:placeholder-shown) {
        border-bottom : 1px solid #000;
    }
`;

const BtnJoin = styled.button`
    width: 320px;
    height: 48px;
    background: #fff;
    color: #000;
    cursor: pointer;
    font-size: 16px;
    border: 1px solid #000;
    transition: 0.7s;

    &:hover,&:focus{
        background: #000;
        color: #fff;
    }

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
    /* background: url(${naverLogo}) no-repeat center #03c75a; */
    /* background-position: left 30% center; */
    background: #03c75a;
    background-size: 60px;


`

const Title = styled.h2`
    font-size: 32px;
    font-weight: 600;
    text-align: center;
  
`
const FindPw = styled.p`
    text-align: right;
`


const Login = ()=>{
    const Navigate = useNavigate();

    const moveJoin = ()=>{
      Navigate('/join');
    }
    const setIsLoggedIn = useLoginStore((state) => state.setIsLoggedIn);

    const login = () =>{
        setIsLoggedIn(true);
        Navigate('/')
    }

    return(
        <>
           <LoginSection>
                <FormWrap>
                    <Title>로그인</Title>
                    <InputWrap>
                        <InputDefault placeholder=''/>
                        <InputLabel>이메일</InputLabel>
                    </InputWrap>
                    <InputWrap>
                        <InputDefault placeholder=''/>
                        <InputLabel>비밀번호</InputLabel>
                    </InputWrap>

                    <FindPw>패스워드 찾기 </FindPw>
                    <BtnJoin type='button' onClick={login}>로그인</BtnJoin>
                    <BtnJoin type='button' onClick={moveJoin}>회원가입</BtnJoin>
                    <BtnJoin type='button'>네이버로그인</BtnJoin>
                    
                </FormWrap>
            </LoginSection>
            
        </>
    )
}

export default Login;