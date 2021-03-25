import React, {useRef, useState, useEffect} from 'react';
import { NavItem } from 'react-bootstrap';
import styled from "styled-components"
import image from "../assets/Dropdown/1.png";

export default function Dropdown({ setRef, top }) {
    let dropDownMenu = [
        {
            "Fruits & Vegtables": [
                {
                    "Fresh Vegetable": [
                        "Potato, Onion ",
                        "Leafy Vegetable",
                        "Root Vegetable",
                        "Cucumber",
                    ]   
                },
                {
                    "Fresh Fruit": [
                        "Apple",
                        "Orange",
                        "Jack Fruits",
                    ]
                }
            ]
        },
        {
            "Food grains, Oil & Massla": [
                {
                    "Atta & Flour": [
                        "Atta whole Wheat",
                        "Rice & Other Flour",
                    ]   
                },
                {
                    "Dals & Puls": [
                        "Millets",
                        "Crealas",
                        "Urad",
                    ]
                },
                {
                    "Organic Staples": [
                        "Organic Food",
                        "Organic Fruits",
                        "Organic Wheat",
                        "Organic Flour",
                        "Organic Oil",
                    ]
                },
            ]
        },
        {
            "Bakery Cakes": [
                {
                    "Dairy": [
                        "Milk",
                        "Curd",
                        "Cheese",
                        "Butter Milk",
                    ]   
                },
                {
                    "Non Dairy": [
                        "Dairy Feem (One)"
                    ]
                }
            ]
        },
    ]

    const DropdownRef = useRef(null);
    const [index, setIndex] = useState(0);
    const [hoveringIndex, setHoveringIndex] = useState(0);
    const [secondDropdown, setSecondDropdown] = useState(Object.values(dropDownMenu[0])[0]);
    const [thirdDropdown, setThirdDropdown] = useState(Object.values(Object.values(dropDownMenu[0])[0][0])[0]);
    useEffect(() => {
        setRef(DropdownRef);
    });

    const handleSecondDropdown = (i) => {
        let arr = dropDownMenu[i];
        setIndex(i);
        setHoveringIndex(0);
        setSecondDropdown(Object.values(arr)[0]);
        setThirdDropdown(Object.values(Object.values(dropDownMenu[i])[0][0])[0]);
    };

    const handleThirdDropdown = (i) => {
        setHoveringIndex(i);
        let arr = Object.values(dropDownMenu[index])[0][i]
        setThirdDropdown(Object.values(arr)[0]);
    };

    let style = {
        top: top + "px"
    }

    let secondSpanstyle = {
        backgroundColor: "white"
    }
    return (
        <DropdownContainer ref={DropdownRef} style={style}>
            <span>
                {
                    dropDownMenu.map((el, i) => (
                        <span key={i} onMouseOver={() => handleSecondDropdown(i)}> {Object.keys(el)[0]} </span>
                    ))
                }
                <span>More</span>
            </span>
            <span>
            {
                    secondDropdown.map((el, i) => (
                        <span key={i} style={hoveringIndex === i ? secondSpanstyle : null}  onMouseOver={() => handleThirdDropdown(i)}> {Object.keys(el)[0]} </span>
                    ))
                }
            </span>
            <span>
            {
                    thirdDropdown.map((el, i) => (
                        <span key={i}> {el} </span>
                    ))
                }
            </span>
            <span>
            <span>Popular Search</span>
            <span>Fruits</span>
            <span>Vegtables</span>
            <span>Onion</span>
            <span>Curd</span>
            <span>Cakes</span>
            </span>
            <span>
                <img src={image} />
            </span>
        </DropdownContainer>
    )
}

const DropdownContainer = styled.div`
    padding: 0 3px 0 3px;
    height: 450px;
    width: 80%;
    display: flex;
    position: absolute;
    z-index: 1024;
    background-color: white;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
    flex: 1;
    overflow: hidden;

    >span:nth-child(1) {
        display: flex;
        flex-direction: column;
        flex: 0.2;
        >span{
            padding: 5px 8px;
            font-size: 12px;
            font-weight: 400;
            border-top: 1px solid #DEDEDE;
        }
        >span:hover {
            background-color: #EAEAEA;
            cursor: pointer;
            font-weight: 500;
        }
    }

    >span:nth-child(2) {
        display: flex;
        flex-direction: column;
        flex: 0.2;
        background-color: #EAEAEA;
        padding-left: 6px;
        >span{
            padding: 6px 14px;
            opacity:0.9;
            font-size: 12px;
            font-weight: 400;
        }
        >span:hover {
            cursor: pointer;
            font-weight: 500;
            opacity: 1;
        }
    }

    >span:nth-child(3) {
        display: flex;
        flex-direction: column;
        flex: 0.2;
        border-right: 1.5px dotted #DEDEDE;
        >span{
            padding: 5px 8px;
            font-size: 12px;
            font-weight: 400;
        }
        >span:hover {
            color: #0B7827;
            cursor: pointer;
        }
    }

    >span:nth-child(4) {
        display: flex;
        flex-direction: column;
        flex: 0.2;
        >span:nth-child(1){
            color: #84C225;
            font-size: 14px;
        }
        >span{
            padding: 5px 8px;
            font-size: 12px;
            font-weight: 400;
        }
        >span:hover {
            color: #0B7827;
            cursor: pointer;
        }
    }

    >span:nth-child(5){
        flex: 0.2;
        >img{
            width: 84%;
            /* object-fit: contain; */
        }
    }
    
`;

