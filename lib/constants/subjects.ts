import {
  Book,
  Cpu,
  Code,
  Database,
  Network,
  Brain,
  Shield,
  Layers,
  GitBranch,
  Laptop,
  FileText,
  Sparkles,
} from "lucide-react"

export interface Subject {
  id: string
  name: string
  icon: any
  color: string
  tags: string[]
  type: "Core" | "Lab" | "Elective"
  description: string
  credits: number
  difficulty: 1 | 2 | 3 | 4 | 5
}

export const subjectsData: Record<string, Record<string, Subject[]>> = {
  "1": {
    odd: [
      {
        id: "math1",
        name: "Mathematics - I",
        icon: Brain,
        color: "text-blue-600",
        tags: ["Calculus", "Matrices", "Engineering Maths"],
        type: "Core",
        description:
          "Calculus, differential equations and linear algebra for engineering applications.",
        credits: 4,
        difficulty: 4,
      },
      {
        id: "chem",
        name: "Engineering Chemistry",
        icon: Book,
        color: "text-green-600",
        tags: ["Polymers", "Fuels", "Water Chemistry"],
        type: "Core",
        description:
          "Water chemistry, green chemistry, and polymer science applications.",
        credits: 4,
        difficulty: 2,
      },
      {
        id: "eea",
        name: "Electronic Engineering",
        icon: Cpu,
        color: "text-purple-600",
        tags: ["Electronics", "Diodes", "Transistors"],
        type: "Core",
        description:
          "Introduction to electronic devices, circuits and basic digital electronics.",
        credits: 3,
        difficulty: 3,
      },
    ],
    even: [
      {
        id: "phy",
        name: "Engineering Physics",
        icon: Sparkles,
        color: "text-indigo-600",
        tags: ["Optics", "Quantum", "Modern Physics"],
        type: "Core",
        description: "Wave optics, quantum mechanics, and solid-state physics.",
        credits: 4,
        difficulty: 3,
      },
      {
        id: "ee",
        name: "Electrical Engineering",
        icon: Cpu,
        color: "text-yellow-600",
        tags: ["Circuits", "Transformers", "Motors"],
        type: "Core",
        description:
          "DC/AC circuits, magnetic circuits, and electrical machines.",
        credits: 3,
        difficulty: 3,
      },
      {
        id: "math2",
        name: "Mathematics - II",
        icon: Brain,
        color: "text-blue-600",
        tags: ["ODEs", "Complex Variables", "Laplace"],
        type: "Core",
        description:
          "Ordinary differential equations, complex variables and Laplace transforms.",
        credits: 4,
        difficulty: 5,
      },
      {
        id: "mech",
        name: "Mechanical Engineering",
        icon: Layers,
        color: "text-orange-600",
        tags: ["Thermodynamics", "Mechanics", "Machines"],
        type: "Core",
        description:
          "Basic thermodynamics, engineering mechanics and machine fundamentals.",
        credits: 3,
        difficulty: 3,
      },
    ],
  },
  "2": {
    odd: [
      {
        id: "math3",
        name: "Mathematics - III",
        icon: Brain,
        color: "text-blue-600",
        tags: ["Fourier", "PDE", "Probability"],
        type: "Core",
        description:
          "Fourier series, partial differential equations and probability theory.",
        credits: 4,
        difficulty: 5,
      },
      {
        id: "coa",
        name: "Computer Organisation",
        icon: Cpu,
        color: "text-purple-600",
        tags: ["Architecture", "CPU", "Memory"],
        type: "Core",
        description:
          "Computer architecture, CPU design, memory organization and I/O systems.",
        credits: 3,
        difficulty: 4,
      },
      {
        id: "dbms",
        name: "Database Management Systems",
        icon: Database,
        color: "text-green-600",
        tags: ["SQL", "Normalization", "Transactions"],
        type: "Core",
        description:
          "Relational database design, SQL, normalization and transaction management.",
        credits: 3,
        difficulty: 3,
      },
      {
        id: "cn",
        name: "Computer Networks",
        icon: Network,
        color: "text-blue-500",
        tags: ["TCP/IP", "OSI", "Protocols"],
        type: "Core",
        description:
          "Data communication, OSI model, TCP/IP protocols and network security.",
        credits: 3,
        difficulty: 3,
      },
    ],
    even: [
      {
        id: "mp",
        name: "Microprocessor",
        icon: Cpu,
        color: "text-purple-600",
        tags: ["8085", "Assembly", "Interfacing"],
        type: "Core",
        description:
          "Microprocessor architecture, assembly programming and hardware interfacing.",
        credits: 3,
        difficulty: 4,
      },
      {
        id: "ps",
        name: "Probability & Statistics",
        icon: Brain,
        color: "text-blue-600",
        tags: ["Probability", "Statistics", "Random Variables"],
        type: "Core",
        description:
          "Probability theory, random variables and statistical inference.",
        credits: 3,
        difficulty: 4,
      },
      {
        id: "os",
        name: "Operating Systems",
        icon: Layers,
        color: "text-orange-600",
        tags: ["Processes", "Scheduling", "Memory"],
        type: "Core",
        description:
          "Process management, CPU scheduling, memory allocation and file systems.",
        credits: 3,
        difficulty: 4,
      },
      {
        id: "dsa",
        name: "Data Structures & Algorithms",
        icon: Code,
        color: "text-red-600",
        tags: ["Trees", "Graphs", "Complexity"],
        type: "Core",
        description:
          "Linear and non-linear data structures, algorithms and complexity analysis.",
        credits: 4,
        difficulty: 5,
      },
    ],
  },
  "3": {
    odd: [
      {
        id: "daa",
        name: "Design & Analysis of Algorithms",
        icon: Code,
        color: "text-red-600",
        tags: ["Dynamic Programming", "Greedy", "Graph Algorithms"],
        type: "Core",
        description:
          "Advanced algorithm design techniques and rigorous complexity analysis.",
        credits: 4,
        difficulty: 5,
      },
      {
        id: "agile",
        name: "Agile Methodologies",
        icon: GitBranch,
        color: "text-green-600",
        tags: ["Scrum", "Kanban", "Sprint"],
        type: "Core",
        description:
          "Agile development practices, Scrum framework and iterative development.",
        credits: 3,
        difficulty: 2,
      },
      {
        id: "cp",
        name: "Competitive Programming",
        icon: Code,
        color: "text-yellow-600",
        tags: ["DSA", "Contests", "Problem Solving"],
        type: "Core",
        description:
          "Algorithm optimization, competitive coding techniques and problem solving.",
        credits: 3,
        difficulty: 5,
      },
      {
        id: "fsd",
        name: "Fullstack Web Development",
        icon: Laptop,
        color: "text-blue-600",
        tags: ["React", "Node", "Database"],
        type: "Lab",
        description:
          "Frontend and backend development using modern web technologies.",
        credits: 3,
        difficulty: 3,
      },
    ],
    even: [
      {
        id: "toa",
        name: "Theory of Automata",
        icon: Brain,
        color: "text-purple-600",
        tags: ["Automata", "Regular Expressions", "Turing Machine"],
        type: "Core",
        description:
          "Finite automata, regular languages, context-free grammars and Turing machines.",
        credits: 4,
        difficulty: 5,
      },
      {
        id: "dip",
        name: "Digital Image Processing",
        icon: FileText,
        color: "text-indigo-600",
        tags: ["Image Enhancement", "Segmentation", "Compression"],
        type: "Elective",
        description:
          "Image acquisition, enhancement, filtering and compression techniques.",
        credits: 3,
        difficulty: 4,
      },
      {
        id: "bd",
        name: "Big Data",
        icon: Database,
        color: "text-green-600",
        tags: ["Hadoop", "Spark", "Data Processing"],
        type: "Elective",
        description:
          "Distributed data processing using Hadoop, Spark and related technologies.",
        credits: 3,
        difficulty: 4,
      },
      {
        id: "quants",
        name: "Quantitative Aptitude",
        icon: Brain,
        color: "text-orange-600",
        tags: ["Aptitude", "Logical Reasoning", "Quantitative"],
        type: "Elective",
        description:
          "Problem solving, numerical ability and logical reasoning skills.",
        credits: 2,
        difficulty: 2,
      },
    ],
  },
  "4": {
    odd: [
      {
        id: "ml",
        name: "Machine Learning",
        icon: Brain,
        color: "text-purple-600",
        tags: ["ML", "Neural Networks", "AI"],
        type: "Elective",
        description:
          "Supervised and unsupervised learning, neural networks and ML algorithms.",
        credits: 3,
        difficulty: 4,
      },
      {
        id: "cloud",
        name: "Cloud Computing",
        icon: Network,
        color: "text-blue-600",
        tags: ["AWS", "Azure", "Virtualization"],
        type: "Elective",
        description:
          "Cloud architecture, virtualization and distributed computing.",
        credits: 3,
        difficulty: 3,
      },
    ],
    even: [
      {
        id: "project",
        name: "Capstone Project",
        icon: Book,
        color: "text-green-600",
        tags: ["Project", "Research", "Implementation"],
        type: "Core",
        description:
          "Final year major project with research and implementation components.",
        credits: 8,
        difficulty: 5,
      },
      {
        id: "seminar",
        name: "Seminar & Technical Writing",
        icon: FileText,
        color: "text-yellow-600",
        tags: ["Presentation", "Technical Writing"],
        type: "Core",
        description:
          "Technical presentation skills and research paper writing.",
        credits: 2,
        difficulty: 1,
      },
    ],
  },
}

export const getAllSubjectIds = (): string[] => {
  const ids: string[] = []
  Object.values(subjectsData).forEach((yearData) => {
    Object.values(yearData).forEach((subjects) => {
      subjects.forEach((subject) => {
        ids.push(subject.id)
      })
    })
  })
  return ids
}

export const getSubjectNameById = (id: string): string => {
  for (const year of Object.values(subjectsData)) {
    for (const semester of Object.values(year)) {
      const found = semester.find((s) => s.id === id)
      if (found) return found.name
    }
  }
  return id
}
