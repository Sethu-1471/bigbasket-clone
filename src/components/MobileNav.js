import React from 'react';
import styled from "styled-components";
import {  Telephone, GeoAlt, Map, ChevronCompactDown, Cart, Person, Search, TagFill, List} from "react-bootstrap-icons";
import logo from "../assets/MobileIcon.png"
export default function MobileNav() {
    return (
        <MobileNavContainer>
            <MobileNavHeaderTop>
                <List />
                <Person />
                <img src={logo} />
                <GeoAlt />
                <Cart />
            </MobileNavHeaderTop>
            <MobileNavHeaderBottom>
            <input placeholder="Search for products" />
                    <span>
                    <Search />
                    </span>
            </MobileNavHeaderBottom>
        </MobileNavContainer>
    )
}


const MobileNavContainer = styled.div`
    background-color: #84C225;
    padding:3px;
    position: fixed;
    z-index: 1090;
    width: 100%
`;

const MobileNavHeaderTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 4px;
    >img{
      width: 30px;
    }
    >svg{
        color: white;
        font-weight: bold;
        font-size: 20px;
    }
`;

const MobileNavHeaderBottom = styled.div`
    display: flex;
    align-items:center;

    > input {
        flex: 0.9;
        background-color: white;
        outline: none;
        border: none;
        text-align: start;
        outline: 0;
        color: white;
        padding: 4px 15px;
    }

    > span {
        flex: 0.1;
        height: 32px;
  
        width: 32px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#222222;
        font-weight: bold;
    }

`;