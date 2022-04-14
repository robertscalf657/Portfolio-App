import React from 'react'
import Typical from 'react-typical'
import './Profile.css';

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
            <div className='colz'>
                <div className='colz-icon'>
                     <a href='#'>
                    <i className='fa fa-facebook-square'></i>
                </a>
                <a href='#'>
                    <i className='fa fa-google-plus-square'></i>
                </a>
                <a href='#'>
                    <i className='fa fa-instagram'></i>
                </a>
                <a href='#'>
                    <i className='fa fa-youtube-square'></i>
                </a>
                <a href='#'>
                    <i className='fa fa-twitter'></i>
                </a>
                </div>
            </div>
            <div className='profile-details-name'>
                <span className='primary-text'>
                    {" "}
                    Hello, I'm <span className='highlighted-text'>Robert</span>
                </span>
            </div>
            <div className='profile-details-role'>
                <span className='primary-text'>
                     {" "}
                     <h1>
                       {" "}
                       <Typical 
                       loop={Infinity}
                       steps={[
                           "Enthusiastic Developer",
                           1000,
                           "Full Stack Developer",
                           1000,
                           "Mern Stack Developer",
                           1000,
                           "Cross Platform",
                           1000,
                           "React Developer",
                           1000,
                       ]}
                       />
                     </h1>
                     <span className='profile-role-tagline'>
                         Websites and Applications built with front and back end operations.
                     </span>
                </span>
            </div>
            <div className='profile-options'>
                <button className='btn primary-btn'>
                    {""}
                    Hire Me{" "}
                </button>
                {/* resume goes here */}
                <a href='RobertResume.pdf' download='Robert RobertResume.pdf'>
                    <button  className='btn highlighted-btn'>Download Resume</button>
                </a>
            </div>
        </div>
        <div className='profile-pic'>
            <div className='profile-pic-background'>

            </div>
        </div>
      </div>
    </div>
  )
}
