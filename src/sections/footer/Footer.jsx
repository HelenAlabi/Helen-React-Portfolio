// import './footer.css'

// const Footer = () => {
//   return (
//     <section id='footer'><h2>FTR</h2></section>
//   )
// }

// export default Footer


import './footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <p>If you have any questions or would like to discuss a project, feel free to reach out to me!</p>
        <div className="contact-details">
          <p><i className="fas fa-envelope"></i> Email: <a href="helenalabi64@gmail.com">your.email@example.com</a></p>
          <p><i className="fas fa-phone-alt"></i> Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
          <p><i className="fas fa-map-marker-alt"></i> Location: Your City, Your Country</p>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Footer;
