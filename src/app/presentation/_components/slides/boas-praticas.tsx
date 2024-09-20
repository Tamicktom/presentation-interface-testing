//* Libraries imports

//* Components imports

export function BoasPraticas() {
  return (
    <section>
      <div className="h-full w-full min-h-svh flex flex-col justify-center items-center gap-8">
        <h2 className="text-5xl font-bold">
          Boas práticas
        </h2>

        <div className="w-full max-w-md rounded-lg border-2 border-border p-4 bg-white">
          <ul className="list-disc list-inside text-xl text-start">
            <li>Escrita clara e concisa</li>
            <li>Isolamento de testes</li>
            <li>Atualização regular dos scripts de teste</li>
            <li>Colaboração entre equipes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}