//* Libraries imports

//* Components imports

export function Introducao() {
  return (
    <section>
      <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold">
          Introdução
        </h2>

        <div className="pt-12 w-full max-w-96">
          <ul className="list-disc list-inside text-xl text-start">
            <li>O que é uma interface (GUI)?</li>
            <li>Papel da GUI na UX</li>
          </ul>
        </div>

        <div className="pt-12 w-full max-w-96">
          <ul className="list-disc list-inside text-xl text-start">
            <li>O que é teste de GUI?</li>
            <li>Como funciona?</li>
            <li>Por que usar?</li>
          </ul>
        </div>
      </div>
    </section>
  );
}