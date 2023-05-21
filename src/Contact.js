import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <main>
      <section>
        <h1>À propos de HI BYE SELL IMMO</h1>
        <p>[Présenter ici l'agence immobilière, son histoire, son expérience, sa vision, sa mission, etc.]</p>
      </section>
      <section className="contact-section">
        <h2>Nous contacter</h2>
        <ul>
          <li>Adresse : cité riadh rue kinshassa Sousse</li>
          <li>Téléphone : 26607290</li>
          <li>E-mail : azizbenkacem11@gmail.com</li>
          <li>LinkedIn : Aziz Kacem</li>
          <li>Facebook : Aziz Kacem</li>
        </ul>
      </section>
      <section>
        <h2>Nos activités</h2>
        <ul>
          <li>Vente de biens immobiliers</li>
          <li>Achat de biens immobiliers</li>
          <li>Location de biens immobiliers</li>
          <li>Gestion locative</li>
          <li>Expertise immobilière</li>
          {/* Ajouter ici d'autres activités proposées par votre agence immobilière */}
        </ul>
      </section>
      <section>
        <h2>Nos valeurs</h2>
        <ul>
          <li>Transparence</li>
          <li>Intégrité</li>
          <li>Écoute</li>
          <li>Qualité de service</li>
          {/* Ajouter ici d'autres valeurs de votre agence immobilière */}
        </ul>
      </section>
    </main>
  );
};

export default Contact;
