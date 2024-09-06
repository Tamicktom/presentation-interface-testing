//* Libraries imports

//* Components imports
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Capa() {

  const username = "tamicktom";
  const src = `https://github.com/${username}.png`;

  return (
    <section>
      <h1 className="text-5xl font-bold">Testes de interface</h1>

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