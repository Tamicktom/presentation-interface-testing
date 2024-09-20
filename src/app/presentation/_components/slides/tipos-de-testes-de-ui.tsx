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
    <>
      <Wrapper>
        <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
          <div className="flex flex-row items-center justify-center gap-4">
            <h3 className="font-bold text-3xl">Usabilidade</h3>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-4 border-2 border-border p-4 bg-white rounded-lg">
            <h3 className="text-3xl font-bold">
              Usabilidade
            </h3>
            <span className="text-xl text-muted-foreground">
              Como funciona?
            </span>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-4 border-2 border-border p-4 bg-white rounded-lg">
            <div>
              <h3 className="text-3xl font-bold">
                Usabilidade
              </h3>
              <span className="text-xl text-muted-foreground">
                Perguntas
              </span>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="w-full gap-4">
                <ul className="list-disc list-inside text-xl text-start">
                  <li>O sistema é fácil de aprender e usar?</li>
                  <li>Os usuários conseguem completar suas tarefas de forma eficaz?</li>
                  <li>Quais obstáculos os usuários enfrentam durante a interação?</li>
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
                Usabilidade
              </h3>
              <span className="text-xl text-muted-foreground">
                Objetivos
              </span>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="w-full gap-4">
                <ul className="list-disc list-inside text-xl text-start">
                  <li>Avaliar a Facilidade de Uso</li>
                  <li>Identificar Problemas de Navegação</li>
                  <li>Melhorar a Experiência do Usuário</li>
                  <li>Validar Design e Funcionalidades</li>
                  <li>Aumentar a Satisfação do Usuário</li>
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
                Usabilidade
              </h3>
              <span className="text-xl text-muted-foreground">
                Tipos de testes
              </span>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="w-full gap-4">
                <ul className="list-disc list-inside text-xl text-start">
                  <li>Moderados</li>
                  <li>Não Moderados</li>
                  <li>Ambiente Controlado (Laboratório)</li>
                  <li>Remotos</li>
                  <li>Guerrilha</li>
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
                Usabilidade
              </h3>
              <span className="text-xl text-muted-foreground">
                Como conduzir testes de usabilidade
              </span>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="w-full gap-4">
                <ol className="list-decimal list-inside text-xl text-start">
                  <li>Definir Objetivos</li>
                  <li>Selecionar Tarefas Relevantes</li>
                  <li>Escolher Participantes</li>
                  <li>Preparar o Ambiente de Teste</li>
                  <li>Conduzir o Teste</li>
                  <li>Analisar os Resultados</li>
                  <li>Relatar as Descobertas e Recomendações</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

function Performance() {
  return (
    <>
      <Wrapper>
        <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
          <div className="flex flex-row items-center justify-center gap-4">
            <h3 className="font-bold text-3xl">Performance</h3>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-4 border-2 border-border p-4 bg-white rounded-lg">
            <h3 className="text-3xl font-bold">
              Performance
            </h3>
            <span className="text-xl text-muted-foreground">
              Como funciona?
            </span>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-4 border-2 border-border p-4 bg-white rounded-lg">
            <div>
              <h3 className="text-3xl font-bold">
                Performance
              </h3>
              <span className="text-xl text-muted-foreground">
                Definir Objetivos dos Testes de Performance
              </span>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="w-full gap-4">
                <ul className="list-disc list-inside text-xl text-start">
                  <li>Identificar Métricas-Chave</li>
                  <li>Estabelecer Padrões de Performance</li>
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
                Performance
              </h3>
              <span className="text-xl text-muted-foreground">
                Ferramentas
              </span>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="w-full gap-4">
                <ul className="list-disc list-inside text-xl text-start">
                  <li>Google Lighthouse</li>
                  <li>WebPageTest</li>
                  <li>Chrome DevTools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

function Responsividade() {
  return (
    <>
      <Wrapper>
        <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
          <div className="flex flex-row items-center justify-center gap-4">
            <h3 className="font-bold text-3xl">Responsividade</h3>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-4 border-2 border-border p-4 bg-white rounded-lg">
            <h3 className="text-3xl font-bold">
              Responsividade
            </h3>
            <span className="text-xl text-muted-foreground">
              Como funciona?
            </span>
          </div>
        </div>
      </Wrapper>
    </>
  );
}