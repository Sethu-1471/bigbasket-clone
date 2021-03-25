import React, {useState} from 'react'
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import ImageOne from "../assets/1.png"
import ImageTwo from "../assets/2.png"
import ImageThree from "../assets/3.png"
import ImageFour from "../assets/4.png"
import ImageFive from "../assets/5.png"
import meet from "../assets/meat.png"
import { useSelector } from "react-redux"

export default function FirstSlider() {
    const [index, setIndex] = useState(0);
    const size = useSelector(state => state);
    let ImageArr = [ImageOne, ImageTwo, meet,ImageFive, ImageThree, ImageFour ];
    let TradeStyle = {
        background: "#F6F9FC",
        padding: "10px 20px",
        display: "inline-flex",
        alignItem: "center",
        justifyContent: "center",
        lineHeight: "1rem",
        fontWeight: "bold",
        fontSize: "14px",
        opacity: "0.8",
        borderBottom: "4px solid #F4F4F4",
        cursor: "pointer"
    }
    let smallTextStyle = {
        fontWeight: "600", fontSize: "10px", opacity: "0.8", display: "flex", justifyContent: "center",cursor: "pointer"
    }
    let ActiveTradeStyle = {
        background: "#FFFFFF",
        padding: "10px 20px",
        display: "inline-flex",
        alignItem: "center",
        justifyContent: "center",
        lineHeight: "1rem",
        fontWeight: "bold",
        fontSize: "14px",
        opacity: "1",
        borderBottom: "4px solid #84C255",
        cursor: "pointer"
    }

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    const handleChangeIndex = (i) => {
        setIndex(i);
    }
    return (
        <FirstSliderContainer>
            <span>
                { size > 970 ? <span>
                <span style={index == 0 ? ActiveTradeStyle : TradeStyle} onClick={() => handleChangeIndex(0)}>
                         <span>Offers On<br /><span style={smallTextStyle}>staples</span></span>
                        </span>
                        <span style={index == 1 ? ActiveTradeStyle : TradeStyle} onClick={() => handleChangeIndex(1)}>
                         <span>Home<br /><span style={smallTextStyle}> Kitchen</span></span>
                        </span>
                        <span style={index == 2 ? ActiveTradeStyle : TradeStyle} onClick={() => handleChangeIndex(2)}>
                         <span>Fresho<br /><span style={smallTextStyle}>Meat</span></span>
                    </span>
                    <span style={index == 3 ? ActiveTradeStyle : TradeStyle} onClick={() => handleChangeIndex(3)}>
                         <span>Melon<br /><span style={smallTextStyle}>Mela</span></span>
                    </span>
                    <span style={index == 4 ? ActiveTradeStyle : TradeStyle} onClick={() => handleChangeIndex(4)}>
                         <span>Fresh Start to<br /><span style={smallTextStyle}>Your Day</span></span>
                        </span>
                        <span style={index == 5 ? ActiveTradeStyle : TradeStyle} onClick={() => handleChangeIndex(5)}>
                         <span>Breakfast<br /><span style={smallTextStyle}>Cereals</span></span>
                        </span>
                </span> : ""}
            <Carousel controls={false} interval={3000} onSelect={handleSelect} activeIndex={index}>
                {
                    ImageArr.map((image, index) => (
                        <Carousel.Item key={index}>
                    <img
                          className="d-block w-100"
                          src={image}
                          alt={`Slide ${index}`}
                    />
                  </Carousel.Item>
                    ))
               } 
          </Carousel>
            </span>
        </FirstSliderContainer>
    )
}

const FirstSliderContainer = styled.div`
    > span{
        display: block;
        position: relative;
        >span {
            position: absolute;
            z-index: 9;
            display: flex;
            justify-content: center;
            width: 100%;
            bottom: 0;
        }
    }
`;
