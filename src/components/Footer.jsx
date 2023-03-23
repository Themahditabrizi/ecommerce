import React from 'react'
import './footer.scss';
export default function Footer() {
    return (

        <footer class="footer-sec">
            <div class="main">


                <div class="logo row">
                    <div class="footer-header">
                    </div>
                    <div class="logo-des">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>

                        <a href="#" class="btn-know">Know More</a>
                    </div>


                </div>



                <div class="office row">
                    <div class="footer-header">
                        <h3>Office</h3>
                    </div>
                    <div class="office-des">
                        <p>here are  many variations of passages of Lorem Ipsum available</p>
                        <a href="#">manikmaity.haker2003@gmail.com</a>

                        <p class="num">+91-9999999999</p>
                    </div>
                </div>


                <div class="link row">
                    <div class="footer-header">
                        <h3>Links</h3>
                    </div>

                    <div class="link-des">
                        <a href="#" class="footer-links">Home</a>
                        <a href="#" class="footer-links">About</a>
                        <a href="#" class="footer-links">Services</a>
                        <a href="#" class="footer-links">Galary</a>
                        <a href="#" class="footer-links">Contact</a>
                    </div>

                </div>




            </div>
        </footer>
    )
}
