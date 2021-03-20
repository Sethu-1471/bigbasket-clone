import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChevronCompactLeft, ChevronCompactRight } from "react-bootstrap-icons";

function Carosal(props) {
    const [index, setIndex] = useState(0);
  let ImageArr = props.ImageArr;
  
  const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
  };
  
  const handleRightClick = (i) => {
    if (index < props.ImageArr.length - 1) {
        setIndex(index + 1);
    } else if (index == props.ImageArr.length - 1) {
        setIndex(0);
    }
}

const handleLeftClick = (i) => {
    if (index > 0) {
        setIndex(index - 1);
    } else if (index == 0) {
        setIndex(props.ImageArr.length - 1);
    }
}
    
    return (
      <CarosalContainer>
        <span>
        {props.arrow ? (<span className="LeftArrow" onClick={handleLeftClick}>
                    <ChevronCompactLeft />
                 </span>) : null}

                 {props.arrow ? (<span className="RightArrow" onClick={handleRightClick}>
                    <ChevronCompactRight />
                 </span>) : null}
            <Carousel controls={false} onSelect={handleSelect} interval={2000} activeIndex={index}>
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