import styled from 'styled-components';


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

const FormWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 30%;
`

const FormGroup = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    position: relative;
    &::before{
        content: attr(data-label);
        position: absolute;
        left: 5px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 14px;
        font-weight: 400;
        color: #ddd;
        transition: 0.7s;
        background: #fff;
        padding: 0 5px;
    }

    &:focus-within::before{
        color: #000;
        font-size: 12px;
        top: 0;
    }
`

const InputDefault = styled.input`
    width: 100%;
    height: 36px;
    border: none;
    border: 1px solid #ddd;
    outline: none;
    padding-left: 10px;
    transition: 0.7s;

    &:focus{
        border: 1px solid #000;
    }
    `


const Join = ()=>{
    return(
        <JoinSection>
            <Title>회원가입</Title>
            <FormWrap>
                <FormGroup data-label="성함">
                    <InputDefault ></InputDefault>
                </FormGroup>
                <FormGroup data-label="아이디">
                    <InputDefault ></InputDefault>
                </FormGroup>
                <FormGroup data-label="비밀번호">
                    <InputDefault type='password'></InputDefault>
                </FormGroup>
                <FormGroup data-label="비밀번호 확인">
                    <InputDefault type='password'></InputDefault>
                </FormGroup>
                <FormGroup data-label="이메일">
                    <InputDefault type='email'></InputDefault>
                </FormGroup>
                <FormGroup data-label="휴대폰 번호">
                    <InputDefault type='tel'></InputDefault>
                </FormGroup>
                
            </FormWrap>
        </JoinSection>
    )
}

export default Join;