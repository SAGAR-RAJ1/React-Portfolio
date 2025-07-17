import '../styles/About.css'
const About = ()=>{
return(
    <section className="secondSection">
        <h1 className="gradient" >About Me</h1>
        <div className="box-sep"></div>
        <div className="sec">

            <div className="leftSection2">
                <img src="/motivation.webp" alt="Motivation image" />
            </div>
            <div className="rightSection2">
                <h2>here's a little bit about myself</h2>
                <p>Hi, I’m Sagar — an engineering student passionate about building things with code. I enjoy exploring both frontend and backend development, especially when it comes to creating clean, responsive, and meaningful digital experiences. I believe in learning by doing, and I’m always curious about how technology can be used to solve real-world problems. Outside of tech, I like reading, sketching, and discovering new ideas that inspire creativity.</p>
            </div>
        </div>
        </section>
)
}
export default About;