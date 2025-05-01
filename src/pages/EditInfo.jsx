import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h2`
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    padding-top: 20px;
    margin-bottom: 20px;
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


const EditInfo = () =>{
    const [inputsFilled, setInputsFilled] = useState(Array(8).fill(false));
    const Navigate = useNavigate();
    const sendIt = ()=>{
        Navigate('/');
    }


    const [formData, setFormData] = useState({
       
        name: '',
        email: '',
        password: '',
        password_check: '',
        phone: '',
        affiliation: ''
      });

      const inputFields = [
        { id: 'user_email', name: 'user_email', type: 'text', label: '이메일' , value : "test@naver.com"},
        { id: 'user_password', name: 'user_password', type: 'password', label: '비밀번호',value : 123456 },        
        { id: 'user_password_check', name: 'user_password_check', type: 'password', label: '비밀번호 확인' ,value : 123456},
        { id: 'user_name', name: 'user_name', type: 'text', label: '성함' , value :'주성훈'},
        { id: 'user_affiliation', name: 'user_affiliation', type: 'text', label: '소속' , value : '시스포유'},
        { id: 'user_phone', name: 'user_phone', type: 'text', label: '휴대전화' , value : '01057939412'}
    ];
    return(
        <JoinSection>
            <Title>회원정보수정</Title>
            <FormWrap>
                
            {inputFields.map(field => (
                <InputWrap key={field.id}>
                    <InputDefault
                        id={field.id}
                        name={field.name}
                        placeholder=" "
                        type={field.type}
                        value ={field.value}
                    />
                    <InputLabel htmlFor={field.id}>{field.label}</InputLabel>
                </InputWrap>
            ))}
                <BtnJoin type='button' onClick={sendIt}>회원정보수정</BtnJoin>
                
            </FormWrap>
        </JoinSection>
    )
}

export default EditInfo;