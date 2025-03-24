"use client"; 
import { motion } from "framer-motion";

/**
 * Função auxiliar para separar o texto.
 * Se 'word' for true, ele separa por palavras (usando \b).
 * Caso contrário, separa em caracteres (incluindo espaços).
 */
function splitText(text, word = false) {
  if (word) {
    return String(text).split(/(?:\b)/u);
  }
  // Separar em todos os caracteres
  return String(text).split(/(?:)/u);
}

/**
 * Componente que anima o texto com efeito de "pulos" (Jumping Text).
 *
 * @param {string} text O texto que será animado.
 * @param {string} mode "word" (padrão) para animar palavra a palavra
 *                      ou "character" para caracter a caracter.
 * @param {string} className Classe(s) para estilização, ex.: "text-xl font-bold".
 */
export default function JumpingTextInstagram({
  text = "This is a jumping text effect",
  mode = "word",
  className,
}) {
  const isWordMode = mode === "word";
  const nodes = splitText(text, isWordMode);

  return (
    <div className={className} key={text}>
      {nodes.map((node, index) => (
        <motion.span
          key={index}
          initial={{ translateY: 30, rotate: -30, opacity: 0 }}
          animate={{
            opacity: [0, 0.5, 1],
            translateY: [30, -30, 0],
            rotate: [-30, 30, 0],
            transition: {
              type: "spring",
              damping: 10,
              mass: 2,
              // Delay para cada item, dependendo se é palavra ou caractere
              delay: (isWordMode ? 0.05 : 0.01) * index,
              // Tempo total de cada animação
              duration: nodes.length * 0.05,
            },
          }}
          className="inline-block origin-center"
        >
          {/* Se for um espaço, substitui por &nbsp; para evitar "colapso" no HTML */}
          {node === " " ? "\u00A0" : node}
        </motion.span>
      ))}
      {/* A tag abaixo garante que leitores de tela leiam o texto completo de forma acessível */}
      <span className="sr-only">{text}</span>
    </div>
  );
}
