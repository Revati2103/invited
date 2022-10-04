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
    <div className='hero' style={{
        display: "flex",
        justifyContent: "space-around"
    }}>
        <img className = "sample-invite" src = {'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221004T155755Z&X-Amz-Expires=86400&X-Amz-Signature=8c9f7c77b980d58fbea7bbe3e006c00f0849e4cc5da529d8689cf98293f87be1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject'} 
        alt="landing page" />
        <div className="aside">
            
            <h1>Imagine if <br/><span ref={el}></span><br/>had events </h1>
            <p>Easily host and share events with your friends across any social media.</p>
            <button className='create-btn' onClick={()=>navigate("/create")}>🎉 Create my event</button>
        </div>

    </div>
  )
}

export default Banner