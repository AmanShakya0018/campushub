import axios from "axios"

const API_URL = "/api/notes"

export interface NoteData {
  id: string
  title: string
  fileUrl: string
  subject: string
  year: number
  semester: string
  category: string
  createdAt: string
  user: {
    name: string | null
    image: string | null
  }
}

export interface CreateNoteInput {
  title: string
  fileUrl: string
  subject: string
  year: number
  semester: string
  category: "HANDWRITTEN" | "DIGITAL" | "PYQ"
  userEmail: string
}

export async function fetchNotes(
  subject?: string,
  year?: string,
  semester?: string
) {
  const params = new URLSearchParams()
  if (subject) params.append("subject", subject.toUpperCase())
  if (year) params.append("year", year)
  if (semester) params.append("semester", semester)

  const response = await axios.get<NoteData[]>(
    `${API_URL}?${params.toString()}`
  )
  return response.data
}

export async function createNote(data: CreateNoteInput) {
  const response = await axios.post<NoteData>(API_URL, data)
  return response.data
}
