import React from 'react'
import styled from "styled-components";
import BrImageOne from "../assets/store/1.png"
import brImageTwo from "../assets/store/2.png"
import BrImageThree from "../assets/store/3.png"
import BrImageFour from "../assets/store/4.png"
import BrImageFive from "../assets/store/5.png"
import BrImageSix from "../assets/store/6.png"

export default function BrandStore() {
    let ImageArr =  [BrImageOne, brImageTwo, BrImageThree, BrImageFour, BrImageFive, BrImageSix];
    return (
        <BrandStoreContainer>
            <span>
                <BrandStoreHeader>
                    <span>
                        Brand Store
                    </span>
                </BrandStoreHeader>
                <BrandStoreImages>
                    {
                        ImageArr.map((image, index) => (
                            <span>
                                <img src={image} key={index} />
                            </span>
                        ))
                    }
                </BrandStoreImages>
            </span>
        </BrandStoreContainer>
    )
}


const BrandStoreContainer = styled.div`
width:100%;
display: flex;
justify-content: center;

>span {
    width: 80%;
}
`;

const BrandStoreHeader = styled.div`
    border-bottom: 2px solid #E2E2E2;
    display: flex;
    margin: 10px 0;
    >span:nth-child(1) {
        margin-left: 45%;
        font-size: 24px;
    }
`;


const BrandStoreImages = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    >span{
        margin: 4px;
        >img {
        width: 194px;
        padding: 4px;
    }
    >img:hover {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
    }}
`;