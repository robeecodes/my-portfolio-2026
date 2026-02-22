import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "c94927d3-c99a-45f1-aadf-ce2ab1e677d1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <>
      <style>
        {`
      form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;

        div {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        div:last-of-type {
          grid-column: 1 / span 2;
        }

        button {
          width: fit-content;
        }
      }
    `}
      </style>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" placeholder="Full Name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="name@gmail.com" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="link-button">
          Submit Form
        </button>
        <span>{result}</span>
      </form>
    </>
  );
}
