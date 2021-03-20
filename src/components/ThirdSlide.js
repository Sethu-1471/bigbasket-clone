import React from 'react'
import styled from "styled-components";
import Carosal from "./Carosal";
import ImageOne from "../assets/ThirdCarosal/1.png"
import ImageTwo from "../assets/ThirdCarosal/2.png"
import ImageThree from "../assets/ThirdCarosal/3.png"

export default function FirstSlider() {
    let ImageArr = [ImageOne, ImageTwo, ImageThree];
    return (
        <SecondSlideContainer>
            <span>
            <Carosal ImageArr={ImageArr} />
            </span>
        </SecondSlideContainer>
    )
}

const SecondSlideContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0px;
    width: 100%;
    > span {
        width: 80%;
    }
`;