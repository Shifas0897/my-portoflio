export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
        Feel free to reach out if you'd like to collaborate or have any questions! I'm always open to new opportunities and would love to hear from you. Please use the form below or email me directly, and I'll get back to you as soon as possible.
        </p>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First-name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="Seid"
              id="First-name"
              required
            />
          </label>
          <label htmlFor="Last-name" className="contact--label">
            <span className="text-md">Last-name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="Shifa"
              id="Last-name"
              required
            />
          </label>
          <label htmlFor="Shifaseid8.ss@gmail.com" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Select One...</option>
            <option>A topic in the contact area of a portfolio typically refers to the section where visitors can reach out to the portfolio owner.</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="A message in the contact area of a portfolio is a brief note inviting visitors to get in touch for inquiries or collaborations. Typically, it encourages potential clients or employers to connect via email or a contact form"
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
