import { useState } from 'react';
import Image from 'next/image';
import Navigation from './components/Navigation';
import TopicIcon from './components/TopicIcon';
import { topics, methods, scopes, faqs, type Scope } from './data/siteData';

function Hero() {
  return (
    <header id="top" className="hero">
      <Image unoptimized src="/hero.png" alt="A Claude Code terminal session analyzing an AI agent runtime trajectory" className="hero-bg" fill priority />
      <div className="container">
        <div className="hero-eyebrow">The Second Workshop on</div>
        <h1>Interpreting Agent Behavior</h1>
        <div className="subtitle">HCI and Social Science Methods for Understanding Agents, Humans, and Their Interactions</div>
        <div className="venue-line">
          <div className="venue-place"><strong><a href="https://chi2027.acm.org/" target="_blank" rel="noopener noreferrer">CHI 2027</a></strong><span className="venue-divider" aria-hidden="true">·</span><span>Pittsburgh, USA</span></div>
          <span className="venue-date">Proposed workshop · Date to be announced</span>
        </div>
        <div className="hero-actions"><a className="hero-btn hero-btn--primary" href="#methods">Explore the Methods</a><a className="hero-btn" href="#cfp">Participation Details</a></div>
        <a className="previous-edition" href="https://iab-agents.github.io/" target="_blank" rel="noopener noreferrer">First edition: IAB at NeurIPS 2026 ↗</a>
      </div>
    </header>
  );
}

function About() {
  return <section id="about"><div className="container">
    <h2 className="workshop-question">What methods from <em>HCI and the social sciences</em> can help us understand agents, humans, and their interactions?</h2>
    <div className="about-content">
      <p>As agents become part of everyday work, understanding their behavior also means understanding the people who work with them and the interactions that unfold between them. IAB brings together perspectives from HCI, social science, and AI to study <span className="uline">what agents do, what humans do in response, and how the two work together</span>.</p>
      <p>The second edition focuses on <span className="uline">the methods we can use to understand these three levels</span>. We aim to bring together researchers and practitioners to exchange methodological perspectives and research experiences, discuss what different approaches can reveal, and identify where existing methods need to be adapted.</p>
      <p>We welcome qualitative, quantitative, mixed, and design methods. Together, we will explore three questions: <strong>What methods are possible? What can they help us understand? And how should they be adapted to studying agents, humans, and their interactions?</strong></p>
    </div>
  </div></section>;
}

function ScopeSection() {
  return <section id="topics" className="alt"><div className="container"><h2>Scope</h2><p className="lead">IAB studies behavior at three levels: the agent, the human, and their interaction. Contributions may focus on any one level or the connections between them.</p><div className="topics-grid">{topics.map(topic => <article className="topic-card" key={topic.type}><h3><TopicIcon type={topic.type} color={topic.color} /><span><span style={{color:topic.color}}>{topic.label}</span>: {topic.question}</span></h3><ul>{topic.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>;
}

function Methods() {
  const [scope, setScope] = useState<Scope>('All methods');
  const visible = methods.filter(method => scope === 'All methods' || method.scopes.includes(scope));
  return <section id="methods"><div className="container"><h2>Methods to Explore</h2><p className="lead">A starting point for our conversation: what can different HCI and social science methods reveal, what evidence do they require, and where are their limitations?</p><div className="method-toolbar"><div className="method-filters" role="group" aria-label="Filter methods by research focus">{scopes.map(item => <button type="button" key={item} aria-pressed={scope === item} onClick={() => setScope(item)}>{item}</button>)}</div><span aria-live="polite">{visible.length} methods</span></div><div className="methods-grid">{visible.map(method => <article className="cfp-box method-card" key={method.name}><span className="method-approach">{method.approach}</span><h3>{method.name}</h3><p>{method.description}</p><div className="method-question"><strong>A question to explore</strong><p>{method.question}</p></div><div className="method-tags">{method.scopes.map(tag => <span key={tag} className={tag.toLowerCase()}>{tag}</span>)}</div></article>)}</div><p className="method-note">These examples are illustrative. The focus labels suggest possible applications, not fixed boundaries or an exhaustive list of methods.</p></div></section>;
}

function Participation() {
  return <section id="cfp" className="alt"><div className="container"><h2>Call for Participation <span className="status-pill">Forthcoming</span></h2><p className="lead">Bring a method, a case, or a question. We welcome researchers and practitioners from HCI, social science, and AI who want to understand agents, humans, and their interactions.</p><h3 className="cfp-heading">Contributions of Interest</h3><div className="cfp-formats">
    <article className="cfp-box"><h4>Methodological Perspectives</h4><p>Methods, theoretical perspectives, or positions on how to study behavior at one or more of the three levels.</p></article>
    <article className="cfp-box"><h4>Studies and Experiences</h4><p>Empirical cases, methodological challenges, negative results, and lessons from applying or adapting a method.</p></article>
    <article className="cfp-box"><h4>Tools and Design Explorations</h4><p>Tools, prototypes, or design inquiries that help people investigate and make sense of behavior and interaction.</p></article>
    </div><h3 className="cfp-heading">Important Dates and Submission Details</h3><div className="dates-table-wrap"><table className="dates-table"><caption className="visually-hidden">Second-edition participation details</caption><tbody><tr><th scope="row">Submission deadline</th><td>To be announced</td></tr><tr><th scope="row">Submission format and selection process</th><td>To be announced</td></tr><tr><th scope="row">Workshop date</th><td>To be announced</td></tr><tr><th scope="row">Conference</th><td><a href="https://chi2027.acm.org/" target="_blank" rel="noopener noreferrer">CHI 2027 · Pittsburgh, USA</a></td></tr></tbody></table></div><p className="participation-note">Submissions are not open yet. The call and submission link will be announced after the workshop is confirmed.</p></div></section>;
}

const schedule = [
  {time:'Session 1',title:'Share methods, cases, and questions',description:'Short participant introductions surface different approaches, research contexts, and methodological challenges.'},
  {time:'Session 1',title:'Map methods to research questions',description:'Discuss what each method can reveal about agents, humans, and interaction, and what evidence it requires.'},
  {time:'Session 2',title:'Explore methods in small groups',description:'Use shared cases, interaction excerpts, or design scenarios to examine interpretations, assumptions, and limitations.'},
  {time:'Session 2',title:'Develop a shared research agenda',description:'Compare insights across groups and identify methodological adaptations, open questions, and opportunities to collaborate.'},
];
function Schedule() {
  return <section id="schedule"><div className="container"><h2>Schedule <span className="status-pill">Proposed</span></h2><p className="lead">Two consecutive sessions for exchanging methods, working through examples, and identifying questions to pursue together. The final schedule will be announced after confirmation.</p><div className="schedule-list">{schedule.map(item => <div className="sch" key={item.title}><span className="sch-time">{item.time}</span><div className="sch-desc"><strong>{item.title}</strong><p>{item.description}</p></div></div>)}</div><div className="workshop-outcome"><strong>What we aim to take away</strong><p>A shared map of methods, their possibilities and limitations, and questions worth pursuing together.</p></div></div></section>;
}

function Organizers() {
  return <section id="organizers" className="alt"><div className="container"><h2>Organizers</h2><p className="lead">The organizing team for the second edition will be announced here.</p><p><a href="https://iab-agents.github.io/#organizers" target="_blank" rel="noopener noreferrer">Meet the first-edition organizing team ↗</a></p></div></section>;
}

function Faq() {
  return <section id="faq"><div className="container"><h2>Questions and Answers</h2><p className="lead">About the workshop scope, participation, and current plans.</p><div className="faq-list">{faqs.map(([question,answer]) => <details className="faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>;
}

export default function Workshop() {
  return <><a className="skip-link" href="#main">Skip to content</a><Navigation /><main id="main"><Hero /><About /><ScopeSection /><Methods /><Participation /><Schedule /><Organizers /><Faq /></main><footer><div className="container"><p><strong>IAB</strong> · Interpreting Agent Behavior</p><p>HCI and Social Science Methods for Understanding Agents, Humans, and Their Interactions</p><p>Second edition · Proposed CHI 2027 workshop · <a href="https://iab-agents.github.io/" target="_blank" rel="noopener noreferrer">First edition at NeurIPS 2026</a></p></div></footer></>;
}
