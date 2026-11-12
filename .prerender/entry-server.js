import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { X, Menu, ArrowRight, ArrowDown, ShieldCheck, HeartHandshake, Clock3, MessageCircle, Check } from "lucide-react";
const logo = "/assets/logo-iCNSvaUM.png";
function Header() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsx("header", { className: "site-header", children: /* @__PURE__ */ jsxs("div", { className: "container header-inner", children: [
    /* @__PURE__ */ jsx("a", { className: "brand", href: "#inicio", "aria-label": "VJ Advogados — início", children: /* @__PURE__ */ jsx("img", { src: logo, alt: "VJ Advogados Associados" }) }),
    /* @__PURE__ */ jsx("button", { className: "menu-toggle", type: "button", onClick: () => setOpen(!open), "aria-expanded": open, "aria-label": open ? "Fechar menu" : "Abrir menu", children: open ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {}) }),
    /* @__PURE__ */ jsxs("nav", { className: open ? "main-nav open" : "main-nav", "aria-label": "Navegação principal", children: [
      [["#auxilio-acidente", "Auxílio-acidente"], ["#atuacao", "Atuação"], ["#escritorio", "O escritório"], ["#duvidas", "Dúvidas"]].map(([href, label]) => /* @__PURE__ */ jsx("a", { href, onClick: () => setOpen(false), children: label }, href)),
      /* @__PURE__ */ jsxs("a", { className: "nav-cta", href: "#contato", onClick: () => setOpen(false), children: [
        "Fale conosco ",
        /* @__PURE__ */ jsx("span", { children: "↗" })
      ] })
    ] })
  ] }) });
}
const number = "5521979638666".replace(/\D/g, "");
const link = `https://wa.me/${number}?text=${encodeURIComponent("Olá, gostaria de conversar com um advogado sobre meu caso.")}`;
function ContactClosing() {
  return null;
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "site-footer", id: "contato", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { className: "footer-main", children: [
      /* @__PURE__ */ jsxs("div", { className: "footer-brand", children: [
        /* @__PURE__ */ jsx("a", { href: "#inicio", "aria-label": "Voltar ao início", children: /* @__PURE__ */ jsx("img", { src: logo, alt: "VJ Advogados Associados — Vanderson José" }) }),
        /* @__PURE__ */ jsx("p", { children: "Atuação na defesa de trabalhadores em questões previdenciárias e trabalhistas." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-contact", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "ATENDIMENTO" }),
        /* @__PURE__ */ jsx("a", { href: link, target: "_blank", rel: "noreferrer", children: "WhatsApp · (21) 97963-8666 ↗" }),
        /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/vjadvogados/", target: "_blank", rel: "noreferrer", children: "Instagram · @vjadvogados ↗" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "footer-professional", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Vanderson da Silva José Sociedade Individual de Advocacia" }),
        /* @__PURE__ */ jsx("span", { children: "CNPJ: 29.588.459/0001-30" }),
        /* @__PURE__ */ jsxs("address", { children: [
          "Rua Marte, 66 - Centro, Mesquita - RJ",
          /* @__PURE__ */ jsx("br", {}),
          "CEP 26553-480"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Vanderson da Silva José" }),
        /* @__PURE__ */ jsx("span", { children: "OAB/RJ 156.681" }),
        /* @__PURE__ */ jsx("span", { children: "Seccional do Rio de Janeiro" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "legal-disclaimer", children: "Este material tem caráter meramente informativo e não constitui publicidade profissional nos termos do Provimento nº 205/2021 do CFOAB. As informações aqui veiculadas não garantem resultados específicos." }),
    /* @__PURE__ */ jsxs("div", { className: "footer-bottom", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Vanderson da Silva José Sociedade Individual de Advocacia"
      ] }),
      /* @__PURE__ */ jsxs("a", { href: link, target: "_blank", rel: "noreferrer", children: [
        "Fale com a equipe ",
        /* @__PURE__ */ jsx("span", { children: "↗" })
      ] })
    ] })
  ] }) });
}
function AppShell({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { children }),
    /* @__PURE__ */ jsx(ContactClosing, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const heroPhoto = "/assets/knee-pain-worker-DpwqrWSS.jpg";
const xrayPhoto = "/assets/xray-plates-52XXqJW5.jpg";
const handPhoto = "/assets/hand-sequela-C0xHNtj1.webp";
const examPhoto = "/assets/examining-patient-NhGcX8cG.jpg";
const wheelchairPhoto = "/assets/wheelchair-assistance-Dc9Ghtmt.jpg";
const terminationPhoto = "/assets/termination-paperwork-CMd90B1O.jpg";
const lawyerPhoto = "/assets/vanderson-da-silva-jose-rb7Dc3GB.png";
const whatsappNumber = "5521979638666".replace(/\D/g, "");
const whatsappLink = (message) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
const situations = [
  "Fraturas que deixaram limitação de movimento",
  "Perda de força ou mobilidade em braço, mão, perna ou pé",
  "Amputação ou perda de parte de um membro",
  "Lesões na coluna que dificultam o esforço físico",
  "Sequelas que exigem mais esforço para fazer o mesmo trabalho"
];
const workCases = [
  "Emissão da CAT (Comunicação de Acidente de Trabalho)",
  "Estabilidade após o retorno do afastamento acidentário",
  "Indenização quando houver responsabilidade da empresa",
  "Demissão após acidente ou durante o tratamento"
];
const terminationCases = [
  "Conferência do termo de rescisão",
  "Diferenças de férias, 13º e saldo de salário",
  "Depósitos do FGTS e multa de 40%",
  "Horas extras e outras verbas não pagas, quando houver"
];
const steps = [
  ["01", "Conversa inicial", "Você conta o que aconteceu e envia os documentos que tiver pelo WhatsApp."],
  ["02", "Análise do caso", "Avalio o acidente, as sequelas, o vínculo de trabalho e a documentação disponível."],
  ["03", "Orientação clara", "Explico as possibilidades reais no INSS, na Justiça do Trabalho ou nos dois."],
  ["04", "Acompanhamento", "A equipe cuida dos prazos, recursos e medidas necessárias até a decisão."]
];
const faqs = [
  ["O que é o auxílio-acidente?", "É um benefício mensal pago pelo INSS, como indenização, a quem sofreu um acidente e ficou com sequela permanente que reduz a capacidade para o trabalho. Em regra, corresponde a 50% do salário de benefício e é pago até a aposentadoria. A análise depende dos requisitos aplicáveis ao caso."],
  ["O acidente precisa ter acontecido no trabalho?", "Não. O acidente pode ter ocorrido no trabalho ou em outra situação, como trânsito, queda ou acidente doméstico. O ponto central é a existência de sequela permanente que reduza a capacidade para a atividade exercida."],
  ["Posso receber auxílio-acidente e continuar trabalhando?", "Em regra, sim. O auxílio-acidente tem natureza indenizatória e pode ser recebido junto com o salário. O benefício deixa de ser pago em caso de aposentadoria, conforme as regras aplicáveis."],
  ["Preciso ter contribuído por um tempo mínimo?", "Em regra, não há carência para o auxílio-acidente. É necessário, entre outros requisitos, ter qualidade de segurado na data do acidente. Cada caso precisa de análise individual."],
  ["Sofri acidente de trabalho. A empresa pode me demitir?", "Depende da situação. Quem recebe benefício por incapacidade temporária de natureza acidentária costuma ter estabilidade por 12 meses após o fim do benefício. O contexto do afastamento e da demissão precisa ser analisado."],
  ["Fui demitido e acho que não recebi tudo. O que fazer?", "Reúna o termo de rescisão, contracheques e extratos do FGTS. A conferência desses documentos ajuda a identificar possíveis diferenças conforme o tipo de desligamento."],
  ["Qual é o prazo para entrar com ação trabalhista?", "Em regra, o prazo é de até 2 anos após o fim do contrato, podendo alcançar direitos dos 5 anos anteriores ao ajuizamento. Como há particularidades, procure orientação para avaliar seu caso."],
  ["O INSS negou o pedido. Ainda posso recorrer?", "A negativa pode ser questionada por recurso administrativo ou ação judicial, conforme a situação e a documentação. A viabilidade depende de análise individual."],
  ["Preciso ir ao escritório?", "O atendimento pode começar pelo WhatsApp, com envio dos documentos disponíveis. A equipe orienta sobre as próximas etapas."],
  ["Você garante que vou receber o benefício ou indenização?", "Não. Nenhum resultado pode ser garantido. O trabalho é analisar o caso com honestidade, explicar as possibilidades e atuar com ética na defesa dos direitos do cliente."]
];
function List({ items }) {
  return /* @__PURE__ */ jsx("ul", { className: "check-list", children: items.map((item) => /* @__PURE__ */ jsxs("li", { children: [
    /* @__PURE__ */ jsx(Check, { "aria-hidden": "true" }),
    item
  ] }, item)) });
}
function HomePage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "hero", id: "inicio", children: [
      /* @__PURE__ */ jsxs("div", { className: "hero-visual", children: [
        /* @__PURE__ */ jsx("img", { src: heroPhoto, alt: "", "aria-hidden": "true", fetchpriority: "high", width: "1920", height: "1280" }),
        /* @__PURE__ */ jsxs("div", { className: "hero-note", children: [
          /* @__PURE__ */ jsx("span", { className: "note-mark", children: "VJ" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Vanderson José",
            /* @__PURE__ */ jsx("small", { children: "Advocacia previdenciária e trabalhista" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hero-grid container", children: /* @__PURE__ */ jsxs("div", { className: "hero-copy", children: [
        /* @__PURE__ */ jsxs("span", { className: "eyebrow", children: [
          /* @__PURE__ */ jsx("i", {}),
          " DIREITO DO TRABALHADOR E PREVIDENCIÁRIO"
        ] }),
        /* @__PURE__ */ jsxs("h1", { children: [
          /* @__PURE__ */ jsx("span", { children: "Sofreu um acidente de trabalho" }),
          /* @__PURE__ */ jsx("em", { children: "ou foi demitido sem receber tudo?" })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Conheça os seus direitos com orientação clara sobre auxílio-acidente, acidente de trabalho e verbas rescisórias." }),
        /* @__PURE__ */ jsxs("div", { className: "hero-actions", children: [
          /* @__PURE__ */ jsxs("a", { className: "button button-red", href: whatsappLink("Olá, gostaria de conversar com um advogado sobre meu caso."), target: "_blank", rel: "noreferrer", children: [
            "Falar com um advogado ",
            /* @__PURE__ */ jsx(ArrowRight, {})
          ] }),
          /* @__PURE__ */ jsxs("a", { className: "text-link", href: "#atuacao", children: [
            "Conheça as áreas de atuação ",
            /* @__PURE__ */ jsx(ArrowDown, {})
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hero-proof", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx(ShieldCheck, {}),
            " Advocacia desde 2008"
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx(HeartHandshake, {}),
            " Atendimento próximo e transparente"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "hero-bottom", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx("span", { children: "Atuação no INSS e na Justiça do Trabalho" }),
        /* @__PURE__ */ jsx("span", { children: "Atendimento por WhatsApp" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "intro section", id: "escritorio", children: /* @__PURE__ */ jsxs("div", { className: "container intro-grid", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "EXPERIÊNCIA COM ATENDIMENTO DIRETO" }),
        /* @__PURE__ */ jsx("h2", { children: "Uma trajetória construída cuidando de pessoas e dos seus direitos." }),
        /* @__PURE__ */ jsxs("figure", { className: "lawyer-portrait", children: [
          /* @__PURE__ */ jsx("img", { src: lawyerPhoto, alt: "Dr. Vanderson da Silva José, sentado à mesa em seu escritório", loading: "lazy", width: "1024", height: "669" }),
          /* @__PURE__ */ jsxs("figcaption", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Dr. Vanderson da Silva José" }),
            /* @__PURE__ */ jsx("span", { children: "OAB/RJ 156.681 · Seccional do Rio de Janeiro" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "intro-copy", children: [
        /* @__PURE__ */ jsx("p", { children: "Dr. Vanderson da Silva José atua na advocacia desde 2008. O escritório próprio foi aberto em 2010 e hoje conta com o advogado e mais 7 profissionais no acompanhamento dos casos." }),
        /* @__PURE__ */ jsx("p", { children: "Você entende o que está acontecendo, sem juridiquês. A equipe apresenta possibilidades reais, sem promessas de resultado ou falsas expectativas." }),
        /* @__PURE__ */ jsx("p", { children: "A sede da Vanderson da Silva José Sociedade Individual de Advocacia fica na Rua Marte, 66, Centro, Mesquita – RJ." }),
        /* @__PURE__ */ jsxs("a", { className: "text-link", href: "#como-funciona", children: [
          "Veja como funciona o atendimento ",
          /* @__PURE__ */ jsx(ArrowRight, {})
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "benefit section", id: "auxilio-acidente", children: /* @__PURE__ */ jsxs("div", { className: "container benefit-grid", children: [
      /* @__PURE__ */ jsxs("div", { className: "benefit-heading", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "INSS · AUXÍLIO-ACIDENTE" }),
        /* @__PURE__ */ jsx("h2", { children: "Ficou com uma sequela que dificulta o trabalho?" }),
        /* @__PURE__ */ jsx("p", { children: "O auxílio-acidente pode ser analisado quando uma sequela permanente reduz a capacidade para a atividade profissional exercida." }),
        /* @__PURE__ */ jsxs("a", { className: "button button-light", href: whatsappLink("Olá, gostaria de saber se meu caso pode ser analisado para auxílio-acidente."), target: "_blank", rel: "noreferrer", children: [
          "Quero analisar meu caso ",
          /* @__PURE__ */ jsx(ArrowRight, {})
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "benefit-detail", children: [
        /* @__PURE__ */ jsxs("article", { children: [
          /* @__PURE__ */ jsx("span", { className: "detail-number", children: "01" }),
          /* @__PURE__ */ jsx("h3", { children: "O que é" }),
          /* @__PURE__ */ jsx("p", { children: "Benefício mensal de natureza indenizatória pago pelo INSS quando os requisitos legais são atendidos." })
        ] }),
        /* @__PURE__ */ jsxs("article", { children: [
          /* @__PURE__ */ jsx("span", { className: "detail-number", children: "02" }),
          /* @__PURE__ */ jsx("h3", { children: "Não precisa ser acidente de trabalho" }),
          /* @__PURE__ */ jsx("p", { children: "O acidente pode ser de trânsito, uma queda ou doméstico. A sequela e a situação previdenciária precisam ser avaliadas." })
        ] }),
        /* @__PURE__ */ jsxs("article", { children: [
          /* @__PURE__ */ jsx("span", { className: "detail-number", children: "03" }),
          /* @__PURE__ */ jsx("h3", { children: "Possibilidade de continuar trabalhando" }),
          /* @__PURE__ */ jsx("p", { children: "Em regra, o recebimento pode coexistir com o salário. Há situações legais que encerram o benefício." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "notice", children: [
          /* @__PURE__ */ jsx(ShieldCheck, {}),
          /* @__PURE__ */ jsx("p", { children: "Os requisitos e o valor dependem da legislação e da análise individual de cada caso." })
        ] }),
        /* @__PURE__ */ jsx("img", { className: "benefit-photo", src: xrayPhoto, alt: "Radiografia de perna com placas e parafusos ortopédicos", loading: "lazy", width: "1144", height: "856" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "situations section", children: /* @__PURE__ */ jsxs("div", { className: "container situations-grid", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "SEQUELAS E LIMITAÇÕES" }),
        /* @__PURE__ */ jsx("h2", { children: "Situações que podem merecer uma avaliação." }),
        /* @__PURE__ */ jsx("p", { children: "O impacto da lesão na atividade que você exercia é importante para a análise." }),
        /* @__PURE__ */ jsxs("a", { className: "text-link", href: whatsappLink("Olá, gostaria de orientação sobre sequelas de um acidente e meu trabalho."), target: "_blank", rel: "noreferrer", children: [
          "Converse sobre o seu caso ",
          /* @__PURE__ */ jsx(ArrowRight, {})
        ] }),
        /* @__PURE__ */ jsx("img", { className: "situations-photo", src: handPhoto, alt: "Mão com sequela de amputação em um dedo", loading: "lazy", width: "756", height: "1000" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "situations-card", children: /* @__PURE__ */ jsx(List, { items: situations }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "practice section", id: "atuacao", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-heading", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "COMO O ESCRITÓRIO PODE ATUAR" }),
        /* @__PURE__ */ jsx("h2", { children: "Orientação jurídica para diferentes momentos do trabalho." }),
        /* @__PURE__ */ jsx("p", { children: "A atuação é definida depois de entender os fatos e os documentos de cada situação." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "practice-grid", children: [
        /* @__PURE__ */ jsxs("article", { className: "practice-card", children: [
          /* @__PURE__ */ jsx("img", { className: "practice-photo", src: examPhoto, alt: "Profissional de saúde examina o joelho de um paciente", loading: "lazy", width: "736", height: "491" }),
          /* @__PURE__ */ jsx("span", { className: "card-index", children: "01 / ACIDENTE" }),
          /* @__PURE__ */ jsx("h3", { children: "Acidente de trabalho" }),
          /* @__PURE__ */ jsx("p", { children: "Quando o acidente ocorre no trabalho ou no trajeto, podem existir medidas relacionadas ao INSS e ao vínculo de emprego." }),
          /* @__PURE__ */ jsx(List, { items: workCases }),
          /* @__PURE__ */ jsxs("a", { className: "text-link", href: whatsappLink("Olá, gostaria de conversar sobre acidente de trabalho."), target: "_blank", rel: "noreferrer", children: [
            "Falar sobre acidente de trabalho ",
            /* @__PURE__ */ jsx(ArrowRight, {})
          ] })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "practice-card", children: [
          /* @__PURE__ */ jsx("img", { className: "practice-photo", src: terminationPhoto, alt: "Pessoa preenchendo documentos sobre uma mesa", loading: "lazy", width: "2200", height: "1467" }),
          /* @__PURE__ */ jsx("span", { className: "card-index", children: "02 / RESCISÃO" }),
          /* @__PURE__ */ jsx("h3", { children: "Verbas rescisórias" }),
          /* @__PURE__ */ jsx("p", { children: "Na demissão, os valores devidos dependem do tipo de desligamento e do histórico do contrato." }),
          /* @__PURE__ */ jsx(List, { items: terminationCases }),
          /* @__PURE__ */ jsxs("a", { className: "text-link", href: whatsappLink("Olá, gostaria de conferir meus direitos na rescisão do contrato."), target: "_blank", rel: "noreferrer", children: [
            "Falar sobre rescisão ",
            /* @__PURE__ */ jsx(ArrowRight, {})
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "deadline", children: [
        /* @__PURE__ */ jsx(Clock3, {}),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Atenção ao prazo:" }),
          " em regra, há até 2 anos após o fim do contrato para ajuizar uma ação trabalhista, observados os limites legais. Uma análise antecipada ajuda a esclarecer os próximos passos."
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "process section", id: "como-funciona", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "section-heading", children: [
        /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "ATENDIMENTO EM ETAPAS" }),
        /* @__PURE__ */ jsx("h2", { children: "Você sabe o que acontece em cada fase." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "steps", children: steps.map(([n, title, body]) => /* @__PURE__ */ jsxs("article", { className: "step", children: [
        /* @__PURE__ */ jsx("span", { children: n }),
        /* @__PURE__ */ jsx("h3", { children: title }),
        /* @__PURE__ */ jsx("p", { children: body })
      ] }, n)) }),
      /* @__PURE__ */ jsxs("a", { className: "button button-red", href: whatsappLink("Olá, gostaria de iniciar uma conversa sobre meu caso."), target: "_blank", rel: "noreferrer", children: [
        "Iniciar conversa ",
        /* @__PURE__ */ jsx(MessageCircle, {})
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "faq section", id: "duvidas", children: [
      /* @__PURE__ */ jsxs("div", { className: "container faq-grid", children: [
        /* @__PURE__ */ jsxs("div", { className: "faq-intro", children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "DÚVIDAS FREQUENTES" }),
          /* @__PURE__ */ jsx("h2", { children: "Informação clara para começar." }),
          /* @__PURE__ */ jsx("p", { children: "As respostas são gerais e não substituem a análise dos documentos e das circunstâncias do caso." }),
          /* @__PURE__ */ jsxs("a", { className: "button button-light", href: whatsappLink("Olá, tenho uma dúvida jurídica e gostaria de orientação."), target: "_blank", rel: "noreferrer", children: [
            "Fale com a equipe ",
            /* @__PURE__ */ jsx(ArrowRight, {})
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "faq-list", children: faqs.map(([q, a]) => /* @__PURE__ */ jsxs("details", { children: [
          /* @__PURE__ */ jsxs("summary", { children: [
            q,
            /* @__PURE__ */ jsx("span", { children: "+" })
          ] }),
          /* @__PURE__ */ jsx("p", { children: a })
        ] }, q)) })
      ] }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([name, answer]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text: answer } })) }) } })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "closing", children: [
      /* @__PURE__ */ jsx("img", { className: "closing-background", src: wheelchairPhoto, alt: "", "aria-hidden": "true", loading: "lazy", width: "2591", height: "3887" }),
      /* @__PURE__ */ jsxs("div", { className: "container closing-inner", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "eyebrow", children: "PRÓXIMO PASSO" }),
          /* @__PURE__ */ jsx("h2", { children: "Conte o que aconteceu. A equipe explica como o caso pode ser analisado." }),
          /* @__PURE__ */ jsx("p", { children: "Atendimento inicial pelo WhatsApp, com comunicação direta e transparente." })
        ] }),
        /* @__PURE__ */ jsxs("a", { className: "button button-red", href: whatsappLink("Olá, gostaria de conversar com um advogado sobre meu caso."), target: "_blank", rel: "noreferrer", children: [
          "Falar com um advogado ",
          /* @__PURE__ */ jsx(ArrowRight, {})
        ] })
      ] })
    ] })
  ] });
}
function render() {
  return renderToString(/* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(AppShell, { children: /* @__PURE__ */ jsx(HomePage, {}) }) }));
}
export {
  render
};
