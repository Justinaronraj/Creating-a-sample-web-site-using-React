import React from 'react';
import './nav.css'
function Navbar(){
    return(
    <div className='bar'>
        <h5>Menu</h5>
        <img className='logo' src='https://static.vecteezy.com/system/resources/thumbnails/002/767/770/small/jd-logo-letter-initial-logo-designs-template-free-vector.jpg'></img>
        <a className='navitem' href=''>Home</a>
        <a className='navitem' href=''>Service</a>
        <a className='navitem' href=''>About Us</a>
        <a className='navitem' href=''>Contact Us</a>
    </div>
    )
}
export default Navbar;