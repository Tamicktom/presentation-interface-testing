//* Libraries imports

//* Components imports

export function Desafios() {
  return (
    <section>
      <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold">
          Desafios
        </h2>

        <div className="pt-12 w-full max-w-96">
          <ul className="list-disc list-inside text-xl text-start">
            <li>Complexidade das UI&apos;s modernas</li>
            <li>Manutenção de Testes Automatizados</li>
            <li>Sincronização e Tempo</li>
            <li>Variedade de Ambientes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}