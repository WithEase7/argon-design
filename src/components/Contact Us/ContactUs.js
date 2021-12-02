import DemoNavbar from 'components/Navbars/DemoNavbar'
import React from 'react'
import './ContactUs.css'
{/* <Contact className="css"></Contact> */}
export default function Contact() {
    return (
      <>

<div className='navdiv'>
        <DemoNavbar background="#172b4d" />
      </div>
        <div className="master-wrapper">
          
    
          <div className="demo-flex">
          <div className="demo">
              
              <h3 style={{color:"#FFF"}}>Pitch a Demo</h3>
              <div className="Name form">
               <input className="form-input" type="text" required />
              <label className="form-label" htmlFor="">Name</label>
              </div>
              <div className="Email form">
             
              <input className="form-input"  type="email" required  />
              <label className="form-label" htmlFor="">Email</label>
              </div>
               <div className="Password form">
              <input className="form-input" type="password" required  />
              <label className="form-label" htmlFor="">Password</label>
               </div>
              <div className="Number form">
              <input className="form-input" type="number" required />
             <label  className="form-label" htmlFor="">Contact No</label>
              </div>
              <div className="submit" style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
              <button className="submit-button">submit</button>
              </div>
              </div>
          </div>
          <div className="contact-flex">
          <div className="contact-us">
              <div className="contact-flex"></div>
              <h3 >Contact Us</h3>
              <p>Get in touch with us to stay updated</p>
              <div className="location">
              <img  className="location-img" src="https://img.icons8.com/ios-filled/30/000000/marker.png"/>
                <h5 className="">Address : <span> Noida </span></h5>
              </div>
              <div className="phone">
              <img className="phone-img" src="https://img.icons8.com/ios-glyphs/30/000000/hang-up--v2.png"/>
                  <h5 className="">Phone : <span> 123456789 </span></h5>
              </div>
              <div className="email">
              <img className="email-img" src="https://img.icons8.com/material-rounded/30/000000/filled-sent.png" />
                  <h5 className="">Email : <span>shop@gmail.com</span></h5>
              </div>
              <div className="website">
              <img className="website-img" src="https://img.icons8.com/material/24/000000/wireless-cloud-access.png"/>
                  <h5 className="">Website: <span>www.shop.com</span></h5>
              </div>
              <div className="follow">
              <p className="follow-title">Follow us on </p>
                  <img src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png"/>
                  <img src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png"/>
                  <img src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"/>
              
              </div>
          </div>
          </div>
        </div>
        </>
    )
}
