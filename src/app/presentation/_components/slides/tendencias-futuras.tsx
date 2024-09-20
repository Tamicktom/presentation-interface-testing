//* Libraries imports

//* Components imports

export function TendenciasFuturas() {
  return (
    <section>
      <div className="h-full w-full min-h-svh flex flex-col justify-center items-center gap-8">
        <h2 className="text-5xl font-bold">
          Tendencias Futuras
        </h2>

        <div className="w-full max-w-96 rounded-lg border-2 border-border p-4 bg-white">
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