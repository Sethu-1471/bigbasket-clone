import React from 'react'
import styled from "styled-components";

export default function FrameOne(props) {
    let ImageArr = props.ImageArr;
    return (
        <FrameOneContainer>
            <span>
                <FrameOneHeader>
                    <span>
                       {props.name}
                    </span>
                </FrameOneHeader>
                <FrameOneImages>
                    {
                        ImageArr.map((e,i) => (
                            <span key={i}>
                                <img src={e.image ? e.image : e}  />
                                <center className="Text"> {e.name} </center>
                            </span>
                        ))
                    }
                </FrameOneImages>
            </span>
        </FrameOneContainer>
    )
}


const FrameOneContainer = styled.div`
width:100%;
display: flex;
justify-content: center;
>span {
    width: 80%;
}
`;

const FrameOneHeader = styled.div`
    border-bottom: 2px solid #E2E2E2;
    display: flex;
    margin: 10px 0;
    font-size: 24px;
    justify-content: center;
`;

const FrameOneImages = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    >span{
        border:0.5px solid #D5D5D5;
        padding: 3px;
        margin: 5px;
        >img {
        width: 286px;
        }
        > .Text {
            font-size: 22px;
            opacity: 0.9;
            padding-bottom: 4px;
        }
    }
    >span:hover{
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
    }
`;

