"use client"; 
// Se estiver usando Next.js 13 com o App Router (pasta "app/") – isso garante que o código rode no cliente
// Se estiver usando Next.js 12 (pasta "pages/"), pode remover esse "use client"

import { useState, useEffect } from "react";

export default function Typewriter() {
  // As frases que você quer que apareçam em sequência
  const lines = [
    "Software Developer",
    "Machine Learning Engineer",
    "Back-end Developer",
    "Front-end Developer",
    "Full-stack Developer",
    "Data Scientist",
  ];

  // Índice da frase atual
  const [lineIndex, setLineIndex] = useState(0);

  // Texto exibido no momento (parte da frase que já foi "digitada")
  const [text, setText] = useState("");

  // Indica se estamos removendo caracteres (apagando)
  const [isDeleting, setIsDeleting] = useState(false);

  // Velocidade de digitação (ms por caractere)
  const TYPING_SPEED = 150;

  // Velocidade de remoção (ms por caractere)
  const DELETING_SPEED = 50;

  // Pausa após terminar de digitar antes de começar a apagar
  const PAUSE_ON_COMPLETE = 1500; // 1 segundo

  useEffect(() => {
    const currentFullText = lines[lineIndex];

    let timer;

    const handleType = () => {
      if (!isDeleting) {
        // Estamos digitando
        const nextText = currentFullText.slice(0, text.length + 1);
        setText(nextText);

        // Se terminou de digitar a frase toda, aguarda um pouco e então começa a deletar
        if (nextText === currentFullText) {
          setTimeout(() => setIsDeleting(true), PAUSE_ON_COMPLETE);
        }
      } else {
        // Estamos apagando
        const nextText = currentFullText.slice(0, text.length - 1);
        setText(nextText);

        // Se apagamos tudo, muda para a próxima linha e volta a digitar
        if (nextText === "") {
          setIsDeleting(false);
          setLineIndex((prev) => (prev + 1) % lines.length);
        }
      }
    };

    // Define a velocidade (digitando ou apagando)
    const time = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    timer = setTimeout(handleType, time);

    return () => clearTimeout(timer);
    // Reexecuta este effect quando o texto ou o estado de isDeleting ou lineIndex mudarem
  }, [text, isDeleting, lineIndex, lines]);

  // Aqui exibimos o texto atual + um <span> para o cursor piscando
  return (
    <div style={{ fontSize: "24px" }}>
      {text}
      <span className="blinking-cursor" />
    </div>
  );
}
