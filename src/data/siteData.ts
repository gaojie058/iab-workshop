// First-edition scope and second-edition participation information.
export const topics = [
  {
    type: 'agents',
    label: 'Agents',
    color: '#b04a2f',
    question: 'What do agents do, and how?',
    items: [
      'What do agents actually do during a run, from planning and reasoning to using tools, failing, and recovering?',
      'What new or emergent behaviors show up in single- and multi-agent systems?',
      'How are these behaviors shaped, by the model, the prompt, the harness, the skills, or the overall agent design?',
    ],
  },
  {
    type: 'humans',
    label: 'Humans',
    color: '#a07d2a',
    question: 'What do humans do in response, and how?',
    items: [
      'What do humans do while working with an agent, from writing prompts to verifying outputs and monitoring the run?',
      'When should humans trust and rely on agents, and when should they not?',
      'How do humans communicate intent, and step in to steer or correct an agent during runtime?',
    ],
  },
  {
    type: 'interaction',
    label: 'Interaction',
    color: '#6a4b7a',
    question: 'What happens when humans and agents interact, and how?',
    items: [
      'What patterns emerge in interaction traces, and how do they differ across tasks?',
      'How do humans and agents build a shared understanding of the goal, and where does it break down?',
      'How do they recover from misunderstandings as the work goes on?',
    ],
  },
];


export const workshopObjectives = [
  'Identify what HCI and social science methods can reveal about agents, humans, and their interactions.',
  'Examine the assumptions, evidence, and limits of applying these methods to agentic systems.',
  'Compare interpretations across disciplines and identify where methods need to be adapted.',
  'Develop shared research questions, practical resources, and opportunities for collaboration.',
];

export const contributionTopics = [
  ['Theories and methodological perspectives', 'Concepts and approaches from HCI, CSCW, and the social sciences that help describe and explain behavior at any of the three levels.'],
  ['Empirical studies and comparative analyses', 'Studies of agent trajectories, human experiences, or interaction practices, including comparisons across tasks, systems, and settings.'],
  ['Adapting and combining methods', 'Experiences of transferring methods to agent research, combining different forms of evidence, and working across disciplinary assumptions.'],
  ['Tools and representations', 'Interfaces, visualizations, datasets, and analytic tools that help people inspect, interpret, and communicate behavioral evidence.'],
  ['Quality of interpretation', 'Ways to examine whether interpretations are well supported, account for disagreement, and make the analytic process transparent.'],
  ['Critical perspectives and open challenges', 'Questions about context, anthropomorphism, researcher assumptions, and whose perspectives are represented in interpretations of agent behavior.'],
];

export const programSessions = [
  {
    title: 'Session 1: Lightning talks across disciplines',
    description: 'Short talks introduce methods from HCI and the social sciences and the agent research questions they could help answer.',
    activities: [
      ['10 min', 'Welcome and framing', 'Introduce the three levels of inquiry: agent behavior, human responses, and their interaction.'],
      ['45 min', 'Lightning talks', 'Speakers and participants briefly present a method, an agent-related research question, and what the method might reveal. Speakers and exact timing will be confirmed later.'],
      ['15 min', 'Clarifying questions', 'Compare the perspectives introduced in the talks and surface questions that need cross-disciplinary discussion.'],
      ['5 min', 'Discussion prompts', 'Collect the methods and research questions that groups will examine in Session 2.'],
    ],
  },
  {
    title: 'Session 2: Which methods help us study agents?',
    description: 'Discuss how methods can be adapted to agent research and when each approach is useful.',
    activities: [
      ['5 min', 'Frame the comparison', 'Choose concrete agent, human, or interaction questions from Session 1 and agree on criteria for comparing methods.'],
      ['30 min', 'Small-group method mapping', 'For each question, identify promising methods, the evidence they require, how they need adapting, and what they may miss.'],
      ['25 min', 'Whole-group discussion', 'Groups share their comparisons and discuss where methods complement one another or lead to different interpretations.'],
      ['15 min', 'Synthesis and next steps', 'Create a shared map of methods to research questions, with promising adaptations, limitations, and open questions.'],
    ],
  },
];

export const faqs = [
  ['Who is this workshop for?', 'Researchers, students, and practitioners in HCI, CSCW, social science, AI, and related fields. We welcome different disciplinary perspectives and levels of experience with agent research.'],
  ['Does my contribution need to address all three levels?', 'No. Work may focus on agents, humans, their interaction, or connections between these levels. Explain what your approach helps us understand and what questions remain open.'],
  ['Can I participate without a paper?', 'The proposed interest-form route would let participants contribute a perspective or question without a paper. CHI 2027 also opens workshops to conference attendees, with priority for accepted position-paper authors. Details of access and capacity will be posted once confirmed.'],
  ['What should a position paper contain?', 'Describe the behavior or interaction you want to understand, your method or perspective, the evidence it uses, and a question you would like to discuss. The draft call proposes 2–4 pages excluding references; final requirements will be announced with the call.'],
  ['Do I need a completed study?', 'The proposed call welcomes early ideas, methodological positions, work in progress, and lessons from unsuccessful approaches, as well as completed studies. The emphasis is on what your contribution brings to the discussion.'],
  ['What is the workshop format?', 'The proposed first session centers on lightning talks introducing methods and agent research questions. In the second, participants compare which methods are useful for particular questions, how to adapt them, and what evidence they need. Exact clock times and speakers will be announced after confirmation.'],
  ['Will remote participation be available?', 'CHI 2027 currently specifies in-person workshops. If IAB is accepted, participation will be in person in Pittsburgh. Links to the conference guidance are provided below.'],
  ['Will participant papers appear in the ACM Digital Library?', 'No ACM Digital Library publication is promised for participant papers. CHI 2027 includes the accepted workshop proposal in its proceedings. We propose sharing participant contributions on this website with author permission; the final sharing and publication policy will be stated in the call.'],
  ['What should participants prepare?', 'We plan to circulate preparation guidance before the workshop. This may include a short introduction, a case or research question for group discussion, and reading other participants’ contributions. Presentation requirements will be confirmed with acceptance notifications.'],
  ['Can I submit now?', 'Submissions are not open yet. Paper and interest-form links, review arrangements, and deadlines will be added when the call opens.'],
  ['Is the CHI 2027 workshop confirmed?', 'This is a proposed second edition of IAB for CHI 2027. Acceptance, the organizing team, the workshop date, and the final call for participation are still to be confirmed.'],
];

export const navLinks = [
  ['About', 'about'],
  ['Participate', 'cfp'],
  ['Schedule', 'schedule'],
  ['Contributions', 'accepted-papers'],
  ['Organizers', 'organizers'],
  ['Q&A', 'faq'],
];
