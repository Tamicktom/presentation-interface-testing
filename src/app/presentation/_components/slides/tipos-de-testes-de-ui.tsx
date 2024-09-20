//* Libraries imports

//* Components imports
import { Wrapper } from "@/components/wrapper";
import { Video } from "@/components/video";

export function TiposDeTestesDeUI() {
  return (
    <section>
      <Wrapper>
        <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
          <h2 className="text-5xl font-bold">
            Tipos de testes de UI
          </h2>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="w-full max-w-96 border-2 border-border p-4 bg-white rounded-lg">
              <ul className="list-disc list-inside text-xl text-start">
                <li>Acessibilidade</li>
                <li>Usabilidade</li>
                <li>Performance</li>
                <li>Responsividade</li>
                <li>Outros...</li>
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
      <Acessibilidade />
      <Usabilidade />
      <Performance />
      <Responsividade />
    </section>
  );
}

function Acessibilidade() {
  return (
    <>
      <Wrapper>
        <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
          <div className="flex flex-row items-center justify-center gap-4">
            <div
              style={{
                aspectRatio: '9 / 16'
              }}
              className="w-96"
            >
              <Video src="/video1.mp4" type="video/mp4" />
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-4 border-2 border-border p-4 bg-white rounded-lg">
            <div>
              <h3 className="text-3xl font-bold">
                Acessibilidade
              </h3>
              <span className="text-xl text-muted-foreground">
                Motivos para a Acessibilidade
              </span>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="w-full gap-4">
                <ul className="list-disc list-inside text-xl text-start">
                  <li>Inclusão</li>
                  <li>Cumprimento de normas e leis</li>
                  <li>Aumentar o alcance do público</li>
                  <li>Facilitar a experiência do usuário</li>
                  <li>Aumento na qualidade do produto</li>
                  <li>SEO (Search Engine Optimization)</li>
                  <li>Redução de custos a longo prazo</li>
                  <li>Acessibilidade em situações temporárias</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-4 border-2 border-border p-4 bg-white rounded-lg">
            <div>
              <h3 className="text-3xl font-bold">
                Acessibilidade
              </h3>
              <span className="text-xl text-muted-foreground">
                Como testar a Acessibilidade
              </span>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="w-full gap-4">
                <ul className="list-disc list-inside text-xl text-start">
                  <li>Testes com ferramentas de acessibilidade</li>
                  <li>Testes manuais com tecnologias assistivas</li>
                  <li>Revisão de código e Análise de marcação Semântica</li>
                  <li>Teste de contraste de cores</li>
                  <li>Testes com usuários reais com deficiência</li>
                  <li>Check de conformidade com as diretrizes da WCAG</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

function Usabilidade() {
  return (
    <></>
  );
}

function Performance() {
  return (
    <></>
  );
}

function Responsividade() {
  return (
    <></>
  );
}