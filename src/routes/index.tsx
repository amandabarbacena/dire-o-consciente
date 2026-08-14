import { createFileRoute } from "@tanstack/react-router";
import heroTexture from "@/assets/hero-texture.jpg";
import { whatsappUrl } from "@/config/site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sessão de Direção Terapêutica | Psicóloga Amanda Barbacena" },
      {
        name: "description",
        content:
          "Encontro clínico individual e online de 60 minutos para mulheres que dão conta de tudo. Você sai com uma direção prática e recebe um documento escrito em até 48h.",
      },
      {
        property: "og:title",
        content: "Sessão de Direção Terapêutica | Psicóloga Amanda Barbacena",
      },
      {
        property: "og:description",
        content:
          "Um encontro clínico online para entender por que você continua responsável por tudo — e o que fazer diferente. Direção prática registrada por escrito.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Sessão de Direção Terapêutica",
          serviceType: "Atendimento psicológico online",
          provider: {
            "@type": "Person",
            name: "Amanda Barbacena",
            jobTitle: "Psicóloga clínica (CRP 01/26914)",
          },
          areaServed: "BR",
          description:
            "Encontro clínico individual e online de aproximadamente 60 minutos, com construção de direção prática e envio de documento personalizado por escrito em até 48 horas.",
        }),
      },
    ],
  }),
});

function CTA({
  id,
  children,
  variant = "solid",
}: {
  id: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex min-h-13 items-center justify-center rounded-sm px-7 py-4 text-[0.95rem] font-medium tracking-wide transition-colors duration-200";
  const styles =
    variant === "solid"
      ? "bg-ink text-ink-foreground hover:bg-accent"
      : "border border-ink/25 text-ink hover:border-accent hover:text-accent";
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
      <section className="relative">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pt-14 pb-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-16 md:px-10 md:pt-24 md:pb-24">
          <div>
            <p className="eyebrow">Sessão de Direção Terapêutica</p>
            <h1 className="mt-6 text-[2.1rem] leading-[1.08] text-ink sm:text-5xl md:text-[3.6rem]">
              Você não está sobrecarregada por incompetência.
              <span className="block italic text-accent">
                Está sobrecarregada porque tudo continua passando por você.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-muted-foreground">
              Um encontro clínico individual e online, de aproximadamente 60 minutos, para
              entender o que sustenta esse padrão na sua vida — e sair com uma direção
              prática do que observar e do que fazer diferente. Depois do encontro, você
              recebe tudo organizado por escrito.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTA id="cta-whatsapp-hero">Quero agendar minha sessão</CTA>
              <span className="text-sm text-muted-foreground">
                Conversa pelo WhatsApp, direto com o consultório.
              </span>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Amanda Barbacena · Psicóloga clínica · CRP 01/26914 · Atendimento online
            </p>
          </div>

          <div className="relative -mx-6 md:mx-0">
            <img
              src={heroTexture}
              alt="Textura de linho claro em tons de areia, referência visual do atendimento clínico de Amanda Barbacena"
              width={1200}
              height={1504}
              className="h-[280px] w-full object-cover md:h-[560px]"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="rule-line" />
      </div>

      {/* IDENTIFICAÇÃO */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="eyebrow">Isso é sobre você?</p>
            <h2 className="mt-5 text-[1.8rem] leading-tight text-ink md:text-[2.4rem]">
              Você divide as tarefas. Mas continua sendo quem lembra, acompanha e garante.
            </h2>
          </div>
          <ul className="space-y-5 text-[1.02rem] leading-relaxed text-foreground/85">
            {[
              "Você delega, mas segue conferindo mentalmente se aquilo vai acontecer.",
              "Pergunta de novo se já foi feito — e às vezes refaz, porque ficou diferente do que precisava.",
              "Antecipa o problema antes que ele apareça, porque esperar dá mais trabalho do que resolver.",
              "Carrega a logística invisível da casa, da família e do trabalho ao mesmo tempo.",
              "Diz “deixa que eu faço” antes mesmo de perceber que disse.",
              "Mesmo quando alguém ajuda, o pensar continua sendo seu.",
            ].map((item) => (
              <li key={item} className="flex gap-4 border-b border-border pb-5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground">
          Nada disso é falta de capacidade. Costuma ser o oposto: você ficou tão boa em
          perceber, antecipar e resolver que passou a ser o ponto por onde tudo precisa
          passar.
        </p>
      </section>

      {/* COMPREENSÃO DO PROBLEMA */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <p className="eyebrow text-ink-foreground/55">Por que isso não se resolve sozinho</p>
          <h2 className="mt-5 max-w-3xl text-[1.85rem] leading-tight md:text-[2.6rem]">
            O problema não é ser responsável. É quando responsabilidade vira controle,
            antecipação e execução.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              {
                t: "Organizar melhor não basta",
                d: "Agenda nova, lista nova, aplicativo novo. A carga muda de forma, mas continua sendo sua — porque o padrão não está na organização, está na resposta.",
              },
              {
                t: "Dividir tarefa não é dividir responsabilidade",
                d: "Você passou a execução adiante, mas seguiu com o monitoramento. O custo mental permanece quase intacto.",
              },
              {
                t: "Assumir tem alívio imediato",
                d: "Fazer você mesma encerra rápido o desconforto de esperar, de ver o erro do outro ou de lidar com o atraso. E o que alivia agora tende a se repetir depois.",
              },
            ].map((c) => (
              <div key={c.t} className="border-t border-ink-foreground/20 pt-6">
                <h3 className="text-xl">{c.t}</h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-foreground/70">
                  {c.d}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-2xl text-[1.02rem] leading-relaxed text-ink-foreground/75">
            Isso não é culpa sua, nem culpa de quem está ao seu redor. É um padrão que se
            manteve porque funcionou por muito tempo. E padrão que se aprende também pode
            ser mapeado — e mudado com direção.
          </p>
        </div>
      </section>

      {/* O QUE É A SDT */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="eyebrow">A proposta</p>
            <h2 className="mt-5 text-[1.85rem] leading-tight text-ink md:text-[2.5rem]">
              A Sessão de Direção Terapêutica
            </h2>
            <p className="mt-5 text-[1.02rem] leading-relaxed text-muted-foreground">
              Um encontro clínico individual e online, conduzido por Amanda Barbacena, com
              um objetivo definido: entender a fita completa da sua dificuldade e sair dali
              com uma direção clara — não com conselhos genéricos.
            </p>
            <div className="mt-8 hidden md:block">
              <CTA id="cta-whatsapp-middle">Quero agendar minha sessão</CTA>
            </div>
          </div>

          <ol className="space-y-8">
            {[
              {
                n: "01",
                t: "Compreensão aprofundada",
                d: "Uma anamnese cuidadosa da dificuldade concreta que te trouxe até aqui: onde acontece, com quem, desde quando, em que situações aperta mais.",
              },
              {
                n: "02",
                t: "Mapeamento dos padrões",
                d: "Quais comportamentos estão envolvidos, o que os dispara e quais respostas suas podem estar mantendo — ou agravando — a situação.",
              },
              {
                n: "03",
                t: "Construção da direção",
                d: "O que observar, o que testar e o que fazer diferente a partir dali, ajustado à sua rotina real e não a um cenário ideal.",
              },
              {
                n: "04",
                t: "Documento escrito em até 48h",
                d: "Você recebe um documento personalizado com a síntese do encontro, os principais achados e os próximos passos. Não é bônus: é parte da sessão, para você consultar depois, quando a vida voltar ao ritmo de sempre.",
              },
            ].map((s) => (
              <li key={s.n} className="grid grid-cols-[auto_minmax(0,1fr)] gap-5 border-b border-border pb-7">
                <span className="font-display text-2xl text-accent">{s.n}</span>
                <div className="min-w-0">
                  <h3 className="text-xl text-ink">{s.t}</h3>
                  <p className="mt-2 text-[1rem] leading-relaxed text-muted-foreground">
                    {s.d}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-10 md:hidden">
          <CTA id="cta-whatsapp-middle-mobile">Quero agendar minha sessão</CTA>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE + INDEPENDÊNCIA */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-10 md:py-24">
          <div>
            <p className="eyebrow">O que você leva</p>
            <h2 className="mt-5 text-[1.7rem] leading-tight text-ink md:text-[2.2rem]">
              Uma hora de escuta clínica — e uma direção que não se perde depois
            </h2>
            <ul className="mt-7 space-y-4 text-[1.02rem] leading-relaxed text-foreground/85">
              <li>Encontro individual e online de aproximadamente 60 minutos.</li>
              <li>Leitura clínica dos padrões que sustentam a sua sobrecarga.</li>
              <li>Uma direção prática, específica para a sua situação.</li>
              <li>
                Documento personalizado por escrito, enviado em até 48 horas após a sessão.
              </li>
            </ul>
          </div>
          <div className="self-start border-l-2 border-accent pl-6 md:pl-8">
            <h3 className="text-xl text-ink">
              E se eu não quiser começar uma terapia?
            </h3>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-foreground/85">
              Então não precisa. A Sessão de Direção Terapêutica é um serviço completo e
              independente: ela começa e termina nesse encontro. Você pode receber a
              direção construída e seguir sozinha a partir dali.
            </p>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-foreground/85">
              Não é sessão experimental, não é triagem e não é etapa obrigatória de nada.
              Se, ao longo do encontro, Amanda identificar que outro tipo de suporte pode
              fazer sentido para a sua situação, isso é apenas conversado com você —
              nunca condição para a sessão acontecer.
            </p>
          </div>
        </div>
      </section>

      {/* AUTORIDADE */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <p className="eyebrow">Quem conduz</p>
        <div className="mt-6 grid gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
          <h2 className="text-[1.85rem] leading-tight text-ink md:text-[2.5rem]">
            Amanda Barbacena, psicóloga clínica
            <span className="block italic text-accent">CRP 01/26914</span>
          </h2>
          <div className="space-y-5 text-[1.03rem] leading-relaxed text-foreground/85">
            <p>
              Amanda atende mulheres adultas e trabalha com repertório das abordagens
              comportamentais e cognitivas, apoiada em práticas baseadas em evidências. Na
              prática, isso significa um olhar concreto: menos interpretação vaga sobre
              quem você é, mais análise do que acontece, do que você faz e do que se repete.
            </p>
            <p>
              Antes da Psicologia, construiu carreira no ambiente corporativo e atuou
              durante anos em uma grande instituição financeira, inclusive em posição de
              gestão. Tem também formação em Relações Internacionais e MBA pela FGV.
            </p>
            <p>
              Essa trajetória amplia o repertório para conduzir conversas sobre alta
              responsabilidade, cobrança, desempenho, decisão e gestão — os contextos em que
              esse padrão de “eu garanto que aconteça” costuma ficar mais caro.
            </p>
          </div>
        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:px-10 md:py-28">
          <p className="eyebrow text-ink-foreground/55">Próximo passo</p>
          <h2 className="mt-6 text-[2rem] leading-[1.12] md:text-[3rem]">
            Se você chegou até aqui, provavelmente já reconheceu o padrão. O próximo passo é
            entender o que fazer com ele.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-foreground/75">
            O agendamento começa por uma conversa no WhatsApp: você conta brevemente o que
            está acontecendo e recebe as orientações sobre valores, horários disponíveis e
            como funciona o encontro.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              id="cta-whatsapp-final"
              data-cta="cta-whatsapp-final"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 items-center justify-center rounded-sm bg-ink-foreground px-8 py-4 text-[0.95rem] font-medium tracking-wide text-ink transition-colors duration-200 hover:bg-accent hover:text-accent-foreground"
            >
              Falar com o consultório no WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-ink-foreground/55">
            Atendimento online · Sessão individual de aproximadamente 60 minutos · Documento
            escrito em até 48 horas
          </p>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-10 pb-28 text-sm text-muted-foreground md:px-10 md:pb-10">
        <div className="rule-line mb-6" />
        <p>Amanda Barbacena — Psicóloga clínica · CRP 01/26914 · Atendimento online.</p>
        <p className="mt-2 max-w-2xl">
          A Sessão de Direção Terapêutica não substitui acompanhamento psicológico ou
          médico continuado, não fornece diagnóstico e não é um serviço de urgência. Em
          situações de risco imediato, procure o CVV (188) ou um serviço de emergência.
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
          className="flex min-h-12 w-full items-center justify-center rounded-sm bg-ink text-[0.95rem] font-medium text-ink-foreground"
        >
          Agendar minha sessão no WhatsApp
        </a>
      </div>
    </main>
  );
}
