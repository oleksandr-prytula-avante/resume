import { Header } from "../components/Header";
import { LinesBackground } from "../components/LinesBackground/LinesBackground";
import { Links } from "../components/Links";
import { SectionDots } from "../components/SectionDots";

export function Main() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden px-16 pb-8 text-white">
      <LinesBackground />
      <div className="relative z-10 flex h-full flex-col">
        <Header />
        <main className="w-full flex-1 overflow-hidden">
          <div className="grid h-full grid-cols-[5%_40%_55%]">
            <section className="relative">
              <Links />
            </section>

            <section className="relative"></section>

            <section className="relative">
              <SectionDots />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
