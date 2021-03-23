import React, {useEffect, useRef, useState} from 'react'
import styled from "styled-components";
import { Telephone, GeoAlt, Map, ChevronCompactDown, Cart3, Person, Search, TagFill } from 'react-bootstrap-icons';
import logo from "../assets/BigBasketLogo.jpg";
import Dropdown from "./Dropdown";
import { useDetectOutsideClick } from "./useDetectOutsideClick";

export default function Navbar() {
    const [dropDownRef, setDropDownref] = useState(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropDownRef, false);

    const onClick = () => setIsActive(true);

    const DropdownRef = (some) => setDropDownref(some);

    return (
            <HeaderContainer>
            <span>
                {isActive ? <Dropdown setRef={DropdownRef} top="130" /> : null}
                {/* <Dropdown setRef={DropdownRef} /> */}
            <HeaderTop>
                <HeaderTopLeft>
                    <span>
                     <Telephone /> 1860 123 1000
                    </span>
                    <span >
                    <GeoAlt />
                    56000, Bangalore
                    <ChevronCompactDown />
                    </span>
                    <span >
                    <Person />
                    Login | Signup
                    </span>
                </HeaderTopLeft>
            </HeaderTop>
            <HeaderBottom>
                <HeaderBottomImage>
                    <img src={logo}></img>
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
                <HeaderBottomNav >
                <span onMouseOver={onClick}>
                        Shop by category
                        <ChevronCompactDown />
                </span>
                <span>
                    <TagFill />
                    offers
                </span>
            </HeaderBottomNav>
            </span>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div` 
    display: flex;
    width: 100%;
    justify-content: center;
    >span{
        width: 80%;
        overflow: hidden;
        display: flex;
    flex-direction: column;
    
    }
`;

const HeaderTop = styled.div`
    position: relative;
    height: 20px;
    display: flex;
    justify-content: flex-end;

`;

const HeaderTopLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #6F6F6F;
    font-size: 13px;
    

    >span {
        display: flex;
        align-items: center;
        padding-left: 20px;
        >svg {
            padding-right:5px;
            font-size: 15px;
        }
    }

    >span:nth-child(2):hover{
        cursor: pointer;
        color: #84C225;
        >svg {
            color: #84C225;
        }
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
       width: 150px;
       padding-bottom: 10px;
    }
`;

const HeaderBottomSearch = styled.div`
    flex: 0.5;
    border-radius: 7px;
    display: flex;
    padding: 0 30px;
    opacity: 1;
    justify-content: start;

    > input {
        margin-top: 30px;
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
        margin-top: 30px;
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
            height: 60px;
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

const HeaderBottomNav = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    /* position: fixed; */
  
    justify-content: start;
    border: 1px solid #F2F2F2;

    >span:nth-child(1) {
        cursor: pointer;
        text-transform: uppercase;
        font-weight: bold;
        padding: 6px 6px;
        background-color: #84C225;
        color: white;
        display: flex;
        align-items: center;
        >svg {
            margin-left: 60px;
        }
    }

    >span:nth-child(2) {
        display: flex;
        align-items: center;
        text-transform: uppercase;
        font-weight: 300;
        padding: 6px 6px;
        /* background-color: #84C225; */
        color: black;
        >svg {
            color: #DA251D;
            font-size: 20px;
            margin-top: 3px;
            padding-right: 7px;
        }
    }

    >span:nth-child(2):hover{
        background-color: #84C225;
        color: white;
        cursor: pointer;

        >svg {
            color: white;
        }
    }
`;