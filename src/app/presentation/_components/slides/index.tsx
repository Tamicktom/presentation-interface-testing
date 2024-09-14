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
import { Frameworks } from "./frameworks";
import { Estrategias } from "./estrategias";

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
    // Your presentation is sized based on the width and height of
    // our parent element. Make sure the parent is not 0-height.
    <div className="reveal bg-background" ref={deckDivRef}>
      <div className="slides">
        <Capa />
        <Introducao />
        <TiposDeTestesDeUI />
        <Desafios />
        <Frameworks />
        <Estrategias />
      </div>
    </div>
  );
}