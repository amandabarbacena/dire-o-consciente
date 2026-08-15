import { createFileRoute } from "@tanstack/react-router";
import heroOverwhelm from "@/assets/hero-overwhelm.jpg";
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
          "Encontro online único de cerca de 60 minutos para entender por que tudo continua dependendo de você — e sair com uma direção prática por escrito em até 48 horas.",
      },
      {
        property: "og:title",
        content: "Você dá conta de tudo — e é exatamente esse o problema",
      },
      {
        property: "og:description",
        content:
          "Sessão de Direção Terapêutica: um encontro clínico único, online, com mapeamento do seu padrão e direção prática registrada por escrito.",
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

const cenaDoDia: { hora: string; texto: string }[] = [
  { hora: "06:40", texto: "Você acorda já revisando mentalmente o dia de todo mundo." },
  { hora: "10:15", texto: "Delega uma tarefa e, dez minutos depois, checa se saiu como você precisa." },
  { hora: "14:30", texto: "Refaz o que voltou diferente. É mais rápido do que explicar de novo." },
  { hora: "19:00", texto: "Em casa, começa o segundo turno: o que ninguém viu que precisava ser feito." },
  { hora: "23:10", texto: "O corpo para. A cabeça continua organizando o amanhã." },
];


const reconhecimento = [
  {
    n: "01",
    d: "Você até delega mas continua acompanhando, conferindo, lembrando e, no fim, refazendo.",
  },
  {
    n: "02",
    d: "“Deixa que eu faço” sai da sua boca antes mesmo de você pensar. É mais rápido, é mais garantido, é menos desgastante do que esperar.",
  },
  {
    n: "03",
    d: "Você tem a sensação de que, se não for você, ninguém faz direito. E essa sensação vem acompanhada de cansaço e de culpa por pensar assim.",
  },
  {
    n: "04",
    d: "Enquanto existe algo pendente, você não descansa por inteiro. O corpo até para mas a cabeça continua administrando.",
  },
  {
    n: "05",
    d: 'Você antecipa o que "pode dar errado" e já começa a resolver antes mesmo que aconteça.',
  },
  {
    n: "06",
    d: "Você já entendeu o ciclo. Já leu, já ouviu, já falou sobre isso. E, na hora em que ele aparece, você segue fazendo tudo igual.",
  },
];

const hoje = [
  "Mente em alerta o tempo todo",
  "A sensação de que tudo depende de você",
  "A necessidade de resolver antes de qualquer outra coisa",
  "Microgestão do que já era responsabilidade de outra pessoa",
  "Exaustão que não passa com folga nem com férias",
];

const caminho = [
  "Distinguir com clareza o que realmente depende de você",
  "Tolerar que o outro faça de outra maneira",
  "Deixar que cada um lide com as próprias consequências",
  "Escolher quando intervir, em vez de agir no automático",
  "Usar o autoconhecimento sem ter que sustentar tudo e todos",
];

const entrega = [
  {
    n: "01",
    t: "Como o seu ciclo de exaustão funciona",
    d: "O que dispara, o que você faz em seguida e qual alívio imediato isso traz — o mecanismo, na sua realidade, não em teoria.",
  },
  {
    n: "02",
    t: "O que sustenta o padrão",
    d: "Onde o controle entra como forma de evitar o desconforto de algo não sair do seu jeito, e como isso aumenta a carga em vez de diminuir.",
  },
  {
    n: "03",
    t: "O que observar e o que interromper",
    d: "Os sinais concretos que antecedem o “deixa que eu faço” e o ponto exato em que dá para fazer diferente.",
  },
  {
    n: "04",
    t: "Por onde começar nos próximos dias",
    d: "Uma direção prática, escrita para a sua rotina — não um conselho genérico.",
  },
];

const passos = [
  {
    n: "01",
    t: "WhatsApp",
    d: "Você fala com a nossa equipe, tira dúvidas e recebe as informações para agendar.",
  },
  {
    n: "02",
    t: "Encontro",
    d: "Cerca de 60 minutos, online e individual, com a leitura da dificuldade concreta e o mapeamento do padrão.",
  },
  {
    n: "03",
    t: "Direção por escrito",
    d: "Em até 48 horas chega o documento personalizado com a síntese, os achados e os próximos passos.",
  },
];

const paraQuem = [
  "Você funciona bem por fora e está exausta por dentro.",
  "Você quer parar de ser a central de controle da casa, da família e do trabalho.",
  "Você já entende bastante sobre si e quer saber o que fazer com isso.",
  "Você quer um encontro objetivo, com entrega concreta e sem compromisso de continuidade.",
];

const naoEhPara = [
  "Quem procura atendimento de urgência ou situação de risco.",
  "Quem quer um processo terapêutico contínuo agora — a SDT não é isso.",
  "Quem espera uma solução pronta sem olhar para o próprio funcionamento.",
];

const faq = [
  {
    q: "Isso é terapia?",
    a: "É um encontro clínico, conduzido por psicóloga, mas não é um processo de terapia. A SDT é única, tem objetivo definido e entrega própria: mapear um padrão específico e devolver uma direção prática por escrito. Não inaugura acompanhamento e não exige continuidade.",
  },
  {
    q: "E se eu já faço terapia?",
    a: "Sem problema. A SDT trabalha uma dificuldade pontual e não interfere no seu processo. Se quiser, você pode levar o documento para a sua terapeuta.",
  },
  {
    q: "Uma sessão resolve tudo?",
    a: "Não. Ela mostra como o ciclo se forma na sua vida e o que fazer diferente quando ele aparecer. A mudança acontece quando você começa a agir de outro jeito na vida real — e é justamente para essa hora que a direção serve.",
  },
  {
    q: "Vou precisar contar minha vida toda?",
    a: "Não. O encontro parte de uma dificuldade concreta que se repete no seu dia. A conversa vai até onde for necessário para entender o padrão que a mantém.",
  },
  {
    q: "O documento é personalizado mesmo?",
    a: "Sim. Ele é escrito depois do seu encontro, a partir do que foi trabalhado com você: síntese, principais achados e orientações práticas. Não existe modelo pronto.",
  },
  {
    q: "Como agendo?",
    a: "Pelo WhatsApp. Você fala com a nossa equipe, tira dúvidas, recebe as informações e escolhe o horário.",
  },
  {
    q: "E se eu quiser continuar depois?",
    a: "A direção recebida já é suficiente para começar. Se fizer sentido seguir, isso pode ser conversado depois — mas nada aqui depende disso.",
  },
];

function Index() {
  return (
    <main className="bg-background">
      {/* HERO */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-16 pb-20 md:grid-cols-2 md:gap-20 md:px-10 md:pt-28 md:pb-28">
        <div>
          <p className="text-[0.75rem] uppercase tracking-[0.18em] text-muted-foreground">
            Amanda Barbacena <span className="mx-1.5">·</span> Psicóloga de mulheres
          </p>
          <p className="eyebrow mt-5">Sessão de Direção Terapêutica</p>
          <h1 className="mt-8 text-[2.1rem] leading-[1.1] text-ink sm:text-[2.7rem] md:text-[3.2rem]">
            Você dá conta de tudo.
            <span className="block italic text-accent">
              O problema é que tudo continua dependendo de você.
            </span>
          </h1>
          <p className="mt-8 max-w-md text-[1.08rem] leading-[1.8] text-muted-foreground">
            A Sessão de Direção Terapêutica é um encontro online, único e
            individual. Em cerca de 60 minutos, olhamos para o ciclo que mantém
            você antecipando, monitorando e corrigindo tudo. Você sai sabendo
            como ele funciona e como começar a interrompê-lo.
          </p>
          <p className="mt-5 max-w-md text-[1.08rem] leading-[1.8] text-muted-foreground">
            Em até 48 horas, essa direção chega por escrito, em um documento
            personalizado para consultar na hora em que o padrão aparecer.
          </p>
          <div className="mt-10">
            <CTA id="cta-whatsapp-hero">
              Quero agendar minha Sessão de Direção Terapêutica
            </CTA>
          </div>
          <p className="mt-6 text-[0.6rem] whitespace-nowrap text-muted-foreground sm:text-[0.72rem]">{microcopy}</p>
        </div>

        <img
          src={heroOverwhelm}
          alt="Mulher exausta à mesa de trabalho, com laptop, caderno e xícara, em luz suave de manhã"
          width={1280}
          height={1600}
          className="h-[420px] w-full rounded-[2rem] object-cover md:h-[620px]"
        />
      </section>

      {/* A CENA DA EXAUSTÃO */}
      <section className="relative overflow-hidden bg-sand">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-accent/20"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-accent/15"
        />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <p className="eyebrow">A EXAUSTÃO QUE NUNCA TERMINA</p>

          <div className="mt-10 grid gap-14 md:grid-cols-[1.05fr_0.95fr] md:gap-20">
            {/* Coluna esquerda: fala + texto */}
            <div>
              <h2 className="text-[1.8rem] leading-[1.25] text-ink md:text-[2.6rem]">
                <span className="text-accent">“</span>Se eu não fizer, ninguém
                faz. E, se faz, não fica do jeito que eu quero.
                <span className="text-accent">”</span>
              </h2>

              <p className="mt-8 text-[1.05rem] leading-[1.9] text-foreground/80">
                Você antecipa o que pode dar errado, monitora o que já delegou,
                corrige o que voltou diferente e ainda executa o que sobrou. Por
                fora, tudo funciona. Por dentro, a cabeça não desliga: às onze
                da noite você ainda está organizando o amanhã de todo mundo.
              </p>

              <div className="mt-10 rounded-[1.5rem] border border-accent/20 bg-background/70 p-7 backdrop-blur-sm">
                <p className="eyebrow">O que quase ninguém enxerga</p>
                <p className="mt-4 text-[1.05rem] leading-[1.9] text-foreground/80">
                  Essa dor é real, e as suas justificativas também são. As
                  pessoas ao seu redor de fato fazem diferente, demoram,
                  esquecem. Só que existe um mecanismo, muitas vezes sustentado
                  por você sem perceber, que mantém esse ciclo girando:{" "}
                  <span className="text-ink">
                    evitar o mal-estar de algo não sair do jeito que você
                    precisa que saia.
                  </span>
                </p>
              </div>
            </div>

            {/* Coluna direita: o dia em ciclo */}
            <div className="md:pt-4">
              <div className="rounded-[2rem] bg-ink p-8 text-ink-foreground md:p-10">
                <p className="eyebrow text-ink-foreground/60">
                  Um dia qualquer
                </p>
                <ul className="mt-8 space-y-7">
                  {cenaDoDia.map((item, i) => (
                    <li key={item.hora} className="relative flex gap-5">
                      <span className="w-14 shrink-0 pt-[0.15rem] font-sans text-xs tracking-[0.14em] text-ink-foreground/50">
                        {item.hora}
                      </span>
                      <span className="relative flex flex-col items-center">
                        <span className="mt-[0.45rem] h-2 w-2 rounded-full bg-clay" />
                        {i < cenaDoDia.length - 1 && (
                          <span className="mt-2 w-px flex-1 bg-ink-foreground/20" />
                        )}
                      </span>
                      <span className="text-[0.98rem] leading-[1.7] text-ink-foreground/85">
                        {item.texto}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-9 border-t border-ink-foreground/15 pt-6 text-xs tracking-[0.16em] uppercase text-ink-foreground/55">
                  Amanhã, de novo.
                </p>
              </div>

              <p className="mt-10 border-l-2 border-clay pl-6 text-[1.15rem] italic leading-[1.7] text-ink">
                “A sobrecarga não vem só da quantidade de coisas que você faz.
                Vem também da microgestão invisível de tudo que você não
                conseguiu largar.”
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* RECONHECIMENTO */}
      <section className="relative overflow-hidden border-y border-ink/10 bg-[color-mix(in_oklab,var(--color-accent)_7%,var(--color-background))]">
        <div className="pointer-events-none absolute -right-24 top-16 hidden h-72 w-72 rounded-full border border-ink/10 md:block" />
        <div className="pointer-events-none absolute -left-32 bottom-0 hidden h-96 w-96 rounded-full border border-ink/[0.07] md:block" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
          <div className="grid gap-14 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20">
            {/* Coluna fixa */}
            <div className="md:sticky md:top-24 md:self-start">
              <p className="eyebrow">Talvez você se reconheça aqui</p>
              <h2 className="mt-8 text-[1.9rem] leading-[1.2] text-ink md:text-[2.6rem]">
                O dia termina, mas você nunca descansa.
              </h2>
              <div className="mt-8 h-px w-16 bg-accent/60" />
              <p className="mt-8 max-w-sm text-[0.98rem] leading-[1.9] text-foreground/60">
                Seis situações que se repetem. Se três delas parecerem escritas
                sobre a sua semana, a Sessão de Direção Terapêutica foi pensada
                para você.
              </p>
            </div>

            {/* Lista editorial */}
            <ul className="divide-y divide-ink/10 border-t border-ink/10">
              {reconhecimento.map((item) => (
                <li
                  key={item.n}
                  className="group grid grid-cols-[auto_1fr] items-baseline gap-6 py-7 transition-colors duration-500 hover:bg-background/70 md:gap-10 md:py-9"
                >
                  <span className="font-display text-[1.6rem] leading-none text-accent/50 transition-colors duration-500 group-hover:text-accent md:text-[2rem]">
                    {item.n}
                  </span>
                  <p className="text-[1.02rem] leading-[1.85] text-foreground/80 transition-colors duration-500 group-hover:text-ink md:text-[1.1rem]">
                    {item.d}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      {/* POR QUE ENTENDER NÃO BASTOU */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
          <p className="eyebrow text-ink-foreground/60">
            Por que entender não bastou
          </p>
          <h2 className="mt-8 text-[1.8rem] leading-[1.3] md:text-[2.4rem]">
            Você não precisa de mais informação sobre si. Precisa de orientação
            para a hora exata em que o impulso aparece.
          </h2>
          <p className="mt-8 text-[1.05rem] leading-[1.9] text-ink-foreground/70">
            Você já leu, já ouviu podcast, já conversou com quem te conhece bem.
            Talvez já tenha falado disso em terapia. E, mesmo assim, quando a
            situação chega, o corpo age antes: você confere, corrige, assume.
          </p>
          <p className="mt-6 text-[1.05rem] leading-[1.9] text-ink-foreground/70">
            Você já sabe o que acontece. O que falta é saber o que fazer quando
            acontecer. Essa brecha só se fecha quando alguém traduz o seu padrão
            em uma direção concreta: o que observar, onde interromper e o que
            fazer no lugar. É exatamente isso que a SDT entrega em um único
            encontro, com objetivo definido e entrega registrada.
          </p>
        </div>
      </section>

      {/* DESEJO — HOJE / O CAMINHO */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
        <p className="eyebrow">O que você quer de verdade</p>
        <h2 className="mt-8 max-w-2xl text-[1.8rem] leading-[1.25] text-ink md:text-[2.4rem]">
          Continuar sendo altamente funcional sem precisar sustentar tudo para
          sentir que vai dar certo.
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="eyebrow">Hoje</p>
            <ul className="mt-6 space-y-4">
              {hoje.map((item) => (
                <li
                  key={item}
                  className="border-b border-border pb-4 text-[1.02rem] leading-[1.7] text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-accent">O caminho</p>
            <ul className="mt-6 space-y-4">
              {caminho.map((item) => (
                <li
                  key={item}
                  className="border-b border-accent/30 pb-4 text-[1.02rem] leading-[1.7] text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* HONESTIDADE — NOTA EDITORIAL */}
        <div className="relative mx-auto mt-24 max-w-2xl md:mt-32">
          <div className="absolute -top-8 -left-8 hidden h-24 w-24 border-t border-l border-accent/40 sm:block" />
          <div className="absolute -bottom-8 -right-8 hidden h-24 w-24 border-b border-r border-accent/40 sm:block" />

          <div className="relative border border-border bg-card/50 p-8 shadow-sm backdrop-blur-sm sm:p-16">
            <header className="mb-8">
              <span className="mb-4 block text-[10px] font-semibold uppercase tracking-widest text-accent">
                Nota de Transparência
              </span>
              <h2 className="font-display text-[2.4rem] leading-[1.1] italic text-ink sm:text-[3rem]">
                Sendo honesta com você:
              </h2>
            </header>

            <div className="space-y-6">
              <p className="text-[1.1rem] font-light leading-relaxed text-foreground sm:text-[1.25rem]">
                Esse caminho inteiro não acontece em uma sessão.
              </p>

              <div className="flex items-start gap-6">
                <div className="mt-4 h-[1px] w-12 flex-shrink-0 bg-accent" />
                <p className="text-[1.05rem] font-normal leading-relaxed text-foreground sm:text-[1.2rem]">
                  A SDT entrega o{" "}
                  <span className="font-display text-[1.5rem] italic text-accent">
                    primeiro passo concreto
                  </span>{" "}
                  dele: identificar como o ciclo funciona na sua vida e começar a
                  interrompê-lo.
                </p>
              </div>
            </div>

            <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
              <div className="text-[10px] uppercase tracking-tighter text-muted-foreground">
                Direção Terapêutica
              </div>
              <div className="h-2 w-2 rounded-full bg-accent" />
            </div>
          </div>
        </div>
      </section>

      {/* A OFERTA */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:gap-20 md:px-10 md:py-32">
          <div>
            <p className="eyebrow">O que é a Sessão de Direção Terapêutica</p>
            <h2 className="mt-6 text-[1.8rem] leading-[1.25] text-ink md:text-[2.3rem]">
              Um encontro clínico individual com entrega em mãos.
            </h2>
            <ul className="mt-10 space-y-6">
              <li className="text-[1.05rem] leading-[1.8] text-foreground/80">
                <span className="font-medium text-ink">
                  Encontro único de cerca de 60 minutos,
                </span>{" "}
                online e individual, conduzido por psicóloga.
              </li>
              <li className="text-[1.05rem] leading-[1.8] text-foreground/80">
                <span className="font-medium text-ink">
                  Mapeamento do seu padrão,
                </span>{" "}
                a partir de uma dificuldade concreta que se repete no seu dia.
              </li>
              <li className="text-[1.05rem] leading-[1.8] text-foreground/80">
                <span className="font-medium text-ink">
                  Direção prática registrada por escrito,
                </span>{" "}
                em até 48 horas, em um documento personalizado que fica com você.
              </li>
            </ul>
            <p className="mt-8 text-[1.05rem] leading-[1.9] text-foreground/80">
              É uma entrega completa em si mesma: não é triagem, não é primeira
              sessão de terapia e não abre processo nenhum. Se você quiser seguir
              depois, é uma escolha sua nunca condição.
            </p>
            <div className="mt-10">
              <CTA id="cta-whatsapp-oferta">
                Quero agendar minha Sessão de Direção Terapêutica
              </CTA>
              <p className="mt-6 text-[0.6rem] whitespace-nowrap text-muted-foreground sm:text-[0.72rem]">{microcopy}</p>
            </div>
          </div>

          <img
            src={notesStill}
            alt="Caderno aberto com caneta sobre mesa de linho ao lado de um vaso com eucalipto"
            width={1408}
            height={1008}
            loading="lazy"
            className="h-[300px] w-full rounded-[2rem] object-cover md:h-[520px]"
          />
        </div>
      </section>

      {/* O QUE VOCÊ LEVA */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
        <p className="eyebrow">O que você leva do encontro</p>
        <h2 className="mt-8 max-w-2xl text-[1.8rem] leading-[1.25] text-ink md:text-[2.4rem]">
          Clareza sobre o mecanismo — e o que fazer quando ele aparecer.
        </h2>
        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-x-16">
          {entrega.map((item) => (
            <div key={item.n}>
              <span className="font-display text-2xl text-accent">{item.n}</span>
              <h3 className="mt-3 text-xl leading-snug text-ink">{item.t}</h3>
              <p className="mt-3 text-[1rem] leading-[1.8] text-muted-foreground">
                {item.d}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <CTA id="cta-whatsapp-middle">
            Quero agendar minha Sessão de Direção Terapêutica
          </CTA>
          <p className="mt-6 text-[0.6rem] whitespace-nowrap text-muted-foreground sm:text-[0.72rem]">{microcopy}</p>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
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
        </div>
      </section>

      {/* PARA QUEM É / NÃO É */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
        <p className="eyebrow">Para quem é</p>
        <h2 className="mt-8 max-w-2xl text-[1.8rem] leading-[1.25] text-ink md:text-[2.3rem]">
          A SDT foi desenhada para um momento específico.
        </h2>
        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="eyebrow text-accent">Faz sentido se</p>
            <ul className="mt-6 space-y-4">
              {paraQuem.map((item) => (
                <li
                  key={item}
                  className="border-b border-accent/30 pb-4 text-[1.02rem] leading-[1.7] text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Não é para</p>
            <ul className="mt-6 space-y-4">
              {naoEhPara.map((item) => (
                <li
                  key={item}
                  className="border-b border-border pb-4 text-[1.02rem] leading-[1.7] text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
            Sou psicóloga clínica e atendo mulheres adultas que gerenciam tudo —
            casa, trabalho, família — e que, por isso mesmo, raramente param para
            olhar para o próprio funcionamento.
          </p>
          <p className="mt-5 text-[1.05rem] leading-[1.9] text-foreground/80">
            Antes da Psicologia, construí carreira no ambiente corporativo,
            inclusive em gestão. Conheço por dentro a lógica de quem responde por
            resultado e sente que precisa garantir tudo. Formação em Relações
            Internacionais e MBA pela FGV. Trabalho com abordagens comportamentais
            e cognitivas e prática baseada em evidências.
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
            Você não precisa continuar sendo a central de controle de tudo.
          </h2>
          <p className="mx-auto mt-8 max-w-md text-[1.05rem] leading-[1.9] text-ink-foreground/70">
            Fale com a nossa equipe pelo WhatsApp: você tira suas dúvidas e recebe
            as informações para agendar sua Sessão de Direção Terapêutica — sem
            compromisso de continuidade.
          </p>
          <div className="mt-12 flex justify-center">
            <CTA id="cta-whatsapp-final" variant="light">
              Quero agendar minha Sessão de Direção Terapêutica
            </CTA>
          </div>
          <p className="mt-6 text-[0.6rem] whitespace-nowrap text-ink-foreground/60 sm:text-[0.72rem]">{microcopy}</p>
        </div>
      </section>

      <footer className="mx-auto max-w-3xl px-6 py-14 pb-28 text-center text-sm leading-relaxed text-muted-foreground md:px-10 md:pb-14">
        <p>
          Amanda Barbacena — Psicóloga clínica · CRP 01/26914 · Atendimento
          online.
        </p>
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
