import React from 'react'
import './Footer.css'
// ==========================
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
//==========================
function Footer() {
  return (
    <footer className='flex-between'>
      <div className="quick-links">
        <ul className='footer-nav flex-between'>
            <li>
              Quick Links
            </li>
            <li>
              Support 
            </li>
            <li>
              Legal
            </li>
          </ul>
      </div>
      <div className="quick-icons footer-nav">
       <WhatsAppIcon className='icon'  />
       <FacebookIcon className='icon'  />
       <EmailIcon className='icon' />
      </div>
    </footer>
  )
}

export default Footer
