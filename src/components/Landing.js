import React from 'react';
import './Landing.css';
import Typed from 'typed.js';
import { useEffect, useRef } from "react";
import {useNavigate} from "react-router-dom"

function Banner() {
  const navigate = useNavigate();
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Instagram |", "Snapchat |", "Whatsapp |", "Messenger |", "Discord |", "Twitter |", "Group chats |"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 150,
      backDelay: 150,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='hero' >
      <div className="sample-invite"></div>
        
        <div className="aside">
            <h1>Imagine if <br/><span ref={el}></span><br/>had events</h1>
            <p>Easily host and share events with your friends across any social media.</p>
        

        <button className='create-btn' onClick={()=>navigate("/create")}><a href="/create">🎉 Create my event</a></button>
        </div>
    </div>

   
  )
}

export default Banner