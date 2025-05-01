import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <h1>MJ</h1>
            <p>I'm Frontend Developer from, Noida India with 3 year experience in this role </p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter Your Email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
     <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Mohd Jeeshan. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Service</p>
            <p>Privicy Policy</p>
            <p>Connect with me</p>
        </div>
     </div>
    </div>
  )
}

export default Footer
