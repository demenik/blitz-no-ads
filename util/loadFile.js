import * as fs from "fs"

export default function loadFile(path) {
  const data = fs.readFileSync(path, "utf8")
  return data
}