"use client";

export const ButtonWhatsap = () => {
  const handleWhatsappClick = () => {
    const phoneNumber = "+5521987557253";
    const message = "Olá, quero saber mais sobre a plataforma!"; // Substitua pelo número de telefone desejado

    // Abre o link do WhatsApp no navegador
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div>
      <button
        onClick={handleWhatsappClick}
        className="bg-green-500 px-6 py-4 rounded-md font-bold cursor-pointer"
      >
        Fala agora com a gente pelo Whatsapp
      </button>
    </div>
  );
};


