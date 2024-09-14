//* Libraries imports

//* Components imports

export function Estrategias() {
  return (
    <section>
      <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold">
          Estrategias
        </h2>

        <div className="pt-12 w-full max-w-96">
          <ul className="list-disc list-inside text-xl text-start">
            <li>Automação</li>
            <li>Integração Contínua</li>
            <li>Testes baseados em risco</li>
            <li>Testes baseados em casos de uso</li>
            <li>Testes de regressão</li>
          </ul>
        </div>
      </div>
    </section>
  );
}