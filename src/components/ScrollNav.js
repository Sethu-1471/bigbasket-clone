import React, {useState} from 'react'
import styled from "styled-components";
import {  ChevronCompactDown, Cart3, Search } from 'react-bootstrap-icons';
import logo from "../assets/smallLogo.png";
import Dropdown from "./Dropdown";
import { useDetectOutsideClick } from "./useDetectOutsideClick";


export default function ScrollNav() {
    const [dropDownRef, setDropDownref] = useState(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropDownRef, false);

    const onClick = () => setIsActive(true);

    const DropdownRef = (some) => setDropDownref(some);
    console.log(useDetectOutsideClick(dropDownRef, false));
    return (
        <ScrollNavContainer>
            <span>
            {isActive ? <Dropdown setRef={DropdownRef} top="58" /> : null}
            <HeaderBottom>
                <HeaderBottomImage>
                        <img src={logo}></img>
                        <span onMouseOver={onClick}>Shop <ChevronCompactDown /> </span>
                </HeaderBottomImage>
                <HeaderBottomSearch>
                    <input placeholder="Search for products" />
                    <span>
                    <Search />
                    </span>
                </HeaderBottomSearch>
                <HeaderBottomCart>
                    <HeaderBottomCartEnd>
                        <Cart3 />
                        <span>
                            My Basket
                                <br />
                            0 Items
                        </span>
                    </HeaderBottomCartEnd>
                </HeaderBottomCart>
                </HeaderBottom>
            </span>
        </ScrollNavContainer>
    )
}

const ScrollNavContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 999;
    background-color: white;
    >span {
        width: 80%;
        display: flex;
        padding: 7px 0;
    }
`;


const HeaderBottom = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    /* position: fixed; */
    justify-content: center;
`;

const HeaderBottomImage = styled.div`
    flex: 0.2;

    > img {
       width: 44px;
       margin-top: auto;
    }

    >span {
        padding-left: 20px;
        text-transform: uppercase;
        font-weight: 600;
        cursor: pointer;
    }
`;

const HeaderBottomSearch = styled.div`
    flex: 0.5;
    border-radius: 7px;
    display: flex;
    padding: 0 30px;
    opacity: 1;
    justify-content: start;
    align-items: center;

    > input {
        background-color: transparent;
        border: 1px solid black;
        text-align: start;
        min-width: 90%;
        height: 30px;
        outline: 0;
        color: white;
        padding: 4px 15px;
    }

    > span {
        height: 30px;
        width: 30px;
        background-color: #84C225;
        display: flex;
        justify-content: center;
        align-items: center;
        color:white;
        font-weight: bold;
    }
    `;

const HeaderBottomCart = styled.div`
        flex: 0.3;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
`;

const HeaderBottomCartEnd = styled.div`
            display: flex;
            height: 45px;
            width: 140px;
            background-color: #F2F2F2;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            > svg {
                color: #DA251D;
                width: 25px;
                height: 25px;
            }
            >span {
                text-align: end;
                font-size: 13px;
                font-weight: bold;
                padding-left: 8px;
            }
`;