"use client";
//* Libraries imports
import { toast } from "sonner";
import Image from "next/image";

//* Components imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Wrapper } from "@/components/wrapper";
import { Video } from "@/components/video";

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

          {/* <div className="pt-12 w-full max-w-96">
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
          </div> */}
        </Wrapper>
      </section>
      <section>
        <Wrapper>
          <h3 className="text-3xl font-bold">O que é uma interface (GUI)?</h3>
        </Wrapper>
        <Wrapper>
          <div className="w-full">
            <div className="text-2xl text-start grid grid-cols-2 gap-8 p-12">
              <div className="flex flex-col items-center gap-2 w-full col-span-1 rounded-lg border-2 border-border p-4 bg-white">
                <Video src="/cli-video.webm" type="video/webm" />
                <span>CLI (Command Line Interface)</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-full col-span-1 rounded-lg border-2 border-border p-4 bg-white">
                <Image
                  src="/tui.gif"
                  alt="tui"
                  width={400}
                  height={400}
                  className="rounded-lg w-full"
                />
                <span>TUI (Text User Interface)</span>
              </div>
            </div>
          </div>
        </Wrapper>
        <Wrapper>
          <div className="rounded-lg border-2 border-border p-4 bg-white">
            <ul className="text-2xl text-start flex flex-col list-disc list-inside gap-2">
              <li>NUI (Natural User Interface)</li>
              <li>VUI (Voice User Interface)</li>
              <li>BUI (Brain User Interface)</li>
              <li>Entre outros...</li>
            </ul>
          </div>
        </Wrapper>
        <Wrapper>
          <div className="w-full max-w-lg border-2 border-border p-4 bg-white rounded-lg">
            <p className="text-xl text-center">
              GUI é a interface gráfica que interage com o usuário, é o ponto
              central da interação com o sistema.
            </p>
          </div>
        </Wrapper>
        <Wrapper>
          <div className="w-full max-w-7xl grid grid-cols-2 gap-4 p-12">
            <div className="col-span-1 rounded-lg border-2 border-border bg-white overflow-hidden">
              <Video
                src="/ui-video-1.mp4"
                type="video/mp4"
              />
            </div>
            <div className="col-span-1 rounded-lg border-2 border-border bg-white overflow-hidden">
              <Image
                src="/ui-2.jpg"
                alt="stripe website"
                width={1280}
                height={1280}
                className="size-full object-cover"
              />
            </div>
            <div className="col-span-1 rounded-lg border-2 border-border bg-white overflow-hidden max-h-96">
              <Image
                src="/ui-1.jpg"
                alt="stripe website"
                width={1280}
                height={1280}
                className="size-full object-cover"
              />
            </div>
            <div className="col-span-1 rounded-lg border-2 border-border bg-white overflow-hidden">
              <Image
                src="/stripe-website.png"
                alt="stripe website"
                width={1280}
                height={1280}
                className="size-full object-cover"
              />
            </div>
          </div>
        </Wrapper>
        <Wrapper>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col w-full justify-center items-center gap-4 border-2 border-border p-4 bg-white rounded-lg">
              <div className="w-full flex flex-col items-start justify-start gap-1">
                <Label htmlFor="name-input">Nome</Label>
                <Input id="name-input" placeholder="Nome" />
              </div>

              <div className="w-full flex flex-col items-start justify-start gap-1">
                <Label htmlFor="message-input">Mensagem</Label>
                <Textarea id="message-input" placeholder="Mensagem" />
              </div>

              <div className="w-full flex flex-col items-start justify-start gap-1">
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">Default</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">Comfortable</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="r3" />
                    <Label htmlFor="r3">Compact</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="w-full flex flex-row items-center justify-start gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">
                  Aceito os termos e condições
                </Label>
              </div>

              <Button
                className="w-full active:scale-95 transition-all max-w-64"
                onPointerDown={handleClick}
              >
                Clica em mim :3
              </Button>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}

