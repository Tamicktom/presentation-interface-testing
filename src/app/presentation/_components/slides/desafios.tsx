//* Libraries imports
import Image from "next/image";
import { toast } from "sonner";

//* Components imports
import { Wrapper } from "@/components/wrapper";
import { Button } from "@/components/ui/button";

export function Desafios() {
  return (
    <section>
      <Wrapper>
        <div className="h-full w-full min-h-svh flex flex-col justify-center items-center gap-8">
          <h2 className="text-5xl font-bold">
            Desafios
          </h2>

          <div className="w-full max-w-lg rounded-lg border-2 border-border p-4 bg-white">
            <ul className="list-disc list-inside text-xl text-start">
              <li>Complexidade das UI&apos;s modernas</li>
              <li>Manutenção de Testes Automatizados</li>
              <li>Sincronização e Tempo</li>
              <li>Variedade de Ambientes</li>
            </ul>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
          <h3 className="text-5xl font-bold">
            Complexidade das UI&apos;s modernas
          </h3>

          <div className="w-full grid grid-cols-3 gap-4 p-12">
            <div className="col-span-1 rounded-lg border-2 border-border bg-white overflow-hidden">
              <Image
                src="/space-jam.png"
                alt="space jam"
                width={1280}
                height={1280}
                className="size-full object-cover"
              />
            </div>
            <div className="col-span-2 rounded-lg border-2 border-border bg-white overflow-hidden">
              <Image
                src="/figma.png"
                alt="space jam"
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
          <h3 className="text-5xl font-bold">
            Manutenção de Testes Automatizados
          </h3>

          <div className="w-full grid grid-cols-2 gap-4 p-12">
            <div className="col-span-1 rounded-lg border-2 border-border bg-white overflow-hidden">
              <Image
                src="/codigo-1.svg"
                alt="codigo 1"
                width={1280}
                height={1280}
                className="size-full object-cover"
              />
            </div>
            <div className="col-span-1 rounded-lg border-2 border-border bg-white overflow-hidden flex justify-center items-center">
              <Image
                src="/codigo-2.svg"
                alt="codigo 2"
                width={1280}
                height={1280}
                className="size-full object-cover"
              />
            </div>
          </div>

          <Button
            onClick={() => {
              toast.success("Você clicou em mim!");
            }}
          >
            Teste de UI
          </Button>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
          <h3 className="text-5xl font-bold">
            Manutenção de Testes Automatizados
          </h3>

          <div className="w-full grid grid-cols-2 gap-4 p-12">
            <div className="col-span-1 rounded-lg border-2 border-border bg-white overflow-hidden">
              <Image
                src="/codigo-3.svg"
                alt="codigo 3"
                width={1280}
                height={1280}
                className="size-full object-cover"
              />
            </div>
            <div className="col-span-1 rounded-lg border-2 border-border bg-white overflow-hidden flex justify-center items-center">
              <Image
                src="/codigo-4.svg"
                alt="codigo 4"
                width={1280}
                height={1280}
                className="size-full object-cover"
              />
            </div>
          </div>

          <Button
            id="banana-button"
            onClick={() => {
              toast.success("Você clicou em mim!");
            }}
          >
            Banana
          </Button>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
          <h3 className="text-5xl font-bold">
            Sincronização e Tempo
          </h3>

          <div className="w-full grid grid-cols-2 gap-4 p-12">
            <div className="col-span-2 rounded-lg border-2 border-border bg-white overflow-hidden">
              <Image
                src="/delay1.svg"
                alt="delay 1"
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
          <h3 className="text-5xl font-bold">
            Sincronização e Tempo
          </h3>

          <div className="w-full grid grid-cols-2 gap-4 p-12">
            <div className="col-span-2 rounded-lg border-2 border-border bg-white overflow-hidden">
              <Image
                src="/delay2.svg"
                alt="delay 2"
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
          <h3 className="text-5xl font-bold">
            Variedades de ambientes
          </h3>

          <div className="w-full flex gap-4 p-12 justify-center items-center">
            <div className="rounded-lg border-2 border-border bg-white overflow-hidden">
              <Image
                src="/devices.webp"
                alt="Devices"
                width={1280}
                height={1280}
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section >
  );
}