import React from 'react'
import styled from "styled-components";
import payLogo from "../assets/pay.png"

import {Facebook, Twitter, Instagram } from "react-bootstrap-icons"

export default function EndPortion() {
    return (
        <EndPortionContainer>
            <span>
                <EndPortionheader>
                    <span style={{ fontSize: 20, fontWeight: 600 }}>bigbasket – online grocery store</span>
                    <br />
               <span style={{ fontSize: 13 }}> Did you ever imagine that the freshest of <span style={{ fontWeight: "bold", color: "#84C225" }}> fruits and vegetables</span>, top quality pulses and food grains, <span style={{ fontWeight: "bold", color: "#84C225" }}>dairy products</span> and hundreds of branded items could be handpicked and delivered to your home, all at the click of a button? India’s first comprehensive online megastore, bigbasket.com, brings a whopping 20000+ products with more than 1000 brands, to over 4 million happy customers. From household cleaning products to beauty and makeup, bigbasket has everything you need for your daily needs. bigbasket.com is convenience personified We’ve taken away all the stress associated with shopping for daily essentials, and you can now order all your household products and even buy groceries online without travelling long distances or standing in serpentine queues. Add to this the convenience of finding all your requirements at one single source, along with great savings, and you will realize that bigbasket- India’s largest online supermarket, has revolutionized the way India shops for groceries. Online grocery shopping has never been easier. Need things fresh? Whether it’s fruits and vegetables or dairy and meat, we have this covered as well! Get fresh eggs, meat, fish and more online at your convenience. Hassle-free Home Delivery options
<br />
We deliver to 25 cities across India and maintain excellent delivery times, ensuring that all your products from groceries to snacks<span style={{ fontWeight: "bold", color: "#84C225" }}> branded foods </span>  reach you in time.
                        <br />
                        <ul>
<li>Slotted Delivery: Pick the most convenient delivery slot to have your grocery delivered. From early morning delivery for early birds, to late-night delivery for people who work the late shift, bigbasket caters to every schedule.</li>
<li>Express Delivery: This super useful service can be availed by customers in cities like Bangalore, Mumbai, Pune, Chennai, Kolkata, Hyderabad and Delhi-NCR in which we deliver your orders to your doorstep in 90 Minutes.</li>
<li>BB Specialty stores: Missed out on buying that essential item from your favorite neighborhood store for tonight’s party? We’ll deliver it for you! From bakery, sweets and meat to flowers and chocolates, we deliver your order in 90 minutes, through a special arrangement with a nearby specialty store, verified by us.</li>
</ul>
                    </span>
                    <button>Read More..</button>
                </EndPortionheader>

                <EndPortionCenter>
                    <span>
                        <ul>
                        <li style={{ fontSize: 16, color:"#84C225"  }}>bigbasket</li>
                        <li>About Us</li>
                        <li>In News</li>
                        <li>Green bigbasket</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                        </ul>
                    </span>

                    <span>
                        <ul>
                       <li style={{ fontSize: 16, color:"#84C225"  }}>Help</li>
                       <li>FAQs</li>
                       <li>Contact Us</li>
                       <li>bb Wallet FAQs</li>
                       <li>bb Wallet T&Cs</li>
                        </ul>
                    </span>

                    <span>
                        <span style={{ fontSize: 16, color:"#84C225" ,paddingBottom: 20 }}>Download Our App</span>
                        <img src="https://www.bbassets.com/static/v2369/custPage/build/content/img/Google-App-store-icon.png" />
                        <img  src="https://www.bbassets.com/static/v2369/custPage/build/content/img/Apple-App-store-icon.png" />
                    </span>
                    <span >
                        <span style={{ fontSize: 16, color: "#84C225" }}>Get Social With us</span>
                        <span>
                            <Twitter color="#00ACED" />
                            <Facebook color="#3B5998" />
                            <Instagram color="#517FA4" />
                        </span>
                    </span>
                </EndPortionCenter>
                <hr />
                <EndPortionFooter>
                     <span>
                        <span className="LeftSide">
                        POPULAR CATEGORIES:
                        </span>
                        <span className="RightSide">
                            Sunflower Oils, Wheat Atta, Ghee, Milk, Health Drinks, Flakes, Organic F&V, Namkeen, Eggs, Floor Cleaners, Other Juices, Leafy Vegetables, Frozen Veg Food, Diapers & Wipes,
                        </span>
                    </span>
                    <span>
                        <span className="LeftSide">
                        POPULAR BRANDS:
                        </span>
                        <span className="RightSide">
                        Fresho, bb Royal, Nandini, Kelloggs, 24 Mantra, Saffola, Lizol, Safal, Horlicks, MTR, Fresho Meats, Whisper , Real, Milky Mist, Nivea, Himalaya, Comfort, Sunpure , Bru , Zespri, </span>
                    </span>
                    <span>
                        <span className="LeftSide">
                        CITIES WE SERVE:
                        </span>
                        <span className="RightSide">
                        Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Mysore, Madurai, Coimbatore, Vijayawada-Guntur, Kolkata, Ahmedabad-Gandhinagar, Nashik, Lucknow-Kanpur, Gurgaon, Vadodara, Visakhapatnam, Surat, Nagpur, Patna, Indore, Chandigarh Tricity, Jaipur, Bhopal, Noida-Ghaziabad, Kochi, </span>
                         </span>
                    <span>
                        <span className="LeftSide">
                        PAYMENT OPTIONS:
                        </span>
                        <span className="RightSide">
                            <img src={payLogo} width="50%" />
                        </span>
                    </span>
            </EndPortionFooter>
            </span>
        </EndPortionContainer>
    )
}

const EndPortionContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    >span {
        width: 80%;
    }
`;

const EndPortionheader = styled.div`
        border: 0.5px solid black;
        padding: 10px;
`;

const EndPortionCenter = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 20px;
    >span {
        display: flex;
        flex-direction: column;
        >span {
           
            >svg {
                padding:5px;
                font-size: 30px;
                color: #84C225;

            }
        }
        >ul {
            list-style-type: none;
            padding: 0;
            >li {
                padding: 3px 0;
                font-size: 12px;
            }
        }
    }
`;

const EndPortionFooter = styled.div`
    margin-top: 20px;
   >span {
       display: flex;
       flex-wrap: wrap;
 
      >.LeftSide{
          color: #84C225;
          font-size: 14px;
          width: 20%;
      }
      >.RightSide{
          width: 80%;
          font-size: 13px;
          /* margin-left: -40px; */
      }
   }
`;