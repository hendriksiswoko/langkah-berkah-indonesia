import { sections } from "@/config/sections";
import { sectionComponents } from "@/components/sections";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {sections
          .filter((s) => s.enabled)
          .map((s) => {
            const Section = sectionComponents[s.id];
            return <Section key={s.id} anchor={s.anchor} />;
          })}
      </main>
      <Footer />
    </>
  );
}
