export interface WorkEntry {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  summary: string;
  bullets: string[];
  tech: string[];
  type: 'work' | 'education';
  url?: string;
}

export const workEntries: WorkEntry[] = [
  {
    company: 'Bekk',
    role: 'Software Developer',
    startDate: 'Aug 2025',
    endDate: 'Present',
    location: 'Oslo, Norway',
    summary: 'Full-time software developer at Bekk, one of Norway\'s leading IT consultancies.',
    bullets: [],
    tech: [
      'React',
      'TypeScript',
      'Kubernetes',
      'Docker',
      'PostgreSQL',
      'Kafka',
      'AWS',
    ],
    type: 'work',
    url: 'https://bekk.no',
  },
  {
    company: 'Junior Consulting',
    role: 'Project Manager',
    startDate: 'Sep 2024',
    endDate: 'Jun 2025',
    location: 'Trondheim, Norway',
    summary:
      'Project manager at Junior Consulting, responsible for full-stack development, team leadership, sales, and maintaining customer relations.',
    bullets: [
      'Led development of LLM-powered web applications for clients',
      'Managed team operations including planning, delegation, and delivery',
      'Handled sales outreach and maintained ongoing customer relationships',
    ],
    tech: ['Project Management', 'LangSmith', 'Hono', 'TypeScript'],
    type: 'work',
    url: 'https://juniorconsulting.no',
  },
  {
    company: 'Disruptive Technologies',
    role: 'Full Stack Developer Intern',
    startDate: 'Mar 2024',
    endDate: 'Aug 2025',
    location: 'Trondheim, Norway',
    summary:
      'Part-time full-stack developer on the Cloud Engineering Team, building internal and external applications for sensor planning and installation.',
    bullets: [
      'Developed internal and external full-stack applications for sensor planning and installation workflows',
      'Contributed to customer-facing and internal APIs',
      'Worked within a cloud-native stack using GCP, Kubernetes, and Terraform',
    ],
    tech: ['React', 'TypeScript', 'Google Cloud Platform', 'Terraform', 'Docker', 'Kubernetes', 'API Design'],
    type: 'work',
    url: 'https://www.disruptive-technologies.com',
  },
  {
    company: 'Bekk',
    role: 'Summer Intern — Trondheim 2025',
    startDate: 'Jun 2024',
    endDate: 'Aug 2024',
    location: 'Oslo, Norway',
    summary:
      'Built the official programme portal for the 2025 FIS Nordic World Ski Championships in Trondheim, helping to present the event and drive ticket sales.',
    bullets: [
      'Designed and built portal.trondheim2025.no — a public-facing event and ticketing portal',
      'Aided architecture and technology decisions for the platform',
      'Conducted rigorous user testing and iterated on UX based on findings',
      'Maintained regular contact with relevant stakeholders throughout the project',
    ],
    tech: ['Next.js', 'TypeScript', 'React', 'Sanity', 'Vercel', 'Figma'],
    type: 'work',
    url: 'https://bekk.no',
  },
  {
    company: 'NTNU — Dept. of Computer Science',
    role: 'Teaching Assistant — TDT4140 Software Engineering',
    startDate: 'Jan 2024',
    endDate: 'May 2024',
    location: 'Trondheim, Norway',
    summary:
      'Teaching assistant for TDT4140 Software Engineering, guiding student teams through Scrum and agile methodologies.',
    bullets: [
      'Acted as product owner for student teams working through the full SDLC',
      'Guided teams on Scrum ceremonies, sprint planning, and agile practices',
      'Graded assignments and gave structured feedback on software engineering deliverables',
    ],
    tech: ['Agile', 'Scrum'],
    type: 'work',
    url: 'https://ntnu.no',
  },
  {
    company: 'NTNU — Dept. of Computer Science',
    role: 'Research Assistant — IT2805 Web Technologies',
    startDate: 'Aug 2022',
    endDate: 'Dec 2024',
    location: 'Trondheim, Norway',
    summary:
      'Expanded from teaching assistant to research assistant, taking on course coordination, curriculum development, and lecture delivery for IT2805 Web Technologies.',
    bullets: [
      'Organized and led a team of teaching assistants across the course',
      'Delivered lectures on HTML5, CSS3, and JavaScript to large student cohorts',
      'Designed and managed the course project and lab hour schedules',
      'Handled administrative tasks and served as primary point of contact for course logistics',
    ],
    tech: ['JavaScript', 'HTML', 'CSS', 'Management'],
    type: 'work',
    url: 'https://ntnu.no',
  },
  {
    company: 'Bekk',
    role: 'Summer Intern — Møller Mobility Group',
    startDate: 'Jun 2023',
    endDate: 'Jul 2023',
    location: 'Oslo, Norway',
    summary:
      'Summer internship at Bekk, embedded with Møller Mobility Group to explore and prototype improvements to the online car-purchasing experience.',
    bullets: [
      'Worked in an interdisciplinary team exploring alternative solutions for buying cars online',
      'Contributed to full-stack feature development across the web platform',
    ],
    tech: ['React', 'Next.js', 'Terraform', 'C#', 'Docker', 'Kubernetes', 'PostgreSQL'],
    type: 'work',
    url: 'https://bekk.no',
  },
  {
    company: 'Disruptive Technologies',
    role: 'Software Developer',
    startDate: 'Aug 2022',
    endDate: 'Jun 2023',
    location: 'Trondheim, Norway',
    summary:
      'Continued part-time on the Cloud Team after the 2022 summer internship, extending the IoT signal tool and working on API development and security.',
    bullets: [
      'Extended and maintained the web application built during the summer internship',
      'Contributed to API development and backend services on GCP',
      'Worked on security improvements within the cloud infrastructure',
    ],
    tech: ['TypeScript', 'Vue.js', 'Go', 'PostgreSQL', 'Kubernetes', 'Firebase', 'Google Cloud Platform', 'Terraform', 'API Design'],
    type: 'work',
    url: 'https://www.disruptive-technologies.com',
  },
  {
    company: 'Disruptive Technologies',
    role: 'Summer Intern',
    startDate: 'Jun 2022',
    endDate: 'Aug 2022',
    location: 'Oslo, Norway',
    summary:
      'Built a web application for approximating IoT radio signal strength based on floor plans, wall materials, and other physical factors.',
    bullets: [
      'Designed and implemented the full-stack application for IoT signal strength approximation',
      'Built the frontend with Vue.js and TypeScript; backend services in Go with PostgreSQL',
      'Deployed and operated the application on Google Cloud Platform using Kubernetes',
    ],
    tech: ['TypeScript', 'Vue.js', 'Go', 'PostgreSQL', 'Kubernetes', 'Firebase', 'Google Cloud Platform', 'Terraform'],
    type: 'work',
    url: 'https://www.disruptive-technologies.com',
  },
  {
    company: 'NTNU — Dept. of Computer Science',
    role: 'Teaching Assistant — DCST1007 Object-Oriented Programming',
    startDate: 'Jan 2022',
    endDate: 'Jun 2022',
    location: 'Trondheim, Norway',
    summary:
      'Teaching assistant for DCST1007, guiding students through object-oriented programming patterns using JavaScript and React.',
    bullets: [
      'Guided students through OOP concepts and design patterns in JavaScript',
      'Graded assignments covering React, JSON, and the Fetch API',
    ],
    tech: ['JavaScript', 'React', 'JSON', 'Object-Oriented Programming'],
    type: 'work',
    url: 'https://ntnu.no',
  },
  {
    company: 'NTNU — Dept. of Computer Science',
    role: 'Teaching Assistant — IT2805 Web Technologies',
    startDate: 'Aug 2021',
    endDate: 'Dec 2021',
    location: 'Trondheim, Norway',
    summary:
      'First teaching assistant role at NTNU, supporting students in learning the fundamentals of HTML5, CSS3, and JavaScript.',
    bullets: [
      'Provided student guidance and one-on-one counseling during lab hours',
      'Graded assignments covering HTML5, CSS3, and JavaScript fundamentals',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    type: 'work',
    url: 'https://ntnu.no',
  },

  // ── EDUCATION ─────────────────────────────────────────────────────────────

  {
    company: 'NTNU',
    role: "Master's in Computer Science",
    startDate: 'Aug 2022',
    endDate: 'Jun 2024',
    location: 'Trondheim, Norway',
    summary: "Master's degree in Computer Science at NTNU.",
    bullets: [
      "Specialisation in software engineering with a thesis focused on artificial intelligence",
      "Master's thesis: Quantifying and Forecasting Excitement in NBA Basketball Games",
      'Coursework in software engineering, systems architecture, ethical hacking, and project management',
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    type: 'education',
    url: 'https://ntnu.no',
  },
  {
    company: 'NTNU',
    role: "Bachelor's in Computer Science (Informatikk)",
    startDate: 'Aug 2019',
    endDate: 'Jun 2022',
    location: 'Trondheim, Norway',
    summary:
      'Three-year degree covering algorithms, data structures, software engineering, databases, and operating systems.',
    bullets: [
      'Final project: full-stack web application for collaborative task management',
      'Member of Online linjeforening (and developer in the systems committee)',
      'Coursework in algorithms, data structures, software engineering, databases, and operating systems',
    ],
    tech: [],
    type: 'education',
    url: 'https://ntnu.no',
  },
];
