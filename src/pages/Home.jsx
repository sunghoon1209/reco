import Header from "../assets/components/Header"
import styled from 'styled-components';
import exhibitionImg from '../assets/images/main/exhibition.jpg'
import { useState } from "react";


const MainSection = styled.section`    
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: space-between;
    padding-top: 100px;
`
const Accord = styled.ul`
    display: flex;
    width: 100%;
    height: 600px;
    border: 1px solid #ccc;

    
`

const AccrodLi = styled.li`
    width: ${({ isActive }) => (isActive ? '100%' : '0%')};
    transition: width 0.5s;

    &:hover {
        cursor: pointer;
    }
`;

const Home = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const items = ['1', '2', '3', '4'];

    return (
        <MainSection>
            <Accord>
                {items.map((item, index) => (
                    <AccrodLi
                        key={index}
                        isActive={activeIndex === index}
                        onMouseOver={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        {item}
                    </AccrodLi>
                ))}
            </Accord>
        </MainSection>
    );
};

export default Home;