import React, { Fragment, useState } from "react";
import './Contact.css'


function ContactForm() {
    return (
        <div className="contact-wrapper">
            <article className="letter">
                <div className="side">
                    <h3 className="contact-title">Contact us</h3>
                    <p>
                        <textarea placeholder="Your message"></textarea>
                    </p>
                </div>

                <div className="side">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                <label for="lemail">Email</label>
                <input type="text" id="lemail" name="email" placeholder="Your Email.." />
                <button id="SendMessage"className="btn btn-green">Send</button>
                </div>
            </article>
        </div>
    )
}

export default ContactForm;