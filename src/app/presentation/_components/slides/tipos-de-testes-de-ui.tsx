//* Libraries imports

//* Components imports
import { Video } from "@/components/video";

export function TiposDeTestesDeUI() {
  return (
    <section>
      <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold">
          Tipos de testes de UI
        </h2>

        <div className="pt-12 w-full max-w-96">
          <ul className="list-disc list-inside text-xl text-start">
            <li>Acessibilidade</li>
            <li>Design</li>
            <li>Usabilidade</li>
            <li>Performance</li>
            <li>Responsividade</li>
            <li>Aceitação do usuário (UAT)</li>
            <li>Exploratórios</li>
          </ul>
        </div>

        <div
          style={{
            aspectRatio: '9 / 16'
          }}
          className="w-80"
        >
          <Video src="/video1.mp4" />
        </div>
      </div>
    </section>
  );
}