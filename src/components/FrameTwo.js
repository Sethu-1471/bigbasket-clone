
import React from 'react'
import styled from "styled-components";


export default function FrameTwo(props) {
    let ImageArr = props.ImageArr;
    return (
        <FrameTwoContainer>
            <span>
                <FrameTwoHeader>
                    <span>
                        { props.name }
                    </span>
                </FrameTwoHeader>
                <FrameTwoImages>
                <FrameTwoImagesLeft>
                        <img src={props.splImage} ></img>
                        <span className="Container">
                             <span className="LeftPart">
                             <span className="VerticalLineOne"></span>
                             <span className="VerticalLineTwo"></span>
                             <span className="VerticalLineThree"></span>
                             <span className="VerticalLineFour"></span>
                             <span className="VerticalLineFive"></span>
                             <span className="VerticalLineSix"></span>
                             <span className="VerticalLineSeven"></span>
                             <span className="Round"></span>   
                            </span>
                            <span className="CenterPart">
                                {props.splName}
                            </span>
                            <span className="RightPart">
                            <span className="Round"></span> 
                            <span className="VerticalLineOne"></span>
                             <span className="VerticalLineTwo"></span>
                             <span className="VerticalLineThree"></span>
                             <span className="VerticalLineFour"></span>
                             <span className="VerticalLineFive"></span>
                             <span className="VerticalLineSix"></span>
                             <span className="VerticalLineSeven"></span>
                            </span> 
                        </span>
                        </FrameTwoImagesLeft>
                        <FrameTwoImagesRight>
                        {
                            ImageArr.map((e, i) => (
                                <span key={i}>
                                    <img src={e.image}  />
                                    <center className="Text"> {e.name} </center>
                                 </span>
                        ))
                    }
                    </FrameTwoImagesRight>
                </FrameTwoImages>
            </span>
        </FrameTwoContainer>
    )
}


const FrameTwoContainer = styled.div`
width:100%;
display: flex;
justify-content: center;

>span {
    width: 80%;
}
`;

const FrameTwoHeader = styled.div`
    border-bottom: 2px solid #E2E2E2;
    display: flex;
    margin: 10px 0;
    font-size: 24px;
    justify-content: center;
`;

const FrameTwoImages = styled.div`
    display: flex;
    justify-content: space-around;
`;

const FrameTwoImagesLeft = styled.div`
    border:0.5px solid #D5D5D5;
    margin: 3px;
    > .Container {
        display: flex;
        > .CenterPart {
            margin: auto;
            font-size: 24px;
            opacity: 0.9;
            padding-left: 45px;
        }
        > .RightPart {
            margin-left: auto;
            display: flex;
            align-items: center;
            padding-right: 20px;
            > .VerticalLineOne{
                border-left: 2px solid #F15797;
                height: 5px;
                display: block;
                padding: 0 1px;
            }
            > .VerticalLineTwo{
                border-left: 2px solid #F15797;
                height: 10px;
                display: block;
                padding: 0 1px;
            }
            > .VerticalLineThree{
                border-left: 2px solid #F15797;
                height: 15px;
                display: block;
                padding: 0 1px;
            }
            > .VerticalLineFour{
                border-left: 2px solid #F15797;
                height: 20px;
                display: block;
                padding: 0 1px;
            }
            > .VerticalLineFive{
                border-left: 2px solid #F15797;
                height:25px;
                display: block;
                padding: 0 1px;
            }
            > .VerticalLineSix{
                border-left: 2px solid #F15797;
                height: 30px;
                display: block;
                padding: 0 1px;
            }
            > .VerticalLineSeven{
                border-left: 2px solid #F15797;
                height: 35px;
                display: block;
                padding: 0 1px;
            }
            >.Round{
                border:2px solid #131313;
                height: 12px;
                width: 12px;
                border-radius: 50px;
                margin-right: 15px;
            }
        }
        > .LeftPart {
            display: flex;
            align-items: center;
            padding-left: 20px;
            > .VerticalLineOne{
                border-left: 2px solid #F15797;
                height: 35px;
                display: block;
                padding: 0 1px;
            }
            > .VerticalLineTwo{
                border-left: 2px solid #F15797;
                height: 30px;
                display: block;
                padding: 0 1px;
            }
            > .VerticalLineThree{
                border-left: 2px solid #F15797;
                height: 25px;
                display: block;
                padding: 0 1px;
            }
            > .VerticalLineFour{
                border-left: 2px solid #F15797;
                height: 20px;
                display: block;
                padding: 0 1px;
            }
            > .VerticalLineFive{
                border-left: 2px solid #F15797;
                height: 15px;
                display: block;
                padding: 0 1px;
            }
            > .VerticalLineSix{
                border-left: 2px solid #F15797;
                height: 10px;
                display: block;
                padding: 0 1px;
            }
            > .VerticalLineSeven{
                border-left: 2px solid #F15797;
                height: 5px;
                display: block;
                padding: 0 1px;
            }
            >.Round{
                border:2px solid #131313;
                height: 12px;
                width: 12px;
                border-radius: 50px;
                margin-left: 15px;
            }
        }
    }
    >img {
    
    }
`;

const FrameTwoImagesRight = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   >span {
    border:0.5px solid #D5D5D5;
    margin: 5px;
    > .Text {
            font-size: 20px;
            opacity: 0.9;
            padding-bottom: 4px;
        }
    >img{
        margin: 3px;
    }
   }
   
`;