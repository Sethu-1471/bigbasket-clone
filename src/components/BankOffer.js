import React from 'react'
import styled from "styled-components";
import ImageOne from "../assets/Bank/1.png"
import ImageTwo from "../assets/Bank/2.png"
import ImageThree from "../assets/Bank/3.png"
import ImageFour from "../assets/Bank/4.png"

export default function BankOffer() {
    let ImageArr = [ImageOne, ImageTwo, ImageThree, ImageFour];
    return (
        <BankOfferContainer>
            <span>
                <BankOfferHeader>
                    <span>
                        Bank Offer
                    </span>
                </BankOfferHeader>
                <BankOfferImages>
                    {
                        ImageArr.map((image, index) => (
                            <img src={image} width="23%" key={index} />
                        ))
                    }
                </BankOfferImages>
            </span>
        </BankOfferContainer>
    )
}


const BankOfferContainer = styled.div`
width:100%;
display: flex;
justify-content: center;

>span {
    width: 80%;
}
`;

const BankOfferHeader = styled.div`
    border-bottom: 2px solid #E2E2E2;
    display: flex;
    margin: 10px 0;
    >span:nth-child(1) {
        margin-left: 45%;
        font-size: 24px;
    }
`;


const BankOfferImages = styled.div`
    display: flex;
    justify-content: space-around;
    >img {
        border:0.5px solid #D5D5D5;
    }
    >img:hover {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
    }
`;