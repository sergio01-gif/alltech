import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState(""); // <- Novo estado
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { nome, email, telefone, mensagem }; // <- Inclui telefone

    const response = await fetch("http://localhost:5000/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <section id="contato" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-alttechBlue mb-8"
        >
          Fale Conosco
        </motion.h2>

        <p className="text-center text-gray-600 mb-12">
          Preencha o formulário abaixo e retornaremos o mais breve possível.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-50 p-8 rounded-2xl shadow-md"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Nome</label>
              <input
                type="text"
                placeholder="Seu nome"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-alttechCyan focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="seu@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-alttechCyan focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium text-gray-700">Telefone</label>
              <input
                type="tel"
                placeholder="(+258) 00 000 0000"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-alttechCyan focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Mensagem</label>
            <textarea
              rows="5"
              placeholder="Digite sua mensagem"
              required
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-alttechCyan focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-alttechCyan text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-600 transition-colors"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
