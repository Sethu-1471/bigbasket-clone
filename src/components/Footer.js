import React from 'react'
import styled from "styled-components";

export default function Footer() {
    return (
        <FooterContainer>
                <span>Copyright © 2020-2022 BigBasket Clone By Sethupathi(<a href="https://github.com/Sethu-1471/bigbasket-clone">github Link</a>)</span>
            </FooterContainer>
    )
}

const FooterContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    background-color: #EAEAEA;
    height: 30px;
    display: flex;
    justify-content: center;
    font-size: 13px;
    >span{
        width: 80%;
        margin-top: 2px;
    }
`;