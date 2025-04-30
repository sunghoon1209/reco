import styled from 'styled-components';
import { useState } from 'react';


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
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 30%;
`



const InputDefault = styled.input`
    width: 100%;
    height: 36px;
    border: none;
    border-bottom: 1px solid #ddd;
    outline: none;
    padding-left: 10px;
    transition: 0.7s;
    position: relative;



    &:focus{
        border-bottom: 1px solid #000;
    }
    `

const BtnJoin = styled.button`
    width: 100%;
    height: 36px;
    background: #000;
    color: #fff;
    cursor: pointer;
    font-size: 16px;

`


const Join = ()=>{
    const [inputsFilled, setInputsFilled] = useState(Array(8).fill(false));
    const sendIt = ()=>{
        console.log(inputsFilled)
    }
    const [formData, setFormData] = useState({
        user_id: '',
        name: '',
        email: '',
        password: '',
        password_check: '',
        phone: '',
        affiliation: ''
      });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        console.log(formData)
    };

    return(
        <JoinSection>
            <Title>회원가입</Title>
            <FormWrap>
                
                    <InputDefault type='text' id='user_id' name='user_id' placeholder='ID' value={formData.user_id} onChange={handleChange}></InputDefault>
                    <InputDefault type='text' id='name' name='name' placeholder='성함' value={formData.name} onChange={handleChange}></InputDefault>
                    <InputDefault type='text' id='email' name='email' placeholder='E-mail' value={formData.email} onChange={handleChange}></InputDefault>
                    <InputDefault type='password' id='password' name='password' placeholder='비밀번호' value={formData.password} onChange={handleChange}></InputDefault>
                    <InputDefault type='password' id='password_check' name='password_check' placeholder='비밀번호확인' value={formData.password_check} onChange={handleChange}></InputDefault>
                    <InputDefault type='text' id='phone' name='phone' placeholder='휴대폰' value={formData.phone} onChange={handleChange}></InputDefault>
                    <InputDefault type='text' id='affiliation ' name='affiliation' placeholder='소속' value={formData.affiliation} onChange={handleChange}></InputDefault>
                <BtnJoin type='submit' onClick={sendIt}>회원가입</BtnJoin>
                
            </FormWrap>
        </JoinSection>
    )
}

export default Join;