"use client"
import { useState } from "react";

export default function Contact() {

  const [value, setValue] = useState('')
  const [message, setMessage] = useState('')
  const [mail, setMail] = useState('')
   const handMail = () => {
  
    setValue(value)
    setMail(mail)
    setMessage(message)
    const email = "chicowebdev@gmail.com";
  
   window.open(
  `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent('Message depuis le site')}&body=${encodeURIComponent(message)}`,
  "_blank"
);

    
  }

  const handWathsapp = () => {
    const phoneNumber = "2250586247542"; // Numéro sans le "+" (ex : France +33)
    const defaultMessage = "Bonjour, je suis intéressé par vos services, j'aimerais avoir plus d'information sur votre commande ou réservation !.";
    const message = encodeURIComponent(defaultMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  }

  return (
    <div id="contact" className="flex flex-col gap-6 min-h-screen md:flex-row container mx-auto py-16 px-8 md:px-4 lg:px-2">
      <h1 className="text-3xl px-3 mb-2 md:text-4xl text-gray-900 md:px-6 font-bold md:mb-4 ">Contact</h1>
      <form className="max-w-md mx-auto space-y-4">
        <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Votre nom" className="w-full p-3 border border-indigo-600 text-gray-800 rounded shadow-md shadown-gray-700" />
        <input value={mail} onChange={(e) => setMail(e.target.value)} type="email" placeholder="Votre e‑mail" className="w-full p-3 border rounded border-indigo-600 text-gray-800 rounded shadow-md shadown-gray-700" />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Votre message" className="w-full p-3 border rounded h-32 border-indigo-600 text-gray-800 rounded shadow-md shadown-gray-700" />
        <div className="flex justify-between items-center">
          <button onClick={handMail} className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded">Envoyer</button>
          <button onClick={handWathsapp} className="rounded-full py-3 px-6 shadow-md shadown-white bg-green-500 text-white">
            whatsapp {'>>>'}
          </button>
        </div>
      </form>
      
    </div>
  );
}
