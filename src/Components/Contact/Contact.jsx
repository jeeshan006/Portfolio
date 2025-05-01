import React from 'react'
import './Contact.css'
import  theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9f11bc96-1b72-4189-87c3-6f5490f03beb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert(data.message)
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact' id='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>jeeshanmohammad921@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>8737934848</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Noida Uttar Pradesh India</p> 
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter Your Name' name='name'/>
          <label htmlFor="">Your Email</label>
          <input type="text"  placeholder='Enter Your Email' name='email'/>
          <label htmlFor="">Write Your Message Here...</label>
          <textarea name="message" id="" rows="8" placeholder='Enter Your Message'></textarea>
          <button type='submit' className='contact-submit'>Contact Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
