import React from 'react'

const Footer = () => {
  return (
    <>
   <footer id="picassoFooter">
    <div class="footer-navigation">
        <h3>Quick Links</h3>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#blog">Blogs</a></li>
        </ul>
    </div>
    <div class="footer-contact">
        <h3>Contact Us</h3>
        <p>Email: Blog007@gmail.com</p>
        <p>Phone: +123 456 7890</p>
    </div>
    <div class="footer-social">
        <h3>Follow Us</h3>
        <div class="social-icons">
            <img src="public/img/facebook.jpg" alt="" width="30px" class="mx-2"/>
            <img src="public/img/instagram.jpg" alt="" width="30px" class="mx-2"/>
            <img src="public/img/twitter.jpg" alt="" width="30px" class="mx-2"/>

           
        </div>
    </div>

    <div class="footer-art">
        <img src="public/img/travel-high-resolution-logo-removebg-preview.png" alt=""  style={{width:"200px"}  } />
        <p>MdBlog@2024 All rights reserved.</p>
        </div>
        
</footer>

    </>

  )
}

export default Footer


