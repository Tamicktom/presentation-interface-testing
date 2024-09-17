//* Libraries imports

//* Components imports

export function TendenciasFuturas() {
  return (
    <section>
      <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold">
          Tendencias Futuras
        </h2>

        <div className="pt-12 w-full max-w-96">
          <ul className="list-disc list-inside text-xl text-start">
            <li>Inteligência artificial</li>
            <li>Testes de Voz e Interfaces Naturais</li>
            <li>Realidade Aumentada e Virtual</li>
          </ul>
        </div>
      </div>
    </section>
  );
}