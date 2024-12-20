"use client";
//* Libraries imports
import { useEffect, useRef } from "react";
import Reveal from 'reveal.js';

//* Styles imports
import 'reveal.js/dist/reveal.css';

//* Components imports
import { Capa } from "./capa";
import { Introducao } from "./introducao";
import { TiposDeTestesDeUI } from "./tipos-de-testes-de-ui";
import { Desafios } from "./desafios";
import { Estrategias } from "./estrategias";
import { BoasPraticas } from "./boas-praticas";
import { TendenciasFuturas } from "./tendencias-futuras";
import { Conclusao } from "./conclusao";
import { Artigo } from "./artigo";
import { BackgroundDots } from "@/components/background-dots";

export function Slides() {
  const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current || !deckDivRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current, {
      transition: "slide",
      // other config options
      disableLayout: true
    });

    deckRef.current.initialize().then(() => {
      // good place for event handlers and plugin setups
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  return (
    <>
      <div className="reveal bg-background" ref={deckDivRef}>
        <div className="slides">
          <Capa />
          <Introducao />
          <TiposDeTestesDeUI />
          <Desafios />
          <Estrategias />
          <BoasPraticas />
          {/* <Frameworks /> */}
          {/* <ExemploPratico /> */}
          <TendenciasFuturas />
          <Conclusao />
          <Artigo />
        </div>
      </div>
      <BackgroundDots />
    </>
  );
}