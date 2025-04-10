import React, { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import {
  Wrench,
  Paintbrush2,
  Palette,
  MonitorSmartphone,
  Leaf,
  Droplet,
  Hammer,
  Camera,
  Menu,
  X
} from "lucide-react";
import Contato from "./components/Contato"; // ✅ Certo aqui

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-white text-gray-900 scroll-smooth">
      {/* Header com navbar responsiva */}
      <header className="sticky top-0 z-50 flex justify-between items-center p-6 shadow-md bg-white backdrop-blur-lg bg-opacity-90">
        <img src="/Logo Alltech Folha.png" alt="Alttech Logo" className="h-12" />

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6 text-sm font-semibold text-gray-700">
          <a href="#servicos" className="hover:text-alttechCyan transition-colors">Serviços</a>
          <a href="#sobre" className="hover:text-alttechCyan transition-colors">Sobre</a>
          <a href="#portfolio" className="hover:text-alttechCyan transition-colors">Portfólio</a>
          <a href="#contato" className="hover:text-alttechCyan transition-colors">Contato</a>
        </nav>

        {/* Redes sociais + Botão Mobile */}
  <div className="flex items-center gap-4">
    <a
      href="https://www.instagram.com/alltech_moz"
      target="_blank"
      rel="noopener noreferrer"
      className="text-alttechBlue hover:text-alttechCyan"
    >
      <Instagram size={22} />
    </a>
    <a
      href="https://web.facebook.com/alltechmoz"
      target="_blank"
      rel="noopener noreferrer"
      className="text-alttechBlue hover:text-alttechCyan"
    >
      <Facebook size={22} />
    </a> </div>

        {/* Botão Mobile */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Menu Mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-sm font-semibold text-gray-700">
          <a href="#servicos" className="block hover:text-alttechCyan" onClick={() => setMenuOpen(false)}>Serviços</a>
          <a href="#sobre" className="block hover:text-alttechCyan" onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#portfolio" className="block hover:text-alttechCyan" onClick={() => setMenuOpen(false)}>Portfólio</a>
          <a href="#contato" className="block hover:text-alttechCyan" onClick={() => setMenuOpen(false)}>Contato</a>
        </nav>
      )}

      {/* Hero */}
      <section className="text-center py-20 bg-gradient-to-r from-alttechBlue to-blue-800 text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Soluções em Tecnologia, Arte e Serviços
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          A Alttech oferece soluções completas para sua casa ou empresa
        </motion.p>
        <a
          href="#contato"
          className="inline-block bg-alttechCyan hover:bg-cyan-500 text-white px-6 py-2 rounded-full text-lg transition-colors shadow-lg"
        >
          Solicitar Orçamento
        </a>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <img
              src="/alltech1.jpg"
              alt="Equipe Alltech"
              className="rounded-2xl shadow-lg w-full object-cover max-h-[400px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <h2 className="text-3xl font-bold text-alttechBlue mb-4">Sobre a Alttech</h2>
            <p className="text-gray-700 mb-4">
              A <strong>Alttech</strong> é uma empresa multidisciplinar que une <span className="text-alttechCyan font-medium">tecnologia</span>, <span className="text-alttechCyan font-medium">arte</span> e <span className="text-alttechCyan font-medium">serviços</span> para oferecer soluções completas e personalizadas para casas, empresas e eventos.
            </p>
            <p className="text-gray-700 mb-4">
              Nossa missão é transformar ideias em realidade através de design criativo, inovação tecnológica e execução eficiente de serviços como pintura, jardinagem, limpeza, marcenaria, entre outros.
            </p>
            <p className="text-gray-700">
              Com uma equipe apaixonada e experiente, a Alttech entrega projetos com qualidade, pontualidade e um toque artístico que faz toda a diferença.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16 px-4 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-alttechBlue">Nossos Serviços</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Tecnologia", desc: "Desenvolvimento de software, suporte técnico, instalação e manutenção de redes e câmeras de segurança, computadores e celulares.", icon: <MonitorSmartphone /> },
            { title: "Design Gráfico", desc: "Criação de logotipos, panfletos, identidade visual.", icon: <Palette /> },
            { title: "Audiovisual", desc: "Produção e edição de vídeos e fotos para eventos sociais e empresariais.", icon: <Camera /> },
            { title: "Pintura", desc: "Serviços de pintura residencial e comercial com acabamento profissional.", icon: <Paintbrush2 /> },
            { title: "Jardinagem", desc: "Manutenção, paisagismo e embelezamento de jardins.", icon: <Leaf /> },
            { title: "Limpeza e Fumigação", desc: "Higienização completa de ambientes e controle de pragas.", icon: <Droplet /> },
            { title: "Marcenaria", desc: "Projetos personalizados de móveis e reformas.", icon: <Hammer /> },
            { title: "Electricidade", desc: "Projetos personalizados de instalação elétrica e reformas.", icon: <Hammer /> },
            { title: "Canalização", desc: "Projetos personalizados de canalização e reformas.", icon: <Hammer /> },
            { title: "Construção Civil", desc: "Construção e manutenção de pequenas obras, reformas e assistência técnica.", icon: <Hammer /> }
          ].map((servico, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 text-alttechBlue mb-2">
                <div className="bg-alttechCyan/10 p-2 rounded-full">{servico.icon}</div>
                <h3 className="text-xl font-semibold">{servico.title}</h3>
              </div>
              <p className="text-gray-600 text-sm pl-1">{servico.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfólio */}
      <section id="portfolio" className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-alttechBlue mb-12"
          >
            Portfólio
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Website Institucional", desc: "Desenvolvimento de site moderno para instituições.", img: "/portfolio/tech1.jpg" },
              { title: "Identidade Visual", desc: "Logo e branding, marketing para PME´s.", img: "/portfolio/design1.jpg" },
              { title: "Produção de Vídeo e Fotos", desc: "Vídeo e fotos institucionais, cobertura de eventos sociais e corporativos.", img: "/portfolio/video1.jpg" },
              { title: "Jardinagem Criativa", desc: "Transformação de quintal com paisagismo, vasos decorativos e mudas.", img: "/portfolio/jardim1.jpg" },
              { title: "Pintura de Edifícios", desc: "Projeto de pintura com cores personalizadas e acabamento profissional.", img: "/portfolio/pintura1.jpg" },
              { title: "Serviço de Limpeza", desc: "Limpeza pós-obra em edifícios, limpeza de manutenção de alto padrão.", img: "/portfolio/limpeza1.jpg" },
              { title: "Fumigação", desc: "Tratamento contra pragas em residências, escritórios e armazém industrial.", img: "/portfolio/fumigacao1.jpg" },
              { title: "Instalação Elétrica", desc: "Instalação e manutenção de sistemas elétricos residenciais e comerciais.", img: "/portfolio/instalacao1.jpg" },
              { title: "Manutenção de Sistemas de Frio", desc: "Manutenção de ar condicionado, geleiras e sistemas de refrigeração.", img: "/portfolio/reparacaoac1.jpg" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <Contato />

      <div className="mt-12 mb-10 text-center">
  <a
    href="https://wa.me/+258877114327" // Troque pelo seu número
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
  >
    Fale conosco no WhatsApp
  </a>
</div>



      {/* Rodapé */}
      <footer className="bg-alttechBlue text-white py-6 text-center text-sm">
        © {new Date().getFullYear()} Alttech - Arte Tecnológica e Consultória. Todos os direitos reservados.
      </footer>
    </main>
  );
}
