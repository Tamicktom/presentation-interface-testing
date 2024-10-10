"use client";
//* Libraries imports
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Wrapper(props: Props) {
  return (
    <section>
      <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
        {props.children}
      </div>
    </section>
  );
}