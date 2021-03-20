import React from 'react'
import styled from "styled-components";
import ItemCarosal from "./ItemCarosal"


export default function SmartBasket() {
    return (
        <SmartBasketContainer>
            <span>
                <SmartBasketHeader>
                    <span>
                        My Smart Basket
                    </span>
                    <span>
                        View All
                    </span>
                </SmartBasketHeader>
                <ItemCarosal />
            </span>
        </SmartBasketContainer>
    )
}


const SmartBasketContainer = styled.div`
width:100%;
display: flex;
justify-content: center;

>span {
    width: 80%;
}
`;

const SmartBasketHeader = styled.div`
    border-bottom: 2px solid #E2E2E2;
    display: flex;
    margin: 10px 0;
    >span:nth-child(1) {
        margin-left: 45%;
        font-size: 24px;
    }

    >span:nth-child(2) {
        margin-left: auto;
        display:flex;
        align-items: center;
        justify-content: center;
        width: 75px;
        height: 25px;
        border-radius: 5px;
        background-color: #84C225;
        color: white;
        font-size: 15px;
    }

`;

