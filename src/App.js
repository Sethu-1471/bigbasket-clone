import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { resizingFunction } from "./actions"
import FirstSlider from "./components/FirstSlider";
import SecondSlider from './components/SecondSlide'
import styled from "styled-components";
import Lists from "./components/Lists";
import SmartBasket from "./components/SmartBasket";
import BankOffer from "./components/BankOffer";
import Bestseller from "./components/BestSeller";
import FrameOne from "./components/FrameOne";
import FrameTwo from "./components/FrameTwo";
import ThirdSlide from "./components/ThirdSlide"
import FourthSlider from "./components/FourthSlider";
import EndPortion from "./components/EndPortion";
import Footer from "./components/Footer";
import ScrollHeader from "./components/ScrollNav";
import MobileNav from "./components/MobileNav"
//Images 
import BImageOne from "./assets/popular/1.jpg"
import BImageTwo from "./assets/popular/2.jpg"
import BImageThree from "./assets/popular/3.jpg"
import BImageFour from "./assets/popular/4.jpg"

import FImageOne from "./assets/fruits/1.jpg"
import FImageTwo from "./assets/fruits/2.jpg"
import FImageThree from "./assets/fruits/3.jpg"
import FImageFour from "./assets/fruits/4.jpg"
import FImageFive from "./assets/fruits/5.jpg"

import SImageOne from "./assets/staples/1.jpg"
import SImageTwo from "./assets/staples/2.jpg"
import SImageThree from "./assets/staples/3.jpg"
import SImageFour from "./assets/staples/4.jpg"

import SMImageOne from "./assets/snacks/1.jpg"
import SMImageTwo from "./assets/snacks/2.jpg"
import SMImageThree from "./assets/snacks/3.jpg"
import SMImageFour from "./assets/snacks/4.jpg"
import SMImageFive from "./assets/snacks/5.jpg"

import BeImageOne from "./assets/beauty/1.jpg"
import BeImageTwo from "./assets/beauty/2.jpg"
import BeImageThree from "./assets/beauty/3.jpg"
import BeImageFour from "./assets/beauty/4.jpg"
import BeImageFive from "./assets/beauty/5.jpg"


import DbImageOne from "./assets/drinks/1.jpg"
import DbmageTwo from "./assets/drinks/2.jpg"
import DbImageThree from "./assets/drinks/3.jpg"
import DbImageFour from "./assets/drinks/4.jpg"

import HImageOne from "./assets/household/1.jpg"
import HmageTwo from "./assets/household/2.jpg"
import HImageThree from "./assets/household/3.jpg"
import HImageFour from "./assets/household/4.jpg"



import { ChevronCompactUp } from "react-bootstrap-icons"
import BrandStore from "./components/BrandStore";

function App() {
  let mostPopular = [{image: BImageOne, name: "Masks & Gloves"},{image: BImageTwo, name: "Ice Creams & Milk"},{image: BImageThree, name: "Summer Fresh Face Wash"},{image: BImageFour, name: "Holi Colors"}];
  let fruits = [{image: FImageTwo, name: "Fresh Fruits"},{image: FImageThree, name: "Daily Vegtables"},{image: FImageFour, name: "Cuts"},{image: FImageFive, name: "Exotic corner"}];
  let staples = [{image: SImageOne, name: "Auta & Flour"},{image: SImageTwo, name: "Rice & Rice Products"},{image: SImageThree, name: "Dals & Pulses"},{image: SImageFour, name: "Dry Fruits"}];
  let snacks = [{image: SMImageFive, name: "Cookies"},{image: SMImageTwo, name: "Namkeens"},{image: SMImageThree, name: "Ready to Cook and Eat"},{image: SMImageFour, name: "Noodles & Pasta"}, ];
  let beauty = [{image: BeImageFive, name: "Oral Care"},{image: BeImageTwo, name: "Shaving & Men Grooming"},{image: BeImageThree, name: "Summer Fun & Sunscreens"},{image: BeImageFour, name: "Women Wellness"}];
  let drinks = [{image: DbImageOne, name: "Tea & Coffee"},{image: DbmageTwo, name: "Cold Drinks"},{image: DbImageThree, name: "Juices"},{image: DbImageFour, name: "Health Drinks"}];
  let houseHolds = [{image: HImageOne, name: "Detergent Poweder"},{image: HmageTwo, name: "Liquid Detergent"},{image: HImageThree, name: "Home Cleaners"},{image: HImageFour, name: "Freshners"}];

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const size = useSelector(state => state);
    const handleScroll = () => {
        if (
            document.body.scrollTop >= 35 ||
            document.documentElement.scrollTop >= 35
          ) {
            setShow(true);
          } else {
            setShow(false);
            }
    }
    
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const updateDimensions = () => {
    if (window.innerWidth < 970) {
      document.getElementById("ViewBoard").style.paddingTop = "70px";
    } else if(window.innerWidth > 971){
      document.getElementById("ViewBoard").style.paddingTop = "0px";
      console.log("i looged");
    }
    dispatch(resizingFunction(window.innerWidth));
  }

  useEffect(() => {
    if (size < 970){document.getElementById("ViewBoard").style.paddingTop = "70px";}
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const moveTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <AppContainer>
      {show ? <span onClick={moveTop}>
        <ChevronCompactUp />
      </span> : null}
    { size > 970 ? (<> <Navbar />
        {!show ? null : <ScrollHeader />} </>) : <MobileNav />}
      <div id="ViewBoard">
      <FirstSlider />
      <Lists />
      <SmartBasket />
      <SecondSlider />
      <BankOffer />
      <Bestseller  />
      <FrameOne name="Most Popular" ImageArr={mostPopular} />
      <FrameTwo name="Fruits & Vegetables" splImage={FImageOne} splName="The Organic Store" ImageArr={fruits} />
      <FrameOne name="Your Daily Staples" ImageArr={staples} />
      <FrameTwo name="Snacks & Munchies Corner" splName="Chips & Nachos" splImage={SMImageOne} ImageArr={snacks} />
      <FrameOne name="Drinks & Beverages" ImageArr={drinks} />
      <FrameOne name="Cleaning & Household" ImageArr={houseHolds} />
      <FrameTwo name="Beauty and Hygiene" splName="Budget Beauty" splImage={BeImageOne} ImageArr={beauty} />
      <ThirdSlide />
      <BrandStore />
      <FourthSlider />
      <EndPortion />
        <Footer />
    </div>
    </AppContainer>
  );
}

export default App;


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;

  >span{
    width: 35px;
    height: 35px;
    background-color: #84C225;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1090;
    bottom: 20px;
    right: 30px;
    cursor: pointer;
    > svg {
      font-size: 25px;
      color: white;
    }
  }
`;
