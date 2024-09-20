//* Libraries imports
import Link from "next/link";

//* Components imports
import { Button } from "@/components/ui/button";

export function Artigo() {
  return (
    <section>
      <div className="h-full w-full min-h-svh flex flex-col justify-center items-center gap-8">
        <h2 className="text-5xl font-bold">
          Artigo
        </h2>

        <div className="flex flex-col items-center justify-center gap-4 border-2 border-border p-4 bg-white rounded-lg">
          <div className="flex flex-col items-center justify-center gap-4">
            <span>
              A deep learning-based automated framework for functional User Interface testing
            </span>
            <span className="text-muted-foreground">
              Outubro de 2022
            </span>
            <span>
              Zubair Khaliq, Sheikh Umar Farooq, Dawood Ashraf Khan
            </span>
          </div>
          <Link href="https://www.sciencedirect.com/science/article/abs/pii/S0950584922001070" target="_blank">
            <Button>
              ScienceDirect
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}