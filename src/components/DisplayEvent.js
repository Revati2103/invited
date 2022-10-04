import React from 'react';
import {FaCalendarAlt, FaMapMarkerAlt} from "react-icons/fa"
import './DisplayEvent.css';

function DisplayEvent() {
  return (
    <div className='display-event'>

      <div className="left">

          <h2>Birthday Bash</h2>
          <p>Hosted by <span>Elysia</span></p>

          <div className="dates">
            <FaCalendarAlt />
            <p>18 August 6:00PM</p>
          </div>

          <div className="address">
              <FaMapMarkerAlt />
              <p>Street name <br /><span>Suburb,State,Postcode</span></p>
        
          </div>
      </div>

      <div className="right">
<img src=" https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221004T155802Z&X-Amz-Expires=86400&X-Amz-Signature=acc69bbb84a905666ff0c440417de4633101318daee4a34da5c2d71a4b8cf531&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"/>
      </div>

    </div>
  )
}

export default DisplayEvent