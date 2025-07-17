import "../styles/Portfolio.css";
import Card from "./Card";
const Portfolio = () => {
  return (
    <section className="third">
      <h1 style={{ color: "#CBFC8F" }}>PORTFOLIO</h1>
      <h3>Check Out My Projects</h3>
      <br />
      <br />
      <br />
      <h3 style={{ color: "#CBFC8F" }}>web design projects</h3>
      <h3 style={{ color: "#CBFC8F" }}>. . . </h3>
      <br />
      <br />
      <div className="cards">
        <Card
          title="WanderLust 2025"
          text="A Journey Beyond Destinations !"
          link="https://github.com/SAGAR-RAJ1/-WonderLust-Reloaded"
          img="/wander.png"
        />
        <Card
          title="Portfolio"
          text="You already looking at this"
          link="https://github.com/SAGAR-RAJ1/Portfolio"
          img="/portfolio.png"
        />
        <Card
          title="Simon - Says"
          text="When Memory Meets Mayhem!"
          img="/simon.png"
          link="https://github.com/SAGAR-RAJ1/My-Web-projects-10/tree/main/SimonSays_Game"
        />

        <Card
          title="Rock Paper Scissors"
          text="Battle of Fate,One Move at a Time!"
          link="https://github.com/SAGAR-RAJ1/My-Web-projects-10/tree/main/rock%20paper"
          img="/rock.png"
        />
        <Card
          title="Life - Timer"
          text="How much you lived!"
          link="https://github.com/SAGAR-RAJ1/ai-notes-app"
          img="/life.png"
        />
        <Card
          title="AI - Notes App"
          text="Smart notes with Gemini "
          link="https://github.com/SAGAR-RAJ1/ai-notes-app"
          img="/ai.png"
        />
      </div>
    </section>
  );
};
export default Portfolio;
