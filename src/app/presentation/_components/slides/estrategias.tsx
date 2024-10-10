//* Libraries imports
import Link from "next/link";
import Image from "next/image";

//* Components imports
import { Wrapper } from "@/components/wrapper";

export function Estrategias() {
  return (
    <section>
      <Wrapper>
        <div className="h-full w-full min-h-svh flex flex-col justify-center items-center gap-8">
          <div>
            <h2 className="text-5xl font-bold">
              Estrategias
            </h2>
          </div>

          <div className="w-full max-w-96 rounded-lg border-2 border-border p-4 bg-white">
            <ul className="list-disc list-inside text-xl text-start">
              <li>Automação</li>
              <li>Integração Contínua</li>
              <li>Testes baseados em risco</li>
              <li>Testes baseados em casos de uso</li>
              <li>Testes de regressão</li>
            </ul>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-4 border-2 border-border p-4 bg-white rounded-lg">
            <h3 className="text-3xl font-bold">
              Automação
            </h3>
            <span className="text-xl text-muted-foreground">
              Frameworks de automação de testes
            </span>
          </div>

          <div className="p-12 w-full grid grid-cols-4 gap-4">
            <div className="col-span-1 col-start-2 rounded-lg border-2 border-border bg-white overflow-hidden p-4">
              <div className="w-full">
                <span className="text-xl text-center">
                  Desktop
                </span>
                <ul className="list-disc list-inside text-xl text-start">
                  <Link href="https://www.cypress.io" passHref target="_blank">
                    <li>Cypress</li>
                  </Link>
                  <Link href="https://playwright.dev" passHref target="_blank">
                    <li>Playwright</li>
                  </Link>
                  <Link href="https://pptr.dev" passHref target="_blank">
                    <li>Puppeteer</li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="col-span-1 col-start-3 rounded-lg border-2 border-border bg-white overflow-hidden p-4">
              <div className="w-full">
                <span className="text-xl text-center">
                  Mobile
                </span>
                <ul className="list-disc list-inside text-xl text-start">
                  <Link href="https://www.cypress.io" passHref target="_blank">
                    <li>Cypress</li>
                  </Link>
                  <Link href="https://playwright.dev" passHref target="_blank">
                    <li>Playwright</li>
                  </Link>
                  <Link href="https://pptr.dev" passHref target="_blank">
                    <li>Puppeteer</li>
                  </Link>
                  <Link href="https://appium.io" passHref target="_blank">
                    <li>Appium</li>
                  </Link>
                  <Link href="https://maestro.mobile.dev" passHref target="_blank">
                    <li>Maestro</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-4 border-2 border-border p-4 bg-white rounded-lg">
            <h3 className="text-3xl font-bold">
              Integração Contínua
            </h3>
            <span className="text-xl text-muted-foreground">
              Os testes são executados automaticamente em diferentes ambientes.
            </span>
          </div>

          <div className="p-12 w-full flex justify-center items-center max-w-7xl">
            <div className="w-full max-w-2xl overflow-hidden rounded-lg border-2 border-border bg-white p-4">
              <Image
                src="/continuous-integration-2.avif"
                alt="continuous integration"
                width={1280}
                height={1280}
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-4 border-2 border-border p-4 bg-white rounded-lg">
            <h3 className="text-3xl font-bold">
              Testes baseados em risco
            </h3>
            <span className="text-xl text-muted-foreground">
              Testes baseados em risco são realizados para identificar problemas <br />
              antes que eles surjam.
            </span>
          </div>

          <div className="p-12 w-full flex justify-center items-center max-w-7xl">
            <div className="w-full max-w-2xl overflow-hidden rounded-lg border-2 border-border bg-white p-4">
              <Image
                src="/impact.png"
                alt="impacto"
                width={1280}
                height={1280}
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-4 border-2 border-border p-4 bg-white rounded-lg">
            <h3 className="text-3xl font-bold">
              Testes baseados em casos de uso
            </h3>
            <span className="text-xl text-muted-foreground">
              Testes baseados em casos de uso são realizados para identificar problemas <br />
              antes que eles surjam.
            </span>
          </div>

          <div className="p-12 w-full flex justify-center items-center max-w-7xl">
            <div className="w-full max-w-2xl overflow-hidden rounded-lg border-2 border-border bg-white p-4">
              <Image
                src="/use-case-testing.png"
                alt="use case testing"
                width={1280}
                height={1280}
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-4 border-2 border-border p-4 bg-white rounded-lg">
            <h3 className="text-3xl font-bold">
              Testes de regressão
            </h3>
            <span className="text-xl text-muted-foreground">
              Verificar se as alterações feitas no código afetam o comportamento <br />
              anterior.
            </span>
          </div>

          <div className="p-12 w-full flex justify-center items-center max-w-7xl">
            <div className="w-full max-w-2xl overflow-hidden rounded-lg border-2 border-border bg-white p-4">
              <Image
                src="/regression.jpg"
                alt="Regression"
                width={1280}
                height={1280}
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}