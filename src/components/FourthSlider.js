import React from 'react'
import styled from "styled-components";
import Carosal from "./Carosal";
import ImageOne from "../assets/recipies/1.png"
import ImageTwo from "../assets/recipies/2.png"

export default function FourthSlider() {
    let ImageArr = [ImageOne, ImageTwo];
    return (
        <FourthSlideContainer>
            <span>
            <FourthSlideHeader>
                    <span>
                    Featured Recipes
                    </span>
                </FourthSlideHeader>

            <Carosal ImageArr={ImageArr} arrow={true} />
            
            </span>
            
        </FourthSlideContainer>
    )
}

const FourthSlideContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0px;
    width: 100%;
    > span {
        width: 80%;
    }
`;

const FourthSlideHeader = styled.div`
    border-bottom: 2px solid #E2E2E2;
    display: flex;
    margin: 10px 0;
    font-size: 24px;
    justify-content: center;
`;