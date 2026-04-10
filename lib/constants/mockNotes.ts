import { Note } from "@/components/dashboard/NoteCard"

export const mockNotes: Record<string, Note[]> = {
  "math1": [
    {
      id: "n1",
      title: "Calculus & Matrices Complete Notes",
      fileUrl: "#",
      uploader: { name: "Aman Shakya", image: undefined },
      createdAt: "2 days ago",
      downloads: 45,
      type: "handwritten"
    },
    {
      id: "n2",
      title: "Previous Year Question Papers (Unit 1-4)",
      fileUrl: "#",
      uploader: { name: "Gaurangi", image: undefined },
      createdAt: "1 week ago",
      downloads: 128,
      type: "pyq"
    }
  ],
  "dsa": [
    {
      id: "n101",
      title: "Data Structures & Algorithms - Stacks & Queues",
      fileUrl: "#",
      uploader: { name: "Sukanshi", image: undefined },
      createdAt: "5 hours ago",
      downloads: 12,
      type: "handwritten"
    },
    {
      id: "n102",
      title: "Sorting Algorithms - Complexity Analysis",
      fileUrl: "#",
      uploader: { name: "DJXROSSS", image: undefined },
      createdAt: "1 day ago",
      downloads: 89,
      type: "digital"
    },
    {
      id: "n103",
      title: "Trees and Graphs Implementation in C++",
      fileUrl: "#",
      uploader: { name: "Aman Shakya", image: undefined },
      createdAt: "3 days ago",
      downloads: 231,
      type: "handwritten"
    }
  ],
  "dbms": [
    {
      id: "n201",
      title: "SQL Normalization and ER Diagrams",
      fileUrl: "#",
      uploader: { name: "Akshita", image: undefined },
      createdAt: "4 days ago",
      downloads: 56,
      type: "digital"
    }
  ],
  "ai": [
    {
      id: "n301",
      title: "Introduction to Neural Networks",
      fileUrl: "#",
      uploader: { name: "Jatin Kumar", image: undefined },
      createdAt: "1 hour ago",
      downloads: 5,
      type: "digital"
    }
  ]
}
