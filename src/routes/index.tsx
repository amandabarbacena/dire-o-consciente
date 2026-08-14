import { createFileRoute } from "@tanstack/react-router";
import heroWoman from "@/assets/hero-woman.jpg";
import notesStill from "@/assets/notes-still.jpg";
import amandaPortrait from "@/assets/amanda-portrait.jpg";
import { whatsappUrl } from "@/config/site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sessão de Direção Terapêutica | Amanda Barbacena" },
      {
        name: "description",
        content:
          "Um encontro clínico online de 60 minutos para mulheres que dão conta de tudo. Você sai com uma direção prática — e recebe tudo por escrito em até 48h.",
      },
      {
        property: "og:title",
        content: "Sessão de Direção Terapêutica | Amanda Barbacena",
      },
      {
        property: "og:description",
        content:
          "Um encontro clínico online para entender por que tudo continua passando por você — e o que fazer diferente.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function CTA({
  id,
  children,
  variant = "solid",
}: {
  id: string;
  children: React.ReactNode;
  variant?: "solid" | "light";
}) {
  const base =
    "inline-flex min-h-13 items-center justify-center rounded-full px-8 py-4 text-[0.95rem] font-medium tracking-wide transition-colors duration-200";
  const styles =
    variant === "solid"
      ? "bg-ink text-ink-foreground hover:bg-accent"
      : "bg-ink-foreground text-ink hover:bg-accent hover:text-accent-foreground";
  return (
    <a
      id={id}
      data-cta={id}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
}

function Index() {
  return (
    <main className="bg-background">
      {/* HERO */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-16 pb-20 md:grid-cols-2 md:gap-20 md:px-10 md:pt-32 md:pb-32">
        <div>
          <p className="eyebrow">Sessão de Direção Terapêutica</p>
          <h1 className="mt-8 text-[2.3rem] leading-[1.05] text-ink sm:text-5xl md:text-[3.7rem]">
            Tudo continua
            <span className="block italic text-accent">passando por você.</span>
          </h1>
          <p className="mt-8 max-w-md text-[1.08rem] leading-[1.8] text-muted-foreground">
            Um encontro online de uma hora para entender esse padrão — e sair com
            uma direção clara do que fazer diferente.
          </p>
          <div className="mt-10">
            <CTA id="cta-whatsapp-hero">Quero agendar minha sessão</CTA>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Amanda Barbacena · CRP 01/26914 · Atendimento online
          </p>
        </div>

        <img
          src={heroWoman}
          alt="Mulher sentada junto à janela, com uma xícara nas mãos, em um momento de pausa"
          width={1280}
          height={1600}
          className="h-[420px] w-full rounded-[2rem] object-cover md:h-[620px]"
        />
      </section>

      {/* IDENTIFICAÇÃO */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center md:px-10 md:py-36">
        <p className="eyebrow">Isso é sobre você?</p>
        <h2 className="mx-auto mt-8 max-w-2xl text-[1.9rem] leading-[1.25] text-ink md:text-[2.6rem]">
          Você divide as tarefas. Mas continua sendo quem lembra, acompanha e
          garante.
        </h2>
        <ul className="mx-auto mt-14 grid max-w-3xl gap-10 text-left sm:grid-cols-2">
          {[
            "Você delega, mas segue conferindo mentalmente.",
            "Antecipa o problema antes que ele apareça.",
            "Diz “deixa que eu faço” sem nem perceber.",
            "Mesmo com ajuda, o pensar continua sendo seu.",
          ].map((item) => (
            <li key={item} className="text-[1.05rem] leading-[1.8] text-foreground/80">
              <span className="mb-3 block h-px w-10 bg-accent/50" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* MECANISMO */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-36">
          <h2 className="text-[1.8rem] leading-[1.3] md:text-[2.5rem]">
            O problema não é ser responsável. É quando responsabilidade vira
            controle.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-[1.05rem] leading-[1.9] text-ink-foreground/70">
            Agenda nova, lista nova, tarefa dividida. A carga muda de forma, mas
            continua sendo sua — porque o padrão não está na organização, está na
            resposta.
          </p>
        </div>
      </section>

      {/* A PROPOSTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
        <div className="max-w-xl">
          <p className="eyebrow">A proposta</p>
          <h2 className="mt-8 text-[1.9rem] leading-[1.2] text-ink md:text-[2.6rem]">
            Uma hora. Uma direção. Registrada por escrito.
          </h2>
        </div>

        <div className="mt-16 grid gap-14 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Compreensão",
              d: "Uma escuta cuidadosa da dificuldade concreta que te trouxe até aqui.",
            },
            {
              n: "02",
              t: "Mapeamento",
              d: "O que dispara o padrão e quais respostas suas o mantêm.",
            },
            {
              n: "03",
              t: "Direção",
              d: "O que observar e testar a partir dali, na sua rotina real.",
            },
          ].map((s) => (
            <div key={s.n}>
              <span className="font-display text-3xl text-accent">{s.n}</span>
              <h3 className="mt-4 text-xl text-ink">{s.t}</h3>
              <p className="mt-3 text-[1rem] leading-[1.8] text-muted-foreground">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DOCUMENTO */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:gap-20 md:px-10 md:py-28">
          <img
            src={notesStill}
            alt="Caderno aberto com caneta sobre mesa de linho ao lado de um vaso com eucalipto"
            width={1408}
            height={1008}
            loading="lazy"
            className="h-[280px] w-full rounded-[2rem] object-cover md:h-[420px]"
          />
          <div>
            <p className="eyebrow">O que você leva</p>
            <h2 className="mt-6 text-[1.7rem] leading-[1.25] text-ink md:text-[2.2rem]">
              Um documento personalizado em até 48 horas
            </h2>
            <p className="mt-6 max-w-md text-[1.05rem] leading-[1.9] text-foreground/80">
              A síntese do encontro, os principais achados e os próximos passos —
              para consultar depois, quando a vida voltar ao ritmo de sempre.
            </p>
          </div>
        </div>
      </section>

      {/* AUTORIDADE */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[0.8fr_1fr] md:gap-20 md:px-10 md:py-36">
        <img
          src={amandaPortrait}
          alt="Retrato da psicóloga Amanda Barbacena em seu consultório"
          width={1008}
          height={1200}
          loading="lazy"
          className="h-[420px] w-full rounded-[2rem] object-cover md:h-[540px]"
        />
        <div>
          <p className="eyebrow">Quem conduz</p>
          <h2 className="mt-6 text-[1.8rem] leading-[1.2] text-ink md:text-[2.4rem]">
            Amanda Barbacena
            <span className="block italic text-accent">CRP 01/26914</span>
          </h2>
          <p className="mt-6 max-w-md text-[1.05rem] leading-[1.9] text-foreground/80">
            Psicóloga clínica, atende mulheres adultas com repertório das
            abordagens comportamentais e cognitivas e prática baseada em
            evidências.
          </p>
          <p className="mt-5 max-w-md text-[1.05rem] leading-[1.9] text-foreground/80">
            Antes da Psicologia, construiu carreira no ambiente corporativo,
            inclusive em gestão. Formação em Relações Internacionais e MBA pela
            FGV.
          </p>
        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-2xl px-6 py-24 text-center md:px-10 md:py-32">
          <h2 className="text-[2rem] leading-[1.15] md:text-[2.9rem]">
            Você já reconheceu o padrão.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[1.05rem] leading-[1.9] text-ink-foreground/70">
            O agendamento começa por uma conversa no WhatsApp, direto com o
            consultório.
          </p>
          <div className="mt-12 flex justify-center">
            <CTA id="cta-whatsapp-final" variant="light">
              Falar no WhatsApp
            </CTA>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-3xl px-6 py-14 pb-28 text-center text-sm leading-relaxed text-muted-foreground md:px-10 md:pb-14">
        <p>Amanda Barbacena — Psicóloga clínica · CRP 01/26914 · Atendimento online.</p>
        <p className="mt-3">
          A Sessão de Direção Terapêutica não substitui acompanhamento continuado
          e não é um serviço de urgência. Em situações de risco imediato, procure
          o CVV (188).
        </p>
      </footer>

      {/* CTA fixo mobile */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 py-3 backdrop-blur md:hidden">
        <a
          id="cta-whatsapp-sticky"
          data-cta="cta-whatsapp-sticky"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 w-full items-center justify-center rounded-full bg-ink text-[0.95rem] font-medium text-ink-foreground"
        >
          Agendar no WhatsApp
        </a>
      </div>
    </main>
  );
}
