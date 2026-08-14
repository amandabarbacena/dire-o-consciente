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
          "Um encontro online de cerca de 60 minutos para sair com uma direção prática do que fazer quando o padrão se repete — com documento personalizado em até 48 horas.",
      },
      {
        property: "og:title",
        content: "Sessão de Direção Terapêutica | Amanda Barbacena",
      },
      {
        property: "og:description",
        content:
          "Você já entendeu muita coisa sobre si. Aqui você recebe uma direção prática para a hora em que o padrão aparece.",
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
    "inline-flex min-h-13 items-center justify-center rounded-full px-8 py-4 text-center text-[0.95rem] font-medium tracking-wide transition-colors duration-200";
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

const microcopy = "Encontro online · Cerca de 60 minutos · Direção por escrito em até 48 horas";

const reconhecimento = [
  {
    n: "01",
    d: "O dia termina, mas sua cabeça continua organizando o que precisa acontecer amanhã.",
  },
  {
    n: "02",
    d: "Você percebe o que pode dar errado antes de todo mundo — e começa a resolver antes mesmo de algo acontecer.",
  },
  {
    n: "03",
    d: "Você delega, mas continua acompanhando, conferindo ou refazendo para garantir que fique como precisa ficar.",
  },
  {
    n: "04",
    d: "Quando algo dá errado, a primeira coisa que aparece não é raiva: é a sensação de que era mais rápido ter feito sozinha.",
  },
  {
    n: "05",
    d: "Você já leu, já ouviu, já entendeu. Mas na hora em que o padrão aparece, ele acontece de novo.",
  },
];

const passos = [
  {
    n: "01",
    t: "Informações",
    d: "Você fala com a nossa equipe pelo WhatsApp, tira suas dúvidas e recebe as informações para o agendamento.",
  },
  {
    n: "02",
    t: "Encontro",
    d: "Em cerca de 60 minutos, fazemos a leitura da dificuldade concreta que você traz e o mapeamento do padrão que a mantém.",
  },
  {
    n: "03",
    t: "Direção por escrito",
    d: "Em até 48 horas você recebe um documento personalizado com a síntese do encontro, os principais achados e os próximos passos.",
  },
];

const faq = [
  {
    q: "Isso é uma primeira sessão de terapia?",
    a: "Não. A SDT é um encontro único e completo em si mesmo, com objetivo e entrega próprios. Não inaugura um processo, não exige continuidade e não pressupõe acompanhamento.",
  },
  {
    q: "Quanto tempo dura o encontro?",
    a: "Cerca de 60 minutos, online, com horário combinado antes pelo WhatsApp.",
  },
  {
    q: "E se eu já faço terapia?",
    a: "Sem problema. A SDT trabalha uma dificuldade pontual e não interfere no seu processo. Se quiser, você pode levar o documento para a sua terapeuta.",
  },
  {
    q: "Como recebo as informações e agendo?",
    a: "Pelo WhatsApp. Você fala com a nossa equipe, tira dúvidas, escolhe o horário e recebe tudo o que precisa antes do encontro.",
  },
  {
    q: "O que eu levo depois do encontro?",
    a: "Um documento personalizado com a síntese do que foi trabalhado, os principais achados e orientações práticas para os próximos dias. É seu, para consultar quando o padrão aparecer.",
  },
  {
    q: "E se eu quiser continuar depois?",
    a: "A direção recebida já é suficiente para começar. Se fizer sentido continuar, isso pode ser conversado depois — mas nada aqui depende disso.",
  },
  {
    q: "A SDT resolve tudo de uma vez?",
    a: "Não. Ela mostra onde o padrão se sustenta e o que fazer diferente quando ele aparece. A mudança começa quando você consegue agir de outro jeito na vida real.",
  },
];

function Index() {
  return (
    <main className="bg-background">
      {/* HERO */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-16 pb-20 md:grid-cols-2 md:gap-20 md:px-10 md:pt-28 md:pb-28">
        <div>
          <p className="eyebrow">Sessão de Direção Terapêutica</p>
          <h1 className="mt-8 text-[2.1rem] leading-[1.1] text-ink sm:text-[2.7rem] md:text-[3.2rem]">
            Você já entendeu muita coisa sobre si.
            <span className="block italic text-accent">
              Mas, na hora, ainda não sabe como fazer diferente.
            </span>
          </h1>
          <p className="mt-8 max-w-md text-[1.08rem] leading-[1.8] text-muted-foreground">
            A Sessão de Direção Terapêutica é um encontro único e online. Em
            cerca de 60 minutos, olhamos para a dificuldade concreta que se
            repete no seu dia — e você sai com uma direção prática do que fazer
            quando ela aparecer de novo.
          </p>
          <p className="mt-5 max-w-md text-[1.08rem] leading-[1.8] text-muted-foreground">
            Em até 48 horas, você recebe tudo isso por escrito, em um documento
            personalizado.
          </p>
          <div className="mt-10">
            <CTA id="cta-whatsapp-hero">
              Quero agendar minha Sessão de Direção Terapêutica
            </CTA>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">{microcopy}</p>
        </div>

        <img
          src={heroWoman}
          alt="Mulher sentada junto à janela, com uma xícara nas mãos, em um momento de pausa"
          width={1280}
          height={1600}
          className="h-[420px] w-full rounded-[2rem] object-cover md:h-[620px]"
        />
      </section>

      {/* SOBRECARGA */}
      <section className="bg-sand">
        <div className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
          <p className="eyebrow">A sobrecarga que não termina com o dia</p>
          <h2 className="mt-8 text-[1.8rem] leading-[1.25] text-ink md:text-[2.4rem]">
            Você funciona. Resolve. Continua. E não consegue descansar por
            inteiro.
          </h2>
          <p className="mt-8 text-[1.05rem] leading-[1.9] text-foreground/80">
            Por fora, está tudo funcionando. O cansaço aparece quando ninguém
            está olhando: pensando, revisando, antecipando, garantindo que nada
            escape.
          </p>
          <p className="mt-8 border-l border-accent/50 pl-6 text-[1.15rem] italic leading-[1.7] text-ink">
            “O dia pode até terminar. Mas, dentro da sua cabeça, parece que nada
            termina de verdade.”
          </p>
        </div>
      </section>

      {/* RECONHECIMENTO */}
      <section className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
        <p className="eyebrow">Talvez você se reconheça aqui</p>
        <h2 className="mt-8 text-[1.8rem] leading-[1.25] text-ink md:text-[2.4rem]">
          O dia termina, mas sua mente continua trabalhando.
        </h2>
        <ul className="mt-14 space-y-10">
          {reconhecimento.map((item) => (
            <li key={item.n} className="grid gap-3 sm:grid-cols-[auto_1fr] sm:gap-8">
              <span className="font-display text-2xl text-accent">{item.n}</span>
              <p className="text-[1.05rem] leading-[1.8] text-foreground/80">
                {item.d}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* MECANISMO */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
          <p className="eyebrow text-ink-foreground/60">
            Você não precisa de mais informação
          </p>
          <h2 className="mt-8 text-[1.8rem] leading-[1.3] md:text-[2.4rem]">
            Precisa de uma direção que funcione justamente na hora em que o
            padrão se repete.
          </h2>
          <p className="mt-8 text-[1.05rem] leading-[1.9] text-ink-foreground/70">
            Entender por que a sobrecarga acontece já é parte do caminho. Mas a
            parte mais difícil vem depois: reconhecer o padrão enquanto ele
            acontece e conseguir responder de outro jeito.
          </p>
          <p className="mt-6 text-[1.05rem] leading-[1.9] text-ink-foreground/70">
            É por isso que compreender o padrão é importante, mas não basta. A
            mudança começa quando você consegue ver a direção do que observar,
            interromper e começar a fazer diferente na vida real.
          </p>
        </div>
      </section>

      {/* A SDT */}
      <section className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
        <p className="eyebrow">Sessão de Direção Terapêutica</p>
        <h2 className="mt-8 text-[1.8rem] leading-[1.25] text-ink md:text-[2.4rem]">
          Uma direção clara para começar a agir diferente na vida real.
        </h2>
        <p className="mt-8 text-[1.05rem] leading-[1.9] text-foreground/80">
          A SDT é um encontro único e completo em si mesmo, pensado para
          transformar o que você já percebe sobre si em uma direção prática que
          dá para aplicar no seu dia.
        </p>

        <div className="mt-14 space-y-12">
          <div>
            <p className="eyebrow">01 Durante o encontro</p>
            <p className="mt-4 text-[1.05rem] leading-[1.8] text-foreground/80">
              Em cerca de 60 minutos, fazemos a leitura da dificuldade concreta
              que você traz e o mapeamento do padrão envolvido: o que dispara, o
              que você faz em seguida e o que acaba mantendo a situação como
              está.
            </p>
          </div>
          <div>
            <p className="eyebrow">02 Em até 48 horas</p>
            <p className="mt-4 text-[1.05rem] leading-[1.8] text-foreground/80">
              Você recebe um documento personalizado com a síntese do que foi
              trabalhado, os principais achados e orientações práticas. Dá para
              voltar nele sempre que precisar — inclusive meses depois.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <CTA id="cta-whatsapp-middle">
            Quero agendar minha Sessão de Direção Terapêutica
          </CTA>
          <p className="mt-6 text-sm text-muted-foreground">{microcopy}</p>
        </div>
      </section>

      {/* DOCUMENTO / ENTREGA COMPLETA */}
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
            <p className="eyebrow">Uma entrega completa em si mesma</p>
            <h2 className="mt-6 text-[1.7rem] leading-[1.25] text-ink md:text-[2.2rem]">
              A SDT faz sentido mesmo que nada venha depois.
            </h2>
            <p className="mt-6 text-[1.05rem] leading-[1.9] text-foreground/80">
              Não é uma triagem, não é uma primeira sessão de terapia e não abre
              um processo. É um encontro com começo, meio e fim — e uma entrega
              que fica com você.
            </p>
            <p className="mt-5 text-[1.05rem] leading-[1.9] text-foreground/80">
              Ao final, você sai sabendo o que observar, o que interromper e por
              onde começar. Se quiser seguir depois, isso é escolha sua — nunca
              condição.
            </p>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <p className="eyebrow">Como funciona</p>
        <h2 className="mt-8 text-[1.8rem] leading-[1.2] text-ink md:text-[2.4rem]">
          Três passos simples.
        </h2>
        <div className="mt-16 grid gap-14 md:grid-cols-3">
          {passos.map((p) => (
            <div key={p.n}>
              <span className="font-display text-3xl text-accent">{p.n}</span>
              <h3 className="mt-4 text-xl text-ink">{p.t}</h3>
              <p className="mt-3 text-[1rem] leading-[1.8] text-muted-foreground">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* AUTORIDADE */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 md:grid-cols-[0.8fr_1fr] md:gap-20 md:px-10 md:pb-32">
        <img
          src={amandaPortrait}
          alt="Retrato da psicóloga Amanda Barbacena"
          width={1008}
          height={1200}
          loading="lazy"
          className="h-[420px] w-full rounded-[2rem] object-cover md:h-[540px]"
        />
        <div>
          <p className="eyebrow">Quem conduzirá seu encontro</p>
          <h2 className="mt-6 text-[1.8rem] leading-[1.2] text-ink md:text-[2.3rem]">
            Eu sou Amanda Barbacena
            <span className="block italic text-accent">CRP 01/26914</span>
          </h2>
          <p className="mt-6 text-[1.05rem] leading-[1.9] text-foreground/80">
            Sou psicóloga clínica e atendo mulheres adultas que dão conta de
            tudo — e que, por isso mesmo, raramente param para olhar para o
            próprio funcionamento.
          </p>
          <p className="mt-5 text-[1.05rem] leading-[1.9] text-foreground/80">
            Antes da Psicologia, construí carreira no ambiente corporativo,
            inclusive em gestão. Formação em Relações Internacionais e MBA pela
            FGV. Trabalho com abordagens comportamentais e cognitivas e prática
            baseada em evidências.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sand">
        <div className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
          <p className="eyebrow">Dúvidas frequentes</p>
          <h2 className="mt-8 text-[1.8rem] leading-[1.2] text-ink md:text-[2.3rem]">
            Antes de agendar.
          </h2>
          <dl className="mt-14 space-y-10">
            {faq.map((item) => (
              <div key={item.q}>
                <dt className="text-[1.05rem] font-medium text-ink">{item.q}</dt>
                <dd className="mt-3 text-[1.02rem] leading-[1.85] text-foreground/80">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-2xl px-6 py-24 text-center md:px-10 md:py-32">
          <p className="eyebrow text-ink-foreground/60">
            Uma direção para fazer diferente
          </p>
          <h2 className="mt-8 text-[1.9rem] leading-[1.2] md:text-[2.7rem]">
            Você já entendeu o padrão. Agora precisa saber como agir quando ele
            aparece.
          </h2>
          <p className="mx-auto mt-8 max-w-md text-[1.05rem] leading-[1.9] text-ink-foreground/70">
            Se esse é o seu momento, fale com a nossa equipe pelo WhatsApp. Você
            tira suas dúvidas e recebe as informações para agendar sua Sessão de
            Direção Terapêutica — sem compromisso de continuidade.
          </p>
          <div className="mt-12 flex justify-center">
            <CTA id="cta-whatsapp-final" variant="light">
              Quero agendar minha Sessão de Direção Terapêutica
            </CTA>
          </div>
          <p className="mt-6 text-sm text-ink-foreground/60">{microcopy}</p>
        </div>
      </section>

      <footer className="mx-auto max-w-3xl px-6 py-14 pb-28 text-center text-sm leading-relaxed text-muted-foreground md:px-10 md:pb-14">
        <p>Amanda Barbacena — Psicóloga clínica · CRP 01/26914 · Atendimento online.</p>
        <p className="mt-3">
          Atenção: este site e o WhatsApp de agendamento não oferecem atendimento
          imediato em situações de emergência. Em caso de risco, ligue para o CVV
          (188). Em caso de emergência, procure o hospital mais próximo ou o SAMU
          (192).
        </p>
        <p className="mt-3">© 2026 Amanda Barbacena</p>
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
