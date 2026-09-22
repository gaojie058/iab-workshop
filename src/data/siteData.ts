// First-edition scope, with second-edition methods and participation information.
export const scopes = ["All methods", "Agents", "Humans", "Interaction"] as const;
export type Scope = (typeof scopes)[number];
export const methods: { name: string; approach: string; description: string; question: string; scopes: Scope[] }[] = [
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


export const faqs = [
  ["Who is this workshop for?", "Researchers and practitioners in HCI, social science, and AI who want to understand agent behavior, human behavior around agents, or human–agent interaction. We welcome a range of methodological backgrounds and levels of experience."],
  ["Does my work need to cover all three levels?", "No. A contribution may focus on agents, humans, their interaction, or connections between these levels. The shared interest is what a method helps us understand and how it can be used responsibly."],
  ["Are quantitative and design methods in scope?", "Yes. The workshop considers qualitative, quantitative, mixed, and design methods. We are interested in what each approach can reveal, the evidence it requires, and its limitations."],
  ["Can I submit a contribution now?", "The call for participation is not open yet. Submission requirements, the selection process, deadlines, and a submission link will be announced here once confirmed."],
  ["Is the CHI 2027 workshop confirmed?", "This page describes a proposed second edition of IAB for CHI 2027. Acceptance, the workshop date, and attendance details have not yet been confirmed."],
];


export const navLinks = [['About','about'],['Methods','methods'],['Participate','cfp'],['Schedule','schedule'],['Organizers','organizers'],['Q&A','faq']];
