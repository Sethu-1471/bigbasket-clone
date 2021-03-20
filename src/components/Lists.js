import React from 'react';
import styled from "styled-components";
import ImageOne from "../assets/21.png"
import ImageTwo from "../assets/22.png"
import ImageThree from "../assets/23.png"
import ImageFour from "../assets/24.png"
import ImageFive from "../assets/25.png"

export default function Lists() {
    let ImageArr = [ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive];
    return (
        <ListContainer>
            <span>
            {
                ImageArr.map((image, index) => (
                    <img src={image} key={index} />
                ))
            }
            </span>
        </ListContainer>
    )
};

const ListContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0px;
    width: 100%;
    > span {
        width: 80%;
        display: flex;
        justify-content: space-between;
    }
`;