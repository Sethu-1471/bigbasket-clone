import React from 'react';
import styled from "styled-components";
import { HeptagonFill, RecordBtn, CartCheckFill, Cart3 } from "react-bootstrap-icons"

export default function ItemCard({image, name}) {
    return (
        <ItemCardContainer>
            <ItemCardHeader>
            GET 20% OFF <HeptagonFill />
            </ItemCardHeader>
            <ItemCardImage>
                <img src={image} />
            </ItemCardImage>
            <ImageCardBody>
                <RecordBtn />
                <span style={{ fontSize: 12, opacity: "0.6" }}>Fresho</span>
                <span style={{ fontSize: 14 }}> {name} </span>
                <span style={{ fontSize: 12, fontWeight: "bold", marginTop: 30, opacity: 0.6 }}>1kg</span>
            </ImageCardBody>
            <ImageCardFooter>
                <span style={{ fontSize: 12, opacity: 0.6 }}>
                MRP:<span style={{ textDecoration: "line-through" }}>Rs 36.25 </span><span style={{ fontSize: 18, opacity: 1 }}>Rs 29</span> 
                </span>
                <span>
                    <CartCheckFill />
                    <span style={{ fontSize: 12}}>Standard Delivery: Today 5:30PM - 7:30PM</span>
                </span>
                <span>
                    <span>
                        Qty
                         <input placeholder="1" />
                    </span>
                    <span>
                        ADD
                        <Cart3 />
                    </span>
                </span>
            </ImageCardFooter>
        </ItemCardContainer>
    )
}


const ItemCardContainer = styled.div`
    width: 14.3rem;
    border: 0.5px solid #F1F1F1;
    padding: 5px;
`;

const ItemCardHeader = styled.div`
    margin: 5px 0;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
    font-size: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #E1565A;
    >svg {
        margin: 5px;
        font-size: 13px;
        color: #E1565A;
    }
`;

const ItemCardImage = styled.div`
    >img {
        width: 100%;
    }
`;

const ImageCardBody = styled.div`
    display: flex;
    flex-direction: column;
    >svg {
        color: #029135;
    }
`;

const ImageCardFooter = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F4F3F2;
    padding: 2px;
    >span:nth-child(2){
        display: flex;
        >svg{
            font-size: 24px;
            padding-right: 2px;
        }
    }
    > span:nth-child(3) {
        display: flex;
        padding: 3px 10px;
        >span:nth-child(1) {
            display: flex;
            border: 0.5px solid #EEEEEE;
            align-items: center;
            height: 20px;
            font-size: 14px;
            opacity: 0.6;
            >input {
            max-width: 40px;
            height: 20px;
            outline: none;
            margin-left: 3px;
            border: 0.5px solid #EEEEEE;
        }
        >input:hover {
            border: 0.5px solid #84C225;
        }
        }
        >span:nth-child(2) {
            display: flex;
            align-items: center;
            background-color:#F9DA79;
            color: #827F72;
            margin-left: 20px;
            padding: 1px 10px;
            font-size: 12px;
            border-radius: 3px;
        }
    }
`;