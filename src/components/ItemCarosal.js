import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCard from "./ItemCard";
import ImageOne from "../assets/products/1.png"
import ImageTwo from "../assets/products/2.png"
import ImageThree from "../assets/products/3.png"
import ImageFour from "../assets/products/4.png"
import ImageFive from "../assets/products/5.png";
import { ChevronCompactLeft, ChevronCompactRight } from "react-bootstrap-icons";


function Carosal() {
    const [index, setIndex] = useState(0);
    let ItemArr = [{name: "Onion", image: ImageOne},
    {name: "Mango", image: ImageTwo},
    {name: "Onion", image: ImageThree},
    {name: "Onion", image: ImageFour},
    {name: "Carot", image: ImageFive},]
    let ItemArrOne = [{name: "Onion", image: ImageFour},{name: "Onion", image: ImageOne},
    {name: "Mango", image: ImageTwo},
    {name: "Onion", image: ImageThree},
    {name: "Carot", image: ImageFive},]
    let ItemArrTwo = [{ name: "Onion", image: ImageOne },
    {name: "Onion", image: ImageFour},
    {name: "Mango", image: ImageTwo},
        { name: "Carot", image: ImageFive },
        { name: "Onion", image: ImageThree },]
    
    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };

    const handleRightClick = (i) => {
        if (index < 2) {
            setIndex(index + 1);
        } else if (index == 2) {
            setIndex(0);
        }
    }

    const handleLeftClick = (i) => {
        if (index > 0) {
            setIndex(index - 1);
        } else if (index == 0) {
            setIndex(2);
        }
    }
    
    useEffect(() => {
        console.log({index});
        for (let i = 0; i < document.getElementsByClassName("carousel-indicators").length; i++) {
            document.getElementsByClassName("carousel-indicators")[i].style.display = "none"
        }
    });

    let ItemStyle = {
        display: "flex",
        justifyContent: "space-between",
        padding: "0 8px"
    }
    return (
        <CarosalContainer>
            <span>
                <span className="LeftArrow" onClick={handleLeftClick}>
                    <ChevronCompactLeft />
                 </span>
                <span className="RightArrow" onClick={handleRightClick}>
                    <ChevronCompactRight />
                </span>
            <Carousel controls={false} onSelect={handleSelect} interval={2000} activeIndex={index}>
                     <Carousel.Item>
                        <span style={ItemStyle}>
                    {ItemArr.map((item ,index) => (
                                <ItemCard name={item.name} image={item.image} key={index} />
                            ))}
                    </span>
                        </Carousel.Item>
                        <Carousel.Item >
                        <span style={ItemStyle}>
                    {ItemArrOne.map((item ,index) => (
                                <ItemCard name={item.name} image={item.image} key={index} />
                            ))}
                    </span>
                        </Carousel.Item>
                <Carousel.Item >
                    <span style={ItemStyle}>
                    {ItemArrTwo.map((item ,index) => (
                                <ItemCard name={item.name} image={item.image} key={index} />
                            ))}
                    </span>
                        </Carousel.Item>  
                </Carousel>
                </span>
        </CarosalContainer>
    )
}

export default Carosal;

const CarosalContainer = styled.div`
    display: block;
    position: relative;
    >span{
        >.LeftArrow{
            cursor: pointer;
            border: 1px solid #E6E6E6;
            position: absolute;
            z-index: 9;
            background-color: White;
            height: 35px;
            width: 25px;
            top: 45%;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        >.RightArrow {cursor: pointer;
            border: 1px solid #E6E6E6;
            position: absolute;
            z-index: 8;
            background-color: white;
            height: 35px;
            width: 25px;
            right: -0;
            top: 45%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;