import fs from 'fs/promises'
import readline from 'readline'
import { google } from 'googleapis'
import { OAuth2Client } from 'google-auth-library'

export interface OAuth2Credentials {
  installed: {
    client_secret: string
    client_id: string
    redirect_uris: string[]
  }
}

export async function authorize(
  scopes: string[],
  tokenFileName: string
): Promise<OAuth2Client> {
  const credentials: OAuth2Credentials = JSON.parse(
    await fs.readFile('credentials.json', 'utf-8')
  )

  const { client_secret, client_id, redirect_uris } = credentials.installed
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  )

  try {
    const token = await fs.readFile(tokenFileName, 'utf-8')
    oAuth2Client.setCredentials(JSON.parse(token))
  } catch (err) {
    await getTokens(oAuth2Client, scopes, tokenFileName)
  }
  return oAuth2Client
}

async function getTokens(
  oAuth2Client: OAuth2Client,
  scopes: string[],
  tokenPath: string
) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
  })

  console.log('Authorize this app by visiting this url:', authUrl)

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  const code = await new Promise<string>(resolve =>
    rl.question('Enter the code from that page here: ', resolve)
  )

  rl.close()

  const { tokens } = await oAuth2Client.getToken(code)

  oAuth2Client.setCredentials(tokens)

  await fs.writeFile(tokenPath, JSON.stringify(tokens))
}
