import Header from "../assets/components/Header"
import styled from 'styled-components';
import exhibitionImg from '../assets/images/main/exhibition.jpg'
import conventionImg from '../assets/images/main/convention.jpg'
import homepageImg from '../assets/images/main/homepage.jpg'
import dataImg from '../assets/images/main/data.jpg'
import { useState } from "react";


const MainSection = styled.section`    
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: space-between;
    padding-top: 80px;
    
`
const Accord = styled.ul`
    display: flex;
    width: 100%;
    height: 600px;
    border: 1px solid #ccc;
    background: linear-gradient(45deg, #222, #555);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);


    
`

const AccrodLi = styled.li`
    flex: 1;
    transition:  0.5s;
    cursor: pointer;
    position: relative;
    opacity: 0.3;
    &:hover {
       flex: 5;
       opacity: 1;
    }
    &:nth-of-type(1){
        background: url(${exhibitionImg}) no-repeat center/cover;
    }
    &:nth-of-type(2){
        background: url(${conventionImg}) no-repeat center/cover;
    }
    &:nth-of-type(3){
        background: url(${homepageImg}) no-repeat center/cover;
    }
    &:nth-of-type(4){
        background: url(${dataImg}) no-repeat center/cover;
    }

`;

const AccordLiText = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; /* 줄바꿈 텍스트용 */
    position: absolute;
    bottom: 0;
    top: 0;
    right: 0;
    height: 20%;
    
    width: 100%;
    font-weight: 700;
    font-size: 1.4rem;
    color: #fff;
    text-align: center;
    padding: 10px 5px;
    transition: all 0.4s ease;

    
`

const Home = () => {
   


    return (
        <MainSection>
            <Accord>
                
                    <AccrodLi>
                        <AccordLiText>EXHIBITION<br />SYSTEM</AccordLiText>
                    </AccrodLi>
                    <AccrodLi>
                        <AccordLiText>CONVENTION<br />SYSTEM</AccordLiText>
                    </AccrodLi>
                    <AccrodLi>
                        <AccordLiText>HOMEPAGE<br />SYSTEM</AccordLiText>
                    </AccrodLi>
                    <AccrodLi>
                        <AccordLiText>DATA<br />FORU</AccordLiText>
                    </AccrodLi>
              
            </Accord>
        </MainSection>
    );
};

export default Home;