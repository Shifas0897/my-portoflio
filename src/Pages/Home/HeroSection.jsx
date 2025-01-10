export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hi, I'm Seid Shifa</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          In Backend Tasks: Server-Side Logic: I developed and implemented the logic and functionality that runs on the server to process client requests. 
            <br />In Frontend Tasks: User Interface (UI) Design: I created and implemented the visual design of the website or application, ensuring it’s user-friendly and responsive.
            
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/my-photo.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
