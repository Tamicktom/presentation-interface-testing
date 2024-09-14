//* Libraries imports

//* Components imports

export function Metodologias() {
  return (
    <section>
      <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold">
          Metodologias
        </h2>

        <div className="pt-12 w-full max-w-96">
          <ul className="list-disc list-inside text-xl text-start">
            <li>Testes Baseados em Cenários</li>
            <li>Testes de Regressão</li>
            <li>Testes de Stress e Performance</li>
            <li>Testes exploratórios</li>
          </ul>
        </div>
      </div>
    </section>
  );
}