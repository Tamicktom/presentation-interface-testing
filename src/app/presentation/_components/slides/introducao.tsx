//* Libraries imports
import { toast } from "sonner";

//* Components imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


export function Introducao() {
  const handleClick = () => {
    toast.success("Você clicou em mim!");
  };

  return (
    <>
      <section>
        <Wrapper>
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
        </Wrapper>
      </section>
      <section>
        <Wrapper>
          <h3 className="text-3xl font-bold">O que é uma interface (GUI)?</h3>
        </Wrapper>
        <Wrapper>
          <div className="pt-12 w-full max-w-96">
            <ul className="list-disc list-inside text-xl text-start">
              <li>CLI (Command Line Interface)</li>
              <li>TUI (Text User Interface)</li>
              <li>NUI (Natural User Interface)</li>
              <li>VUI (Voice User Interface)</li>
              <li>BUI (Brain-Computer Interface)</li>
              <li>HUI (Haptic User Interface)</li>
            </ul>
          </div>
        </Wrapper>
        <Wrapper>
          <div className="pb-12 w-full max-w-lg">
            <p className="text-xl text-center">
              GUI é a interface gráfica que interage com o usuário, é o ponto
              central da interação com o sistema.
            </p>
          </div>
          <div>
            <Button
              className="w-full active:scale-95 transition-all"
              onPointerDown={handleClick}
            >
              Clica em mim :3
            </Button>
          </div>
        </Wrapper>
      </section>
    </>
  );
}

function Wrapper(props: { children: React.ReactNode }) {
  return (
    <section>
      <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
        {props.children}
      </div>
    </section>
  );
}