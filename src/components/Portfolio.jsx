import '../styles/Portfolio.css'
import Card from './Card';
const Portfolio =()=>{
    return(
        <section className="third">
        <h1 style={{ color: '#CBFC8F' }}>PORTFOLIO</h1>
        <h3>Check Out My Projects</h3>
         <br /><br /><br />
        <h3 style={{ color: '#CBFC8F' }}>web design projects</h3>
        <h3 style={{ color: '#CBFC8F' }}>. . . </h3>
       <br /><br />
        <div className="cards">
        <Card title="WanderLust 2025" text="A Journey Beyond Destinations !" link="https://github.com/SAGAR-RAJ1/-WonderLust-Reloaded"/>
        <Card title="Simon - Says" text="When Memory Meets Mayhem!" />

         <Card title="Rock Paper Scissors" text="Battle of Fate,One Move at a Time!"/>
         <Card title="Portfolio" text="You already looking at this"/>
         <Card title="AI - Notes App" text="Smart notes with Gemini " link="https://github.com/SAGAR-RAJ1/ai-notes-app"/>
        </div>
        
        </section>
    )
}
export default Portfolio;