import React from 'react';
import styled from "styled-components";
import { GeoAlt, X } from "react-bootstrap-icons";

export default function Header({handleClose}) {
    return (
        <HeaderContainer>
            <span>
                You are seeing our catalogue in
                <GeoAlt />
                <span style={{ fontWeight: "500" }}>Bangalore, 560004</span>
                <span className="button">
                    Change Location
                </span>
            </span>
            <span  className="closeButton">
                 <X onClick={handleClose} />
            </span>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    background-color: #625750;
    color: white;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    >.closeButton{
        right: 20px;
        position: absolute;
        cursor: pointer;
        >svg {
            font-size: 30px;
        }
    }
    > span{
        font-size: 14px;
        >svg {
            margin-left: 10px;
            font-size: 16px;
        }
        >.button {
            padding: 5px 10px;
            border: 1px solid white;
            margin-left: 10px;
            font-weight: 500;
        }
    }
`;
