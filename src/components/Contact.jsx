import '../styles/Contact.css'
const contact = ()=>{
    return(
       <section className='fourth'>
        <br /><br /><br />
             <h3>CONTACT ME</h3>
             <br />
             <h4>Feel free to reach out!!</h4>
             <br />
             <div className="contact">
                <div className="contactLeft">
                    <h4>Contact Information </h4>

                    <p>If this website created a wonderful experience for you and left a lasting impression I would love to hear from you !</p>
                    <p>Email: <a href="sagarkashyap28aug@gmail.com">sagarkashyap28aug@gmail.com</a></p>
                </div>
                <div className="contactRight">
                    <h4>Resume</h4>
                    <p>And if you like what you see, feel free to check out my resume for more information in the link below !</p>
                    <a href="https://drive.google.com/file/d/13bENysTRUsb57yUpx7qk2_DKGZw2z0Iy/view?usp=drive_link" download className="resumeButton">Download Resume</a>
                </div>
             </div>
       </section>
    )
}
export default contact;