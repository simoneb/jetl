import readline from 'readline'
import fs from 'fs'

async function run() {
  const rl = readline.createInterface({
    input: fs.createReadStream(__filename),
    crlfDelay: Infinity,
  })

  for await (const line of rl) {
    console.log('line', line)
  }
}

run()
