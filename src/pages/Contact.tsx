import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface FormState {
  username: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Nouveau state pour le message de succès


  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (response.ok) {
        setSuccessMessage('Votre message a bien été envoyé !'); // Définir le message de succès
        setForm({
          username: '',
          email: '',
          subject: '',
          message: '',
        }); // Réinitialiser le formulaire après la soumission réussie
        // Ajoutez ici la logique supplémentaire en fonction de la réponse du backend
      } else {
        console.error(
          "Erreur lors de l'envoi du formulaire:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null); // Effacer le message de succès après quelques secondes
        navigate('/'); // Rediriger l'utilisateur vers la page d'accueil
      }, 2000); // Temps en millisecondes (ici, 2 secondes)
      return () => clearTimeout(timer);
    }
  }, [successMessage, navigate]);

  return (
    <section className="bg-slate-50 py-20">
      <div className="bg-white rounded-2xl py-8 px-4 mx-auto lg:w-6/12 lg:py-8">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black">
          Contactez-nous !
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-black sm:text-xl">
          Nos équipes sont à votre écoute, n'hésitez pas à nous contacter !
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-black"
            >
              Nom complet
            </label>
            <input
              type="text"
              id="username"
              value={form.username}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Ajoutez votre nom complet"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Ajoutez votre adresse Email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Objet
            </label>
            <input
              type="text"
              id="subject"
              value={form.subject}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Quelle est votre demande ?"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Ajoutez votre demande..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:text-black hover:bg-white focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            Envoyer
          </button>
        </form>

        {successMessage && (
          <div className="mt-8 text-green text-3xl text-center">
            {successMessage}
          </div>
        )}

      </div>
    </section>
  );
};

export default Contact;