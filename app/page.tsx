"use client";

import { useState } from "react";
import Image from "next/image";

const scopes = ["All methods", "Agents", "Humans", "Interaction"] as const;
type Scope = (typeof scopes)[number];
const methods: { name: string; approach: string; description: string; question: string; scopes: Scope[] }[] = [
  { name: "Thematic analysis", approach: "Qualitative", description: "Identify patterns across agent traces, human accounts, and records of interaction.", question: "What recurring patterns appear, and what do they mean in context?", scopes: ["Agents", "Humans", "Interaction"] },
  { name: "Grounded theory", approach: "Qualitative", description: "Develop concepts and explanations through iterative data collection, coding, and comparison.", question: "What concepts help explain how people and agents work together?", scopes: ["Agents", "Humans", "Interaction"] },
  { name: "Conversation & interaction analysis", approach: "Qualitative", description: "Examine sequences of turns, coordination, misunderstandings, and repair in situated interaction.", question: "How do people and agents establish, lose, and recover shared understanding?", scopes: ["Interaction"] },
  { name: "Interviews & diary studies", approach: "Qualitative", description: "Learn how people experience agents, make sense of their behavior, and adapt their practices over time.", question: "How do expectations and experiences shape people's decisions?", scopes: ["Humans", "Interaction"] },
  { name: "Ethnography & observation", approach: "Qualitative", description: "Study agent use within everyday work, social relationships, and organizational settings.", question: "How do agents fit into, and change, existing practices?", scopes: ["Humans", "Interaction"] },
  { name: "Experiments & surveys", approach: "Quantitative / mixed", description: "Test specific hypotheses and measure human perceptions and behavior under defined conditions.", question: "How do agent behaviors or interface choices affect reliance and oversight?", scopes: ["Agents", "Humans", "Interaction"] },
  { name: "Content & sequence analysis", approach: "Quantitative / mixed", description: "Describe coded actions and examine their frequency, order, and transitions across trajectories.", question: "Which behavioral patterns vary across tasks, agents, and settings?", scopes: ["Agents", "Interaction"] },
  { name: "Participatory design & co-design", approach: "Design inquiry", description: "Work with people to explore how agent behavior should be represented, understood, and shaped.", question: "What do people need to see and control when working with agents?", scopes: ["Humans", "Interaction"] },
  { name: "Research through design", approach: "Design inquiry", description: "Use the creation and study of artifacts to explore new ways of understanding and interacting with agents.", question: "What can making and trying alternative designs help us understand?", scopes: ["Humans", "Interaction"] },
];

const lenses = [
  { number: "01", title: "Agents", color: "rust", question: "What do agents do, and how?", text: "Study planning, tool use, coordination, failure, and recovery as they unfold during a run.", tags: ["Behavioral patterns", "Trajectories", "Context"] },
  { number: "02", title: "Humans", color: "olive", question: "What do humans do in response?", text: "Understand people's expectations, interpretations, trust, and decisions when working with agents.", tags: ["Sensemaking", "Reliance", "Oversight"] },
  { number: "03", title: "Interaction", color: "purple", question: "What happens between them?", text: "Examine how people and agents communicate intent, coordinate work, and recover from misunderstandings.", tags: ["Coordination", "Shared understanding", "Repair"] },
];

const faqs = [
  ["Who is this workshop for?", "Researchers and practitioners in HCI, social science, and AI who want to understand agent behavior, human behavior around agents, or human–agent interaction. We welcome a range of methodological backgrounds and levels of experience."],
  ["Does my work need to cover all three levels?", "No. A contribution may focus on agents, humans, their interaction, or connections between these levels. The shared interest is what a method helps us understand and how it can be used responsibly."],
  ["Are quantitative and design methods in scope?", "Yes. The workshop considers qualitative, quantitative, mixed, and design methods. We are interested in what each approach can reveal, the evidence it requires, and its limitations."],
  ["Can I submit a contribution now?", "The call for participation is not open yet. Submission requirements, the selection process, deadlines, and a submission link will be announced here once confirmed."],
  ["Is the CHI 2027 workshop confirmed?", "This page describes a proposed second edition of IAB for CHI 2027. Acceptance, the workshop date, and attendance details have not yet been confirmed."],
];

export default function Home() {
  const [scope, setScope] = useState<Scope>("All methods");
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleMethods = methods.filter((method) => scope === "All methods" || method.scopes.includes(scope));
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="header">
        <div className="container nav-inner">
          <a href="#home" className="brand" aria-label="IAB 2027 home"><Image unoptimized src="/iab.svg" width="44" height="44" alt="" /><span>IAB<span className="brand-year">2027</span></span></a>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close" : "Menu"}<span aria-hidden="true">{menuOpen ? "×" : "+"}</span></button>
          <nav id="navigation" aria-label="Main navigation" className={menuOpen ? "nav-links is-open" : "nav-links"}>
            {[["About", "about"], ["Methods", "methods"], ["Program", "program"], ["Organizers", "organizers"]].map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="nav-cta" href="#participate" onClick={() => setMenuOpen(false)}>Participate <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-eyebrow"><span className="edition">SECOND EDITION</span><span className="eyebrow-rule" /><span>PROPOSED WORKSHOP · CHI 2027</span></div>
            <div className="hero-grid">
              <div className="hero-copy">
                <h1>Interpreting<br />Agent <em>Behavior.</em></h1>
                <p className="hero-description">HCI and social science methods for understanding agents, humans, and their interactions.</p>
                <div className="hero-actions"><a className="button button-dark" href="#about">Explore the workshop <span aria-hidden="true">↗</span></a><a className="text-link" href="#methods">Discover the methods <span aria-hidden="true">↓</span></a></div>
              </div>
              <div className="lens-art" aria-label="Three connected perspectives: agents, humans, and interaction">
                <div className="art-note">THREE PERSPECTIVES.<br />A SHARED INQUIRY.</div>
                <div className="art-row art-agents"><span className="art-index">01</span><span>Agents</span><span className="art-dot" /></div>
                <div className="art-row art-humans"><span className="art-index">02</span><span>Humans</span><span className="art-dot" /></div>
                <div className="art-row art-interaction"><span className="art-index">03</span><span>Interaction</span><span className="art-dot" /></div>
                <div className="art-footnote"><span className="connecting-line" />Different methods. Richer understanding.</div>
              </div>
            </div>
            <div className="hero-meta"><span><span className="meta-dot" />CHI 2027 <span className="meta-divider">/</span> Pittsburgh, USA</span><span>Workshop date to be announced</span><a href="https://iab-agents.github.io/" target="_blank" rel="noreferrer">First edition · NeurIPS 2026 <span aria-hidden="true">↗</span></a></div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container">
            <div className="section-heading"><span className="section-kicker">01 / THE QUESTION</span><span className="small-label">Bringing HCI, social science & AI together</span></div>
            <h2 className="core-question">What methods from <span>HCI and the social sciences</span> can help us understand agents, humans, and their interactions?</h2>
            <div className="about-body"><p>As agents become part of everyday work, understanding their behavior also means understanding the people who work with them and the interactions that unfold between them.</p><p>The second edition of IAB will bring together researchers and practitioners to explore methods, exchange experiences, and discuss what these approaches can reveal, where they fall short, and how they may need to change.</p></div>
            <div className="lenses-grid">{lenses.map((lens) => <article className={`lens-card ${lens.color}`} key={lens.title}><div className="lens-top"><span className="lens-number">{lens.number}</span><span className="lens-dot" /></div><h3>{lens.title}</h3><h4>{lens.question}</h4><p>{lens.text}</p><div className="lens-tags">{lens.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div>
          </div>
        </section>

        <section id="methods" className="section methods-section">
          <div className="container">
            <div className="section-heading"><span className="section-kicker">02 / METHODS TO EXPLORE</span><span className="small-label">An open starting point</span></div>
            <div className="section-intro"><h2>Different ways<br />of <em>understanding.</em></h2><p>From situated observation to controlled experiments, each method opens up different questions. These examples invite discussion about possibilities, adaptations, and limitations.</p></div>
            <div className="filter-bar"><div className="filters" role="group" aria-label="Filter methods by research focus">{scopes.map((item) => <button type="button" key={item} aria-pressed={scope === item} onClick={() => setScope(item)} className={scope === item ? "filter active" : "filter"}>{item}</button>)}</div><span className="method-count" aria-live="polite">{visibleMethods.length} methods to explore</span></div>
            <div className="methods-grid">{visibleMethods.map((method) => <article className="method-card" key={method.name}><span className="method-approach">{method.approach}</span><h3>{method.name}</h3><p>{method.description}</p><div className="method-question"><span>A QUESTION TO ASK</span><p>{method.question}</p></div><div className="method-tags">{method.scopes.map((tag) => <span key={tag} className={tag.toLowerCase()}>{tag}</span>)}</div></article>)}</div>
            <p className="section-note">Illustrative methods, not an exhaustive list. The focus labels suggest possible applications, not fixed boundaries.</p>
          </div>
        </section>

        <section id="program" className="section program-section">
          <div className="container">
            <div className="section-heading"><span className="section-kicker">03 / WORKING TOGETHER</span><span className="status-tag">Proposed format</span></div>
            <div className="section-intro"><h2>Share. Try.<br /><em>Reflect together.</em></h2><p>A working session for exchanging methods and developing shared questions. The proposed program spans two consecutive sessions; the final schedule will follow.</p></div>
            <div className="program-grid">
              <article className="session"><div className="session-title"><span>SESSION 01</span><h3>Explore the possibilities</h3></div><div className="program-item"><span>01</span><div><h4>Bring a method, case, or question</h4><p>Short participant introductions surface different approaches, research contexts, and methodological challenges.</p></div></div><div className="program-item"><span>02</span><div><h4>Map methods to questions</h4><p>Discuss what different methods can reveal about agents, humans, and their interactions, and what evidence they require.</p></div></div></article>
              <article className="session"><div className="session-title"><span>SESSION 02</span><h3>Work through the challenges</h3></div><div className="program-item"><span>03</span><div><h4>Explore methods in small groups</h4><p>Use shared cases, interaction excerpts, or design scenarios to examine interpretations, assumptions, and limitations.</p></div></div><div className="program-item"><span>04</span><div><h4>Build a shared research agenda</h4><p>Compare insights across groups and identify methodological adaptations, open questions, and opportunities to collaborate.</p></div></div></article>
            </div>
            <div className="outcome-strip"><span className="small-label">WHAT WE AIM TO TAKE AWAY</span><p>A shared map of methods, their possibilities and limitations, and questions worth pursuing together.</p></div>
          </div>
        </section>

        <section id="participate" className="section participate-section">
          <div className="container participate-grid">
            <div><span className="section-kicker">04 / PARTICIPATE</span><h2>Bring your method.<br /><em>Bring your questions.</em></h2><p>We welcome perspectives from HCI, social science, and AI, including work that focuses on any one of the three levels.</p><div className="contribution-list"><span>Methodological perspectives</span><span>Empirical studies & cases</span><span>Tools & design explorations</span><span>Open questions & lessons learned</span></div></div>
            <aside className="participation-card"><span className="status-tag">Call forthcoming</span><h3>Join the next<br />IAB conversation.</h3><p>Participation details will be announced after the workshop is confirmed.</p><dl><div><dt>Submission deadline</dt><dd>To be announced</dd></div><div><dt>Submission format</dt><dd>To be announced</dd></div><div><dt>Workshop date</dt><dd>To be announced</dd></div><div><dt>Conference</dt><dd><a href="https://chi2027.acm.org/" target="_blank" rel="noreferrer">CHI 2027 · Pittsburgh ↗</a></dd></div></dl><p className="card-footnote">Submissions are not open yet.</p></aside>
          </div>
        </section>

        <section id="organizers" className="section organizers-section"><div className="container organizer-row"><div><span className="section-kicker">05 / THE PEOPLE</span><h2>A conversation<br />across disciplines.</h2></div><div><h3>Organizing team</h3><p>The organizers of the second edition will be announced here.</p><a className="text-link" href="https://iab-agents.github.io/#organizers" target="_blank" rel="noreferrer">Meet the first-edition team <span aria-hidden="true">↗</span></a></div></div></section>

        <section id="faq" className="section faq-section"><div className="container faq-grid"><div><span className="section-kicker">06 / GOOD TO KNOW</span><h2>A few<br /><em>questions.</em></h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span className="faq-symbol" aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></div></section>
      </main>
      <footer className="footer"><div className="container"><div className="footer-top"><a href="#home" className="brand"><Image unoptimized src="/iab.svg" width="44" height="44" alt="" /><span>IAB<span className="brand-year">2027</span></span></a><p>Interpreting Agent Behavior<br /><span>Agents. Humans. Interaction.</span></p><a className="text-link" href="#home">Back to top ↑</a></div><div className="footer-bottom"><span>Second edition · Proposed CHI 2027 workshop</span><div><a href="https://iab-agents.github.io/" target="_blank" rel="noreferrer">IAB 2026 ↗</a><a href="https://chi2027.acm.org/authors/workshops/" target="_blank" rel="noreferrer">CHI 2027 workshops ↗</a></div></div></div></footer>
    </>
  );
}
