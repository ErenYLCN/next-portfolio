import fs from "fs"

// increment visit_count on public/metrics.json
export async function POST() {
  let path = process.cwd() + "/public/metrics.json"
  const metrics = JSON.parse(fs.readFileSync(path, "utf-8"))
  metrics.visit_count += 1
  fs.writeFileSync(path, JSON.stringify(metrics, null, 2))

  return Response.json({ message: "incremented" })
}

// get visit_count from public/metrics.json
export async function GET() {
  let path = process.cwd() + "/public/metrics.json"
  const metrics = JSON.parse(fs.readFileSync(path, "utf-8"))
  return Response.json({ visit_count: metrics.visit_count })
}
