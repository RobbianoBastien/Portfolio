import React from "react";
import './Contact.scss'
import Swal from 'sweetalert2'

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "bd509d12-6545-4a8a-8787-2e8b3e37eb48");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: 'succés',
        text: 'Votre message a bien été envoyé',
        icon: 'success',
    })
    event.target.reset();
    }
  };

  return (
    <div className="contact" id="contact">
      <form onSubmit={onSubmit}>
        <h2 className="contact__title">Contactez moi</h2>
        <div className="contact__content">
            <label>Nom complet</label>
            <input type="text" className="contact__info" placeholder="Entrer votre nom" name="name" required />
        </div>
        <div className="contact__content">
            <label>Adresse mail</label>
            <input type="email" className="contact__info" placeholder="Entrer votre email" name="email" required />
        </div>
         <div className="contact__content">
            <label>Votre Message</label>
            <textarea name="message" className="contact__message" placeholder="Écrivez votre message" required ></textarea>
        </div>
        <button type="submit" className="contact__button">Envoyer le message</button>
      </form>
    </div>
  );
}

export default Contact;