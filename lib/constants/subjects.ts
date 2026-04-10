import { Book, Cpu, Code, Database, Network, Brain, Shield, Layers } from "lucide-react"

export interface Subject {
  id: string
  name: string
  icon: any
  color: string
  tags: string[]
}

export const subjectsData: Record<string, Record<string, Subject[]>> = {
  "1": {
    odd: [
      { id: "math1", name: "Mathematics - I", icon: Brain, color: "text-blue-500", tags: ["Calculus", "Matrices"] },
      { id: "phy", name: "Engineering Physics", icon: Cpu, color: "text-amber-500", tags: ["Optics", "Quantum"] },
      { id: "pps", name: "Programming for Problem Solving", icon: Code, color: "text-green-500", tags: ["C Programming", "Logic"] },
      { id: "ee", name: "Basic Electrical Engineering", icon: Cpu, color: "text-red-500", tags: ["Circuits", "Transformers"] },
    ],
    even: [
      { id: "math2", name: "Mathematics - II", icon: Brain, color: "text-blue-500", tags: ["ODEs", "Complex Var"] },
      { id: "chem", name: "Engineering Chemistry", icon: Database, color: "text-cyan-500", tags: ["Polymers", "Fuels"] },
      { id: "english", name: "English for Communication", icon: Book, color: "text-pink-500", tags: ["Soft Skills", "Grammar"] },
      { id: "mfg", name: "Manufacturing Practices", icon: Layers, color: "text-orange-500", tags: ["Workshop", "Tools"] },
    ],
  },
  "2": {
    odd: [
      { id: "dsa", name: "Data Structures & Algorithms", icon: Code, color: "text-emerald-500", tags: ["Trees", "Graphs"] },
      { id: "coa", name: "Computer Organization", icon: Cpu, color: "text-zinc-500", tags: ["Architecture", "CPU"] },
      { id: "dm", name: "Discrete Mathematics", icon: Brain, color: "text-purple-500", tags: ["Set Theory", "Logic"] },
      { id: "de", name: "Digital Electronics", icon: Cpu, color: "text-red-500", tags: ["Gates", "K-Maps"] },
    ],
    even: [
      { id: "os", name: "Operating Systems", icon: Layers, color: "text-sky-500", tags: ["Scheduling", "Memory"] },
      { id: "dbms", name: "Database Management Systems", icon: Database, color: "text-blue-600", tags: ["SQL", "Normalization"] },
      { id: "se", name: "Software Engineering", icon: Book, color: "text-indigo-500", tags: ["SDLC", "Testing"] },
      { id: "python", name: "Python Programming", icon: Code, color: "text-yellow-600", tags: ["Scripting", "Data Sci"] },
    ],
  },
  "3": {
    odd: [
      { id: "ai", name: "Artificial Intelligence", icon: Brain, color: "text-purple-600", tags: ["ML", "Search"] },
      { id: "cn", name: "Computer Networks", icon: Network, color: "text-blue-500", tags: ["TCP/IP", "Security"] },
      { id: "toc", name: "Theory of Computation", icon: Brain, color: "text-fuschia-500", tags: ["Automata", "Grammar"] },
      { id: "da", name: "Design & Analysis of Algorithms", icon: Code, color: "text-green-600", tags: ["Dynamic Prog", "Greedy"] },
    ],
    even: [
      { id: "cd", name: "Compiler Design", icon: Code, color: "text-rose-500", tags: ["Parsing", "Optimization"] },
      { id: "wt", name: "Web Technologies", icon: Network, color: "text-blue-400", tags: ["React", "Backend"] },
      { id: "is", name: "Information Security", icon: Shield, color: "text-emerald-600", tags: ["Crypto", "Network Sec"] },
      { id: "cc", name: "Cloud Computing", icon: Layers, color: "text-sky-400", tags: ["AWS", "Azure"] },
    ],
  },
  "4": {
    odd: [
      { id: "bd", name: "Big Data Analytics", icon: Database, color: "text-orange-600", tags: ["Hadoop", "Spark"] },
      { id: "cy", name: "Cyber Security & Laws", icon: Shield, color: "text-red-600", tags: ["Ethical Hacking", "Forensics"] },
      { id: "ds", name: "Distributed Systems", icon: Network, color: "text-blue-700", tags: ["RPC", "Consensus"] },
      { id: "iot", name: "Internet of Things", icon: Cpu, color: "text-teal-500", tags: ["Sensors", "Arduino"] },
    ],
    even: [
      { id: "cap", name: "Capstone Project", icon: Book, color: "text-indigo-700", tags: ["Implementation", "Doc"] },
      { id: "st", name: "Software Testing", icon: Shield, color: "text-green-700", tags: ["QA", "Jasmine"] },
      { id: "es", name: "Embedded Systems", icon: Cpu, color: "text-amber-700", tags: ["Microcontrollers", "RTOS"] },
    ],
  },
}
