//* Libraries imports

//* Components imports
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlurIn } from "@/components/text-animations/blurin";

export function Capa() {

  const username = "tamicktom";
  const src = `https://github.com/${username}.png`;

  return (
    <section className="flex flex-col items-center justify-center relative h-full p-8">
      <BlurIn>Testes de interface</BlurIn>

      <div className="flex justify-center items-center p-4 border border-border rounded-lg w-fit gap-4">
        <Avatar className="size-16">
          <AvatarImage src={src} />
          <AvatarFallback className="uppercase">
            {username.charAt(0)}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <h2 className="text-xl font-bold">Henrique Ângelo</h2>
        </div>
      </div>
    </section>
  );
}