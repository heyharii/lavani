import { getServerSession } from "next-auth/next"
import * as z from "zod"
import { db } from "@/lib/db"

const subscriberSchema = z.object({
  email: z.string().email(),
})

export async function POST(req: Request) {
  try {

    const json = await req.json()
    const body = subscriberSchema.parse(json)

    const subscriber = await db.subscriber.findFirst({
      where: {
        email: body.email,
      },
      select: {
        email: true
      },
    })

    if (subscriber) {
      return new Response("Email has been subscribe", { status: 400 })
    }

    await db.subscriber.create({
      data: {
        email: body.email,
      }
    })

    return new Response(null, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}
