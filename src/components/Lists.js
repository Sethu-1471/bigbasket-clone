import React from 'react';
import styled from "styled-components";
import ImageOne from "../assets/24.png"

export default function Lists() {
    return (
        <ListContainer>
            <span>
            <span className="FirstStyle">
                    Home and <br /> Kitchen
                </span>
                <span className="FirstStyle">
                    Eggs, Meat <br /> and Fish
                </span>
                <span className="SecondStyle">
                    The<span style={{color: "#E37570"}}>beauty</span>store
                </span>
                <img src={ImageOne} />
                <span className="FirstStyle">
                    Combo store
                </span>
            </span>
        </ListContainer>
    )
};

const ListContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0px;
    width: 100%;
    cursor: pointer;
    > span {
        width: 80%;
        display: flex;
        justify-content: space-between;
        >.FirstStyle{
            border-radius: 8px;
            width: 190px;
            height: 60px;
            background-color: #E8E8E8;
            display: flex;
            align-items:center;
            justify-content: center;
            font-weight: bold;
            font-size: 20px;
            text-align: center;
            line-height: 1.4rem;
        }
        > .SecondStyle{
            border-radius: 8px;
            width: 190px;
            height: 60px;
            background-color: black;
            color: #989898;
            display: flex;
            align-items:center;
            justify-content: center;
            font-weight: 400;
            font-size: 22px;
            text-align: center;
            line-height: 1.4rem;
        }

    }
`;