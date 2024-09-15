//* Libraries imports

//* Components imports

export function BoasPraticas() {
  return (
    <section>
      <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold">
          Boas práticas
        </h2>

        <div className="pt-12 w-full max-w-96">
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