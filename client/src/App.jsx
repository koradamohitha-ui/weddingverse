import { useState,useRef } from "react";
import "./App.css";

function App() {
  const [bride, setBride] = useState("");
  const [groom, setGroom] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [time, setTime] = useState("");
const [message, setMessage] = useState(
  "Two hearts, one beautiful journey. Join us as we begin our forever."
);
  const [theme, setTheme] = useState("pink");
  const weddingTemplates = [
  {
    id: "pink",
    name: "Blush Romance",
    emoji: "🌸",
    description: "Soft pink & romantic"
  },
  {
    id: "white",
    name: "Elegant Dreams",
    emoji: "🤍",
    description: "Classic cream & gold"
  },
  {
    id: "red",
    name: "Rose Garden",
    emoji: "🌹",
    description: "Romantic rose red"
  }
];
  const invitationRef = useRef(null);
  const [couplePhoto, setCouplePhoto] = useState("");

  return (
    <div className="app">
      <nav className="navbar">
        <h2>💍 WeddingVerse</h2>
        <span>Your Dream Wedding Invitation</span>
      </nav>
<section className="welcome-banner">
  <p className="welcome-label">WELCOME TO WEDDINGVERSE</p>

  <h2>Your Love Story, Beautifully Invited</h2>

  <p>
    Create a timeless invitation for the beginning
    of your forever. 💕
  </p>

  <a href="#create-invitation" className="welcome-button">
    Create Your Invitation ✨
  </a>
</section>
      <section className="hero">
        <p className="tagline">A BEAUTIFUL BEGINNING</p>
        <h1>Make Your Wedding Unforgettable</h1>
        <p className="description">
          Create a beautiful digital wedding invitation for your special day.
        </p>

        <div ref={invitationRef} className={`invitation ${theme}`}>
          {couplePhoto && (
  <img
    src={couplePhoto}
    alt="Wedding Couple"
    className="couple-photo"
  />
)}
          <p className="small-title">TOGETHER FOREVER</p>
          <h2>{bride || "Bride's Name"}</h2>
          <p className="and">&</p>
          <h2>{groom || "Groom's Name"}</h2>
          <p className="wedding-date">{date || "Your Wedding Date"}</p>
          <p>📍 {venue || "Your Wedding Venue"}</p>
          <p className="wedding-time">
  🕰️ {time || "Your Wedding Time"}
</p>

<p className="invitation-message">
  {message}
</p>
        </div>
      </section>

      <section className="form-section" id="create-invitation">
        <h2>Create Your Invitation ✨</h2>
        <p>Enter your details and choose your favourite theme.</p>

        <form onSubmit={(e) => e.preventDefault()}>
          <label>Bride's Name</label>
          <input
            type="text"
            placeholder="Enter bride's name"
            value={bride}
            onChange={(e) => setBride(e.target.value)}
          />

          <label>Groom's Name</label>
          <input
            type="text"
            placeholder="Enter groom's name"
            value={groom}
            onChange={(e) => setGroom(e.target.value)}
          />

          <label>Wedding Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label>Wedding Venue</label>
          <input
            type="text"
            placeholder="Enter wedding venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
          />
<label>Wedding Time ⏰</label>

<input
  type="time"
  value={time}
  onChange={(e) => setTime(e.target.value)}
/>

<label>Invitation Message 💌</label>

<textarea
  placeholder="Write your invitation message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  rows="3"
/>
          <h3 className="theme-heading">
  Choose Your Wedding Template 💐
</h3>

<div className="template-gallery">
  {weddingTemplates.map((template) => (
    <button
      type="button"
      key={template.id}
      className={`template-card ${template.id}-template ${
        theme === template.id ? "selected" : ""
      }`}
      onClick={() => setTheme(template.id)}
    >
      <span className="template-emoji">{template.emoji}</span>

      <span className="template-name">{template.name}</span>

      <span className="template-description">
        {template.description}
      </span>

      <span className="template-action">
        {theme === template.id ? "✓ Selected" : "Choose Template"}
      </span>
    </button>
  ))}
</div>
          <label>Upload Couple Photo 📸</label>

<input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files[0];

    if (file) {
      setCouplePhoto(URL.createObjectURL(file));
    }
  }}
/>

          <div className="theme-options">
            <button
              type="button"
              className={`theme-card pink-card ${theme === "pink" ? "selected" : ""}`}
              onClick={() => setTheme("pink")}
            >
              🌸
              <span>Royal Pink</span>
            </button>

            <button
              type="button"
              className={`theme-card white-card ${theme === "white" ? "selected" : ""}`}
              onClick={() => setTheme("white")}
            >
              🤍
              <span>Elegant White</span>
            </button>

            <button
              type="button"
              className={`theme-card red-card ${theme === "red" ? "selected" : ""}`}
              onClick={() => setTheme("red")}
            >
              ❤️
              <span>Traditional Red</span>
            </button>
          </div>

          <button type="submit">Create My Invitation 💖</button>
          <button
  type="button"
  onClick={() => window.print()}
  className="download-button"
>
  Download Invitation 💌
</button>
        </form>
      </section>

      <footer>Made with ❤️ by WeddingVerse</footer>
    </div>
  );
}

export default App;