const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
  const { nome, email, telefone, mensagem } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail", // ou outro serviço
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Contato Alltech" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `Mensagem de ${nome}`,
    text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nMensagem:\n${mensagem}`,
    replyTo: email,
  };
  

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Mensagem enviada com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao enviar a mensagem." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
