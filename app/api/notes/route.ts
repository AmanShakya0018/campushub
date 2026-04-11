/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authoptions"
import { z } from "zod"

const noteSchema = z.object({
  title: z.string(),
  fileUrl: z.string(),
  subject: z.string(),
  year: z.number(),
  semester: z.string(),
  category: z.enum(["HANDWRITTEN", "DIGITAL", "PYQ"]),
  userEmail: z.string(),
})

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await req.json()
    const data = noteSchema.parse(body)

    const user = await prisma.user.findUnique({
      where: { email: data.userEmail },
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const note = await prisma.note.create({
      data: {
        title: data.title,
        fileUrl: data.fileUrl,
        subject: data.subject.toUpperCase(),
        year: data.year,
        semester: data.semester,
        category: data.category as any,
        uploadedBy: user.id,
      },
    })

    return NextResponse.json(note)
  } catch (error) {
    console.error("Error creating note:", error)
    return NextResponse.json(
      { error: "Failed to create note" },
      { status: 500 }
    )
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const subject = searchParams.get("subject")
    const year = searchParams.get("year")
    const semester = searchParams.get("semester")

    const where: any = {}

    if (subject) where.subject = subject.toUpperCase()
    if (year) where.year = parseInt(year)
    if (semester) where.semester = semester

    const notes = await prisma.note.findMany({
      where,
      include: {
        user: {
          select: { name: true, image: true },
        },
      },
      orderBy: { createdAt: "desc" },
    })

    return NextResponse.json(notes)
  } catch (error) {
    console.error("Error fetching notes:", error)
    return NextResponse.json(
      { error: "Failed to fetch notes" },
      { status: 500 }
    )
  }
}
