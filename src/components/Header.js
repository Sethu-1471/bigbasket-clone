import React, {useEffect, useState} from 'react'
import ScrollHeader from "./ScrollNav";
import Navbar from "./Navbar"

export default function Header() {
    const [show, setShow] = useState(false);
    
    const handleScroll = () => {
        if (
            document.body.scrollTop >= 30 ||
            document.documentElement.scrollTop >= 30
          ) {
            setShow(true);
            console.log("true");
          } else {
            setShow(false);
            console.log("false");
            }
    }
    
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    
    return (
        <div>
            {
            show ? <ScrollHeader /> : <Navbar />
             }
        </div>
    )
}
