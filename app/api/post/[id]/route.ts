import { NextResponse } from "next/server";
import { prisma } from "../../client";

type Params = {
  params: { id: string };
};
export async function PATCH(request: Request, { params }: Params) {
  try {
    const { id } = params;
    const { title, content } = await request.json();

    const post = await prisma.post.update({
      where: { id },
      data: { title, content },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("Request Error:", error);
    NextResponse.json({ error: "Error Updating Post" }, { status: 500 });
  }
}
