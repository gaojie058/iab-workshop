import Image from 'next/image';
import Navigation from './components/Navigation';
import TopicIcon from './components/TopicIcon';
import { topics, faqs, workshopObjectives, contributionTopics, programSessions } from './data/siteData';

const conferenceGuidance = 'https://chi2027.acm.org/authors/workshops/';

function Hero() {
  return (
    <header id="top" className="hero">
      <Image unoptimized src="/hero.png" alt="A Claude Code terminal session analyzing an AI agent runtime trajectory" className="hero-bg" fill priority />
      <div className="container">
        <div className="hero-eyebrow">The Second Workshop on</div>
        <h1>Interpreting Agent Behavior</h1>
        <div className="subtitle">HCI and Social Science Methods for Understanding Agents, Humans, and Their Interactions</div>
        <div className="venue-line">
          <div className="venue-place">
            <strong><a href="https://chi2027.acm.org/" target="_blank" rel="noopener noreferrer">CHI 2027</a></strong>
            <span className="venue-divider" aria-hidden="true">·</span><span>Pittsburgh, USA</span>
          </div>
          <span className="venue-date">Proposed workshop · Date to be announced</span>
        </div>
        <div className="hero-actions">
          <a className="hero-btn hero-btn--primary" href="#cfp">Call for Participation</a>
          <a className="hero-btn" href="#schedule">Workshop Program</a>
        </div>
        <a className="previous-edition" href="https://iab-agents.github.io/" target="_blank" rel="noopener noreferrer">First edition: IAB at NeurIPS 2026 ↗</a>
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="about">
      <div className="container">
        <h2>About the Workshop</h2>
        <h3 className="workshop-question">What methods from <em>HCI and the social sciences</em> can help us understand agents, humans, and their interactions?</h3>
        <div className="about-content">
          <p>AI agents plan, use tools, recover from errors, and coordinate with people over extended periods of work. Their trajectories and interactions provide rich material for research. Making sense of this material requires decisions about what to observe, how to describe it, and what evidence can support an interpretation.</p>
          <p>IAB studies behavior at <span className="uline">three connected levels: what agents do, what humans do in response, and how the two work together</span>. Understanding these levels brings together questions about system behavior, human experience, and the social context in which interaction takes place.</p>
          <p>Building on the IAB workshop series, the proposed second edition at CHI 2027 focuses on <span className="uline">methods from HCI and the social sciences</span>. We invite researchers and practitioners to examine how established approaches can inform agent research, which assumptions need reconsideration, and what new approaches may be needed.</p>
          <p>Our aim is to develop a shared understanding of the methodological possibilities and challenges, supported by concrete cases and perspectives from different disciplines.</p>
        </div>
        <h3 className="cfp-heading">Workshop Objectives</h3>
        <ul className="lead-list objectives-list">{workshopObjectives.map(objective => <li key={objective}>{objective}</li>)}</ul>
      </div>
    </section>
  );
}

function ScopeSection() {
  return (
    <section id="topics" className="alt">
      <div className="container">
        <h2>Scope</h2>
        <p className="lead">Contributions may address any one of these levels or the connections between them. We welcome qualitative, quantitative, mixed, and design approaches.</p>
        <div className="topics-grid">
          {topics.map(topic => (
            <article className="topic-card" key={topic.type}>
              <h3><TopicIcon type={topic.type} color={topic.color} /><span><span style={{color:topic.color}}>{topic.label}</span>: {topic.question}</span></h3>
              <ul>{topic.items.map(item => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Participation() {
  return (
    <section id="cfp">
      <div className="container">
        <h2>Call for Participation <span className="status-pill">Draft · Forthcoming</span></h2>
        <p className="lead">We invite the HCI, CSCW, social science, AI, and related communities to explore how we can understand agents, humans, and their interactions. Bring a study, a methodological perspective, a tool, or a question you would like to work through with others.</p>
        <div className="special-track draft-call-note">
          <h4>Proposed participation format</h4>
          <p>Submissions are not open yet. The options and requirements below are a draft for the proposed workshop and will be finalized when the call opens.</p>
        </div>

        <h3 className="cfp-heading">Participation Options</h3>
        <div className="cfp-formats participation-options">
          <article className="cfp-box">
            <h4>Position Paper</h4>
            <p>A proposed 2–4 page paper, excluding references, using the ACM single-column template. Describe a methodological argument, an empirical case, a design exploration, or work in progress.</p>
          </article>
          <article className="cfp-box">
            <h4>Statement of Interest</h4>
            <p>A proposed short form describing your background, the perspective or question you would bring, and what you hope to learn. This route would support participation without a paper.</p>
          </article>
        </div>
        <p className="participation-note">The proposed process asks for either a paper or a statement of interest. Submission links and final instructions will be posted here.</p>

        <h3 className="cfp-heading">Topics of Interest</h3>
        <p>We welcome contributions addressing the following topics, among others:</p>
        <ul className="lead-list contribution-topics">
          {contributionTopics.map(([title, description]) => <li key={title}><strong>{title}.</strong> {description}</li>)}
        </ul>

        <h3 className="cfp-heading">Preparing a Contribution</h3>
        <p>Explain what behavior or interaction you want to understand, which method or perspective you use, and what it helps you see. Discuss the evidence behind your interpretation, the limitations of your approach, and one question you would like to explore during the workshop.</p>
        <p>We welcome early ideas and negative results alongside completed studies. For a paper, the proposed format is <a href="https://chi2027.acm.org/chi-publication-formats/" target="_blank" rel="noopener noreferrer">ACM single-column</a>. Anonymity requirements and submission instructions will be specified in the final call.</p>

        <h3 className="cfp-heading">Review and Selection</h3>
        <p>We propose reviewing contributions for their connection to the workshop questions, clarity of the perspective or evidence, and potential to support discussion. The program will aim to represent different disciplines, research settings, and methodological viewpoints. The final review process and capacity will be announced with the call.</p>

        <h3 className="cfp-heading">Key Dates</h3>
        <div className="dates-table-wrap">
          <table className="dates-table">
            <caption className="visually-hidden">IAB 2027 participant submission and workshop dates</caption>
            <tbody>
              <tr><th scope="row">Call opens</th><td>To be announced</td></tr>
              <tr><th scope="row">Paper and statement deadline</th><td>To be announced</td></tr>
              <tr><th scope="row">Participant notification</th><td>To be announced</td></tr>
              <tr><th scope="row">Workshop date and time</th><td>To be announced</td></tr>
            </tbody>
          </table>
        </div>
        <p className="participation-note">Deadlines and their time zone will be specified when the call opens.</p>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section id="schedule" className="alt">
      <div className="container">
        <h2>Workshop Program <span className="status-pill">Proposed</span></h2>
        <p className="lead">Two sessions combining perspectives, participant contributions, discussion, and group work. The draft below allocates 75 minutes to each session; clock times and presenters remain to be confirmed.</p>
        <p className="conference-guidance">The format follows <a href={conferenceGuidance} target="_blank" rel="noopener noreferrer">CHI 2027 workshop guidance</a>: in-person participation, two consecutive sessions of approximately 75–90 minutes each, and a break between sessions.</p>
        {programSessions.map((session, index) => (
          <div className="program-session" key={session.title}>
            {index > 0 && <div className="program-break">Conference break · Informal exchange</div>}
            <h3 className="cfp-heading">{session.title}</h3>
            <p className="session-description">{session.description}</p>
            <div className="schedule-list">
              {session.activities.map(([duration, title, description]) => (
                <div className="sch" key={title}>
                  <span className="sch-time">{duration}</span>
                  <div className="sch-desc"><strong>{title}</strong><p>{description}</p></div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="workshop-outcome">
          <strong>After the workshop</strong>
          <p>We aim to prepare a shared summary of methodological questions, adaptations, and resource needs. Participants will be invited to contribute to the summary and identify opportunities for continued collaboration.</p>
        </div>
      </div>
    </section>
  );
}

function AcceptedContributions() {
  return (
    <section id="accepted-papers">
      <div className="container">
        <h2>Accepted Contributions <span className="status-pill">Forthcoming</span></h2>
        <p className="lead">Accepted contributions will be listed after the review process. No submissions have been selected yet.</p>
        <h3 className="cfp-heading">Sharing and Presentation</h3>
        <p>We propose sharing titles, abstracts, and author-approved materials on this website before the workshop. Selected contributions may be invited to the participant spotlight session; preparation guidance will accompany acceptance notifications.</p>
        <p>Publication arrangements for participant contributions remain to be confirmed. Under <a href={conferenceGuidance} target="_blank" rel="noopener noreferrer">CHI 2027 policy</a>, the workshop proposal is the document included in the CHI Extended Abstracts proceedings. Acceptance of a participant paper does not itself imply ACM Digital Library publication.</p>
      </div>
    </section>
  );
}

function Organizers() {
  return (
    <section id="organizers" className="alt">
      <div className="container">
        <h2>Organizers</h2>
        <p className="lead">The organizing team for the second edition will be announced here.</p>
        <p><a href="https://iab-agents.github.io/#organizers" target="_blank" rel="noopener noreferrer">Meet the first-edition organizing team ↗</a></p>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq">
      <div className="container">
        <h2>Questions and Answers</h2>
        <p className="lead">Information for prospective participants and contributors.</p>
        <div className="faq-list">{faqs.map(([question, answer]) => <details className="faq-item" key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        <p className="conference-guidance">Conference format, attendance, and proceedings information: <a href={conferenceGuidance} target="_blank" rel="noopener noreferrer">CHI 2027 workshops</a>.</p>
        <p className="contact-line">IAB series contact: <a href="mailto:iab-workshop@googlegroups.com">iab-workshop@googlegroups.com</a>.</p>
      </div>
    </section>
  );
}

export default function Workshop() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main"><Hero /><About /><ScopeSection /><Participation /><Schedule /><AcceptedContributions /><Organizers /><Faq /></main>
      <footer>
        <div className="container">
          <p><strong>IAB</strong> · Interpreting Agent Behavior</p>
          <p>HCI and Social Science Methods for Understanding Agents, Humans, and Their Interactions</p>
          <p>Second edition · Proposed CHI 2027 workshop · <a href="https://iab-agents.github.io/" target="_blank" rel="noopener noreferrer">First edition at NeurIPS 2026</a></p>
        </div>
      </footer>
    </>
  );
}
