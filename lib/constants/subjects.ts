import { Book, Cpu, Code, Database, Network, Brain, Shield, Layers } from "lucide-react"

export interface Subject {
  id: string
  name: string
  icon: any
  color: string
  tags: string[]
  type: "Core" | "Lab" | "Elective"
}

export const subjectsData: Record<string, Record<string, Subject[]>> = {
  "1": {
    odd: [
      { id: "math1", name: "Mathematics - I", icon: Brain, color: "text-blue-500", tags: ["Calculus", "Matrices"], type: "Core" },
      { id: "phy", name: "Engineering Physics", icon: Cpu, color: "text-amber-500", tags: ["Optics", "Quantum"], type: "Core" },
      { id: "pps", name: "Programming for Problem Solving", icon: Code, color: "text-green-500", tags: ["C Programming", "Logic"], type: "Core" },
      { id: "ee", name: "Basic Electrical Engineering", icon: Cpu, color: "text-red-500", tags: ["Circuits", "Transformers"], type: "Core" },
    ],
    even: [
      { id: "math2", name: "Mathematics - II", icon: Brain, color: "text-blue-500", tags: ["ODEs", "Complex Var"], type: "Core" },
      { id: "chem", name: "Engineering Chemistry", icon: Database, color: "text-cyan-500", tags: ["Polymers", "Fuels"], type: "Core" },
      { id: "english", name: "English for Communication", icon: Book, color: "text-pink-500", tags: ["Soft Skills", "Grammar"], type: "Core" },
      { id: "mfg", name: "Manufacturing Practices", icon: Layers, color: "text-orange-500", tags: ["Workshop", "Tools"], type: "Lab" },
    ],
  },
  "2": {
    odd: [
      { id: "dsa", name: "Data Structures & Algorithms", icon: Code, color: "text-emerald-500", tags: ["DSA", "Trees", "Graphs"], type: "Core" },
      { id: "coa", name: "Computer Organization", icon: Cpu, color: "text-zinc-500", tags: ["COA", "Architecture", "CPU"], type: "Core" },
      { id: "dm", name: "Discrete Mathematics", icon: Brain, color: "text-purple-500", tags: ["DM", "Set Theory", "Logic"], type: "Core" },
      { id: "de", name: "Digital Electronics", icon: Cpu, color: "text-red-500", tags: ["DE", "Gates", "K-Maps"], type: "Lab" },
    ],
    even: [
      { id: "os", name: "Operating Systems", icon: Layers, color: "text-sky-500", tags: ["OS", "Scheduling", "Memory"], type: "Core" },
      { id: "dbms", name: "Database Management Systems", icon: Database, color: "text-blue-600", tags: ["DBMS", "SQL", "Normalization"], type: "Core" },
      { id: "se", name: "Software Engineering", icon: Book, color: "text-indigo-500", tags: ["SE", "SDLC", "Testing"], type: "Core" },
      { id: "python", name: "Python Programming", icon: Code, color: "text-yellow-600", tags: ["Python", "Scripting", "Data Sci"], type: "Lab" },
    ],
  },
  "3": {
    odd: [
      { id: "ai", name: "Artificial Intelligence", icon: Brain, color: "text-purple-600", tags: ["AI", "ML", "Search"], type: "Elective" },
      { id: "cn", name: "Computer Networks", icon: Network, color: "text-blue-500", tags: ["CN", "TCP/IP", "Security"], type: "Core" },
      { id: "toc", name: "Theory of Computation", icon: Brain, color: "text-fuschia-500", tags: ["TOC", "Automata", "Grammar"], type: "Core" },
      { id: "da", name: "Design & Analysis of Algorithms", icon: Code, color: "text-green-600", tags: ["DAA", "Dynamic Prog", "Greedy"], type: "Core" },
    ],
    even: [
      { id: "cd", name: "Compiler Design", icon: Code, color: "text-rose-500", tags: ["CD", "Parsing", "Optimization"], type: "Core" },
      { id: "wt", name: "Web Technologies", icon: Network, color: "text-blue-400", tags: ["WT", "React", "Backend"], type: "Lab" },
      { id: "is", name: "Information Security", icon: Shield, color: "text-emerald-600", tags: ["IS", "Crypto", "Network Sec"], type: "Elective" },
      { id: "cc", name: "Cloud Computing", icon: Layers, color: "text-sky-400", tags: ["CC", "AWS", "Azure"], type: "Elective" },
    ],
  },
  "4": {
    odd: [
      { id: "bd", name: "Big Data Analytics", icon: Database, color: "text-orange-600", tags: ["BD", "Hadoop", "Spark"], type: "Elective" },
      { id: "cy", name: "Cyber Security & Laws", icon: Shield, color: "text-red-600", tags: ["Cyber", "Ethical Hacking", "Forensics"], type: "Core" },
      { id: "ds", name: "Distributed Systems", icon: Network, color: "text-blue-700", tags: ["DS", "RPC", "Consensus"], type: "Core" },
      { id: "iot", name: "Internet of Things", icon: Cpu, color: "text-teal-500", tags: ["IoT", "Sensors", "Arduino"], type: "Lab" },
    ],
    even: [
      { id: "cap", name: "Capstone Project", icon: Book, color: "text-indigo-700", tags: ["Project", "Implementation", "Doc"], type: "Core" },
      { id: "st", name: "Software Testing", icon: Shield, color: "text-green-700", tags: ["QA", "Jasmine"], type: "Elective" },
      { id: "es", name: "Embedded Systems", icon: Cpu, color: "text-amber-700", tags: ["ES", "Microcontrollers", "RTOS"], type: "Elective" },

    ],
  },
}
