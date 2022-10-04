import React from 'react'
import {useState} from 'react'
import './CreateEvent.css'
import {useNavigate} from "react-router-dom"
import {Link} from 'react-router-dom'




function CreateEvent() {
  const navigate = useNavigate();

  const [events, setEvents] = useState({
      title: "",
      host: "",
      startDate: "",
      endDate: "",
      location: "",
      imagePath: ""
  })
  // const event = {
  //   id: Math.floor(Math.random() * 10000),
  //   title: events.title,
  //   host: events.host,
  //   startDate: events.startDate,
  //   endDate: events.endDate,
  //   location: events.location,
  //   imagePath: events.imagePath
  
  // }
  let name;
  let value;

  const handleInputs = (e) => {
      name = e.target.name;
      value = e.target.value;
      setEvents({...events, [name]:value})
  }

 

  const resetForm = () => {
    setEvents('');
    

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    navigate('/display');
   
    resetForm();
  }

  return (
   
    <div className='create-event'>
      <form className="new-event-form" onSubmit={handleSubmit}>
      <header>
      <button className="cancel-btn" onClick={()=>navigate(-1)}>Cancel</button>
    
      </header>
          <div>
            <h1>Create your event</h1>
          </div>
      
      
          <label>
          <p>🎉 My event is called</p>
          <input
          type="text" name='title'
          onChange={handleInputs}
          value = {events.title || ''}
          />
          </label>
          
          <label>
          <p>✏️ Hosted by </p>
          <input type="text" name='host'
           onChange={handleInputs}
           value = {events.host || ''}
          />
          </label>

          <label>
          <p>🗓 It starts at</p>
          <input
          type="date" name='startdate'
          onChange={handleInputs}
          value = {events.startDate || ''}
           />
          </label>

          <label>
          <p>🏁 It ends at</p>
          <input type="date" name='enddate'
           onChange={handleInputs}
           value = {events.endDate || ''}
          />
          </label>

          <label>
          <p>📍 It’s happening at</p>
          <input type="text" name='location'
          placeholder='Location'
          onChange={handleInputs}
          value = {events.location || ''}
          />
          </label>
          
          <label>
          <p>Choose an event picture</p>
          <input type="file" name='imagepath'
           onChange={handleInputs}
           value = {events.imagePath || ''}
          />
          </label>
      <Link className="submit-btn" 
      
      to = {{
        pathname: "/display",
      }}
      >Create your event</Link>
      </form>
    </div>
  
  )
}

export default CreateEvent