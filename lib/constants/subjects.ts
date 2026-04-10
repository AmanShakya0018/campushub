import { Book, Cpu, Code, Database, Network, Brain, Shield, Layers } from "lucide-react"

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
        color: "text-neutral-600", 
        tags: ["Calculus", "Matrices"], 
        type: "Core",
        description: "Fundamental calculus, differential equations and linear algebra for engineering applications.",
        credits: 4,
        difficulty: 4
      },
      { 
        id: "phy", 
        name: "Engineering Physics", 
        icon: Cpu, 
        color: "text-neutral-600", 
        tags: ["Optics", "Quantum"], 
        type: "Core",
        description: "Introduction to wave optics, quantum mechanics, and solid-state physics.",
        credits: 4,
        difficulty: 3
      },
      { 
        id: "pps", 
        name: "Programming for Problem Solving", 
        icon: Code, 
        color: "text-neutral-600", 
        tags: ["C Programming", "Logic"], 
        type: "Core",
        description: "Basic programming concepts using C language, focused on logic building and algorithm design.",
        credits: 3,
        difficulty: 3
      },
      { 
        id: "ee", 
        name: "Basic Electrical Engineering", 
        icon: Cpu, 
        color: "text-neutral-600", 
        tags: ["Circuits", "Transformers"], 
        type: "Core",
        description: "DC circuits, AC fundamentals, and magnetic circuit principles.",
        credits: 3,
        difficulty: 2
      },
    ],
    even: [
      { 
        id: "math2", 
        name: "Mathematics - II", 
        icon: Brain, 
        color: "text-neutral-600", 
        tags: ["ODEs", "Complex Var"], 
        type: "Core",
        description: "Multivariate calculus, vector calculus and complex variables.",
        credits: 4,
        difficulty: 5
      },
      { 
        id: "chem", 
        name: "Engineering Chemistry", 
        icon: Database, 
        color: "text-neutral-600", 
        tags: ["Polymers", "Fuels"], 
        type: "Core",
        description: "Water chemistry, green chemistry, and polymer science applications.",
        credits: 4,
        difficulty: 2
      },
      { 
        id: "english", 
        name: "English for Communication", 
        icon: Book, 
        color: "text-neutral-600", 
        tags: ["Soft Skills", "Grammar"], 
        type: "Core",
        description: "Enhancing verbal and written communication skills for professional environments.",
        credits: 2,
        difficulty: 1
      },
      { 
        id: "mfg", 
        name: "Manufacturing Practices", 
        icon: Layers, 
        color: "text-neutral-600", 
        tags: ["Workshop", "Tools"], 
        type: "Lab",
        description: "Hands-on experience with machining, welding, and traditional manufacturing tools.",
        credits: 2,
        difficulty: 2
      },
    ],
  },
  "2": {
    odd: [
      { 
        id: "dsa", 
        name: "Data Structures & Algorithms", 
        icon: Code, 
        color: "text-neutral-600", 
        tags: ["DSA", "Trees", "Graphs"], 
        type: "Core",
        description: "Advanced study of linear and non-linear data structures and their algorithmic complexity.",
        credits: 4,
        difficulty: 5
      },
      { 
        id: "coa", 
        name: "Computer Organization", 
        icon: Cpu, 
        color: "text-neutral-600", 
        tags: ["COA", "Architecture", "CPU"], 
        type: "Core",
        description: "Understand the inner workings of computer hardware and CPU design architecture.",
        credits: 3,
        difficulty: 4
      },
      { 
        id: "dm", 
        name: "Discrete Mathematics", 
        icon: Brain, 
        color: "text-neutral-600", 
        tags: ["DM", "Set Theory", "Logic"], 
        type: "Core",
        description: "Mathematical structures that are fundamentally discrete rather than continuous.",
        credits: 4,
        difficulty: 4
      },
      { 
        id: "de", 
        name: "Digital Electronics", 
        icon: Cpu, 
        color: "text-neutral-600", 
        tags: ["DE", "Gates", "K-Maps"], 
        type: "Lab",
        description: "Practical application of logic gates, flip-flops, and sequential circuit design.",
        credits: 2,
        difficulty: 3
      },
    ],
    even: [
      { 
        id: "os", 
        name: "Operating Systems", 
        icon: Layers, 
        color: "text-neutral-600", 
        tags: ["OS", "Scheduling", "Memory"], 
        type: "Core",
        description: "Core concepts of process management, memory allocation, and file systems.",
        credits: 3,
        difficulty: 4
      },
      { 
        id: "dbms", 
        name: "Database Management Systems", 
        icon: Database, 
        color: "text-neutral-600", 
        tags: ["DBMS", "SQL", "Normalization"], 
        type: "Core",
        description: "Relational database design, SQL querying, and high-level transaction management.",
        credits: 3,
        difficulty: 3
      },
      { 
        id: "se", 
        name: "Software Engineering", 
        icon: Book, 
        color: "text-neutral-600", 
        tags: ["SE", "SDLC", "Testing"], 
        type: "Core",
        description: "Methodologies for systematic software development and project lifecycle management.",
        credits: 3,
        difficulty: 2
      },
      { 
        id: "python", 
        name: "Python Programming", 
        icon: Code, 
        color: "text-neutral-600", 
        tags: ["Python", "Scripting", "Data Sci"], 
        type: "Lab",
        description: "Rapid application development and scripting using the Python ecosystem.",
        credits: 2,
        difficulty: 2
      },
    ],
  },
  "3": {
    odd: [
      { 
        id: "ai", 
        name: "Artificial Intelligence", 
        icon: Brain, 
        color: "text-neutral-600", 
        tags: ["AI", "ML", "Search"], 
        type: "Elective",
        description: "Study of agents, heuristic search, and knowledge representation in machines.",
        credits: 3,
        difficulty: 4
      },
      { 
        id: "cn", 
        name: "Computer Networks", 
        icon: Network, 
        color: "text-neutral-600", 
        tags: ["CN", "TCP/IP", "Security"], 
        type: "Core",
        description: "Principles of data communication and the various layers of the OSI model.",
        credits: 3,
        difficulty: 3
      },
      { 
        id: "toc", 
        name: "Theory of Computation", 
        icon: Brain, 
        color: "text-neutral-600", 
        tags: ["TOC", "Automata", "Grammar"], 
        type: "Core",
        description: "Mathematical models of computation, including finite automata and Turing machines.",
        credits: 4,
        difficulty: 5
      },
      { 
        id: "da", 
        name: "Design & Analysis of Algorithms", 
        icon: Code, 
        color: "text-neutral-600", 
        tags: ["DAA", "Dynamic Prog", "Greedy"], 
        type: "Core",
        description: "Advanced algorithmic techniques and rigorous complexity analysis methods.",
        credits: 4,
        difficulty: 5
      },
    ],
    even: [
      { 
        id: "cd", 
        name: "Compiler Design", 
        icon: Code, 
        color: "text-neutral-600", 
        tags: ["CD", "Parsing", "Optimization"], 
        type: "Core",
        description: "Techniques for translating high-level code into machine-executable instructions.",
        credits: 4,
        difficulty: 5
      },
      { 
        id: "wt", 
        name: "Web Technologies", 
        icon: Network, 
        color: "text-neutral-600", 
        tags: ["WT", "React", "Backend"], 
        type: "Lab",
        description: "Full-stack development using modern web frameworks and backend architectures.",
        credits: 3,
        difficulty: 3
      },
      { 
        id: "is", 
        name: "Information Security", 
        icon: Shield, 
        color: "text-neutral-600", 
        tags: ["IS", "Crypto", "Network Sec"], 
        type: "Elective",
        description: "Cryptography, network protocols, and the legal aspects of data security.",
        credits: 3,
        difficulty: 4
      },
      { 
        id: "cc", 
        name: "Cloud Computing", 
        icon: Layers, 
        color: "text-neutral-600", 
        tags: ["CC", "AWS", "Azure"], 
        type: "Elective",
        description: "Distributed computing models and virtualization in enterprise environments.",
        credits: 3,
        difficulty: 3
      },
    ],
  },
  "4": {
    odd: [
      { 
        id: "bd", 
        name: "Big Data Analytics", 
        icon: Database, 
        color: "text-neutral-600", 
        tags: ["BD", "Hadoop", "Spark"], 
        type: "Elective",
        description: "Processing and analyzing massive datasets using distributed frameworks like Hadoop.",
        credits: 3,
        difficulty: 4
      },
      { 
        id: "cy", 
        name: "Cyber Security & Laws", 
        icon: Shield, 
        color: "text-neutral-600", 
        tags: ["Cyber", "Ethical Hacking", "Forensics"], 
        type: "Core",
        description: "Protecting systems from digital attacks and understanding global cyber laws.",
        credits: 3,
        difficulty: 3
      },
      { 
        id: "ds", 
        name: "Distributed Systems", 
        icon: Network, 
        color: "text-neutral-600", 
        tags: ["DS", "RPC", "Consensus"], 
        type: "Core",
        description: "Architecting software systems that run across multiple independent nodes.",
        credits: 3,
        difficulty: 4
      },
      { 
        id: "iot", 
        name: "Internet of Things", 
        icon: Cpu, 
        color: "text-neutral-600", 
        tags: ["IoT", "Sensors", "Arduino"], 
        type: "Lab",
        description: "Connecting physical objects to the digital world using sensors and protocols.",
        credits: 2,
        difficulty: 3
      },
    ],
    even: [
      { 
        id: "cap", 
        name: "Capstone Project", 
        icon: Book, 
        color: "text-neutral-600", 
        tags: ["Project", "Implementation", "Doc"], 
        type: "Core",
        description: "A culminating academic and practical experience involving extensive project work.",
        credits: 8,
        difficulty: 5
      },
      { 
        id: "st", 
        name: "Software Testing", 
        icon: Shield, 
        color: "text-neutral-600", 
        tags: ["QA", "Jasmine"], 
        type: "Elective",
        description: "Quality assurance methodologies and automated testing protocol implementation.",
        credits: 3,
        difficulty: 2
      },
      { 
        id: "es", 
        name: "Embedded Systems", 
        icon: Cpu, 
        color: "text-neutral-600", 
        tags: ["ES", "Microcontrollers", "RTOS"], 
        type: "Elective",
        description: "Development of specialized computing systems within larger mechanical frameworks.",
        credits: 3,
        difficulty: 4
      },
    ],
  },
}
