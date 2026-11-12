import { ArrowDown, ArrowRight, Check, Clock3, HeartHandshake, MessageCircle, ShieldCheck } from "lucide-react";
import heroPhoto from "../../../assets/knee-pain-worker.jpg";
import xrayPhoto from "../../../assets/xray-plates.jpg";
import handPhoto from "../../../assets/hand-sequela.webp";
import examPhoto from "../../../assets/examining-patient.jpg";
import wheelchairPhoto from "../../../assets/wheelchair-assistance.jpg";
import terminationPhoto from "../../../assets/termination-paperwork.jpg";

const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || "5521979638666").replace(/\D/g, "");
const whatsappLink = (message) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const situations = [
  "Fraturas que deixaram limitação de movimento",
  "Perda de força ou mobilidade em braço, mão, perna ou pé",
  "Amputação ou perda de parte de um membro",
  "Lesões na coluna que dificultam o esforço físico",
  "Sequelas que exigem mais esforço para fazer o mesmo trabalho",
];
const workCases = [
  "Emissão da CAT (Comunicação de Acidente de Trabalho)",
  "Estabilidade após o retorno do afastamento acidentário",
  "Indenização quando houver responsabilidade da empresa",
  "Demissão após acidente ou durante o tratamento",
];
const terminationCases = [
  "Conferência do termo de rescisão",
  "Diferenças de férias, 13º e saldo de salário",
  "Depósitos do FGTS e multa de 40%",
  "Horas extras e outras verbas não pagas, quando houver",
];
const steps = [
  ["01", "Conversa inicial", "Você conta o que aconteceu e envia os documentos que tiver pelo WhatsApp."],
  ["02", "Análise do caso", "Avalio o acidente, as sequelas, o vínculo de trabalho e a documentação disponível."],
  ["03", "Orientação clara", "Explico as possibilidades reais no INSS, na Justiça do Trabalho ou nos dois."],
  ["04", "Acompanhamento", "A equipe cuida dos prazos, recursos e medidas necessárias até a decisão."],
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
  ["Você garante que vou receber o benefício ou indenização?", "Não. Nenhum resultado pode ser garantido. O trabalho é analisar o caso com honestidade, explicar as possibilidades e atuar com ética na defesa dos direitos do cliente."],
];

function List({ items }) {
  return <ul className="check-list">{items.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>;
}

export function HomePage() {
  return <>
    <section className="hero" id="inicio">
      <img className="hero-background" src={heroPhoto} alt="" aria-hidden="true" fetchpriority="high" width="1920" height="1280" />
      <div className="hero-content container">
        <div className="hero-copy">
          <span className="eyebrow"><i /> DIREITO DO TRABALHADOR E PREVIDENCIÁRIO</span>
          <h1>Sofreu um acidente de trabalho ou foi demitido <em>sem receber tudo?</em></h1>
          <p>Conheça os seus direitos com orientação clara sobre auxílio-acidente, acidente de trabalho e verbas rescisórias.</p>
          <div className="hero-actions"><a className="button button-red" href={whatsappLink("Olá, gostaria de conversar com um advogado sobre meu caso.")} target="_blank" rel="noreferrer">Falar com um advogado <ArrowRight /></a><a className="text-link" href="#atuacao">Conheça as áreas de atuação <ArrowDown /></a></div>
          <div className="hero-proof"><span><ShieldCheck /> Advocacia desde 2008</span><span><HeartHandshake /> Atendimento próximo e transparente</span></div>
        </div>
      </div>
      <div className="hero-bottom"><span>Atuação no INSS e na Justiça do Trabalho</span><span>Atendimento por WhatsApp</span></div>
    </section>

    <section className="intro section" id="escritorio"><div className="container intro-grid"><div><span className="eyebrow">EXPERIÊNCIA COM ATENDIMENTO DIRETO</span><h2>Uma trajetória construída cuidando de pessoas e dos seus direitos.</h2></div><div className="intro-copy"><p>Dr. Vanderson atua na advocacia desde 2008. O escritório próprio foi aberto em 2010 e hoje conta com o advogado e mais 7 profissionais no acompanhamento dos casos.</p><p>Você entende o que está acontecendo, sem juridiquês. A equipe apresenta possibilidades reais, sem promessas de resultado ou falsas expectativas.</p><a className="text-link" href="#como-funciona">Veja como funciona o atendimento <ArrowRight /></a></div></div></section>

    <section className="benefit section" id="auxilio-acidente"><div className="container benefit-grid"><div className="benefit-heading"><span className="eyebrow">INSS · AUXÍLIO-ACIDENTE</span><h2>Ficou com uma sequela que dificulta o trabalho?</h2><p>O auxílio-acidente pode ser analisado quando uma sequela permanente reduz a capacidade para a atividade profissional exercida.</p><a className="button button-light" href={whatsappLink("Olá, gostaria de saber se meu caso pode ser analisado para auxílio-acidente.")} target="_blank" rel="noreferrer">Quero analisar meu caso <ArrowRight /></a></div><div className="benefit-detail"><article><span className="detail-number">01</span><h3>O que é</h3><p>Benefício mensal de natureza indenizatória pago pelo INSS quando os requisitos legais são atendidos.</p></article><article><span className="detail-number">02</span><h3>Não precisa ser acidente de trabalho</h3><p>O acidente pode ser de trânsito, uma queda ou doméstico. A sequela e a situação previdenciária precisam ser avaliadas.</p></article><article><span className="detail-number">03</span><h3>Possibilidade de continuar trabalhando</h3><p>Em regra, o recebimento pode coexistir com o salário. Há situações legais que encerram o benefício.</p></article><div className="notice"><ShieldCheck /><p>Os requisitos e o valor dependem da legislação e da análise individual de cada caso.</p></div><img className="benefit-photo" src={xrayPhoto} alt="Radiografia de perna com placas e parafusos ortopédicos" loading="lazy" width="1144" height="856" /></div></div></section>

    <section className="situations section"><div className="container situations-grid"><div><span className="eyebrow">SEQUELAS E LIMITAÇÕES</span><h2>Situações que podem merecer uma avaliação.</h2><p>O impacto da lesão na atividade que você exercia é importante para a análise.</p><a className="text-link" href={whatsappLink("Olá, gostaria de orientação sobre sequelas de um acidente e meu trabalho.")} target="_blank" rel="noreferrer">Converse sobre o seu caso <ArrowRight /></a><img className="situations-photo" src={handPhoto} alt="Mão com sequela de amputação em um dedo" loading="lazy" width="756" height="1000" /></div><div className="situations-card"><List items={situations} /></div></div></section>

    <section className="practice section" id="atuacao"><div className="container"><div className="section-heading"><span className="eyebrow">COMO O ESCRITÓRIO PODE ATUAR</span><h2>Orientação jurídica para diferentes momentos do trabalho.</h2><p>A atuação é definida depois de entender os fatos e os documentos de cada situação.</p></div><div className="practice-grid"><article className="practice-card"><img className="practice-photo" src={examPhoto} alt="Profissional de saúde examina o joelho de um paciente" loading="lazy" width="736" height="491" /><span className="card-index">01 / ACIDENTE</span><h3>Acidente de trabalho</h3><p>Quando o acidente ocorre no trabalho ou no trajeto, podem existir medidas relacionadas ao INSS e ao vínculo de emprego.</p><List items={workCases} /><a className="text-link" href={whatsappLink("Olá, gostaria de conversar sobre acidente de trabalho.")} target="_blank" rel="noreferrer">Falar sobre acidente de trabalho <ArrowRight /></a></article><article className="practice-card"><img className="practice-photo" src={terminationPhoto} alt="Pessoa preenchendo documentos sobre uma mesa" loading="lazy" width="2200" height="1467" /><span className="card-index">02 / RESCISÃO</span><h3>Verbas rescisórias</h3><p>Na demissão, os valores devidos dependem do tipo de desligamento e do histórico do contrato.</p><List items={terminationCases} /><a className="text-link" href={whatsappLink("Olá, gostaria de conferir meus direitos na rescisão do contrato.")} target="_blank" rel="noreferrer">Falar sobre rescisão <ArrowRight /></a></article></div><div className="deadline"><Clock3 /><p><strong>Atenção ao prazo:</strong> em regra, há até 2 anos após o fim do contrato para ajuizar uma ação trabalhista, observados os limites legais. Uma análise antecipada ajuda a esclarecer os próximos passos.</p></div></div></section>

    <section className="process section" id="como-funciona"><div className="container"><div className="section-heading"><span className="eyebrow">ATENDIMENTO EM ETAPAS</span><h2>Você sabe o que acontece em cada fase.</h2></div><div className="steps">{steps.map(([n,title,body])=><article className="step" key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div><a className="button button-red" href={whatsappLink("Olá, gostaria de iniciar uma conversa sobre meu caso.")} target="_blank" rel="noreferrer">Iniciar conversa <MessageCircle /></a></div></section>

    <section className="faq section" id="duvidas"><div className="container faq-grid"><div className="faq-intro"><span className="eyebrow">DÚVIDAS FREQUENTES</span><h2>Informação clara para começar.</h2><p>As respostas são gerais e não substituem a análise dos documentos e das circunstâncias do caso.</p><a className="button button-light" href={whatsappLink("Olá, tenho uma dúvida jurídica e gostaria de orientação.")} target="_blank" rel="noreferrer">Fale com a equipe <ArrowRight /></a></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(([name,answer])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text:answer}}))})}} /></section>

    <section className="closing"><img className="closing-background" src={wheelchairPhoto} alt="" aria-hidden="true" loading="lazy" width="2591" height="3887" /><div className="container closing-inner"><div><span className="eyebrow">PRÓXIMO PASSO</span><h2>Conte o que aconteceu. A equipe explica como o caso pode ser analisado.</h2><p>Atendimento inicial pelo WhatsApp, com comunicação direta e transparente.</p></div><a className="button button-red" href={whatsappLink("Olá, gostaria de conversar com um advogado sobre meu caso.")} target="_blank" rel="noreferrer">Falar com um advogado <ArrowRight /></a></div></section>
  </>;
}
