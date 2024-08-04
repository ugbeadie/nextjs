import { users } from "@/app/util/db";
import { NextResponse } from "next/server";

export async function GET(_, res) {
  const { id } = await res.params;
  const user = users.filter((u) => u.id === id);
  return NextResponse.json({ user });
}

export async function POST(req, res) {
  let { name, age } = await req.json();
  const { id } = await res.params;

  const { name: uName, age: uAge } = users.find((u) => u.id === id);

  if (uName === name && uAge === age) {
    return NextResponse.json({ result: "success" });
  } else if (!name || !age) {
    return NextResponse.json({ result: "fill all input" });
  } else {
    return NextResponse.json({ result: "invalid credentials" });
  }
}
