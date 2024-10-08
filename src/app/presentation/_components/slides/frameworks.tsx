//* Libraries imports

//* Components imports

export function Frameworks() {
  return (
    <section>
      <div className="h-full w-full min-h-svh flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold">
          Frameworks
        </h2>

        <div className="pt-12 w-full max-w-96">
          <ul className="list-disc list-inside text-xl text-start">
            <li>Selenium</li>
            <li>Cypress</li>
            <li>Playwright</li>
            <li>Puppeteer</li>
          </ul>
        </div>
      </div>
    </section>
  );
}