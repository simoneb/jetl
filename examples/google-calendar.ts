import dotenv from 'dotenv'

dotenv.config()

import { calendar_v3, google, sheets_v4 } from 'googleapis'
import { authorize } from '../src/lib/google-auth'
import { pipeline } from '../src/pipeline'
import { consume, toArray } from '../src/operators'

const scopes = [
  'https://www.googleapis.com/auth/calendar.readonly',
  'https://www.googleapis.com/auth/spreadsheets',
]
const tokenPath = 'google-token.json'

async function run() {
  const oAuth2Client = await authorize(scopes, tokenPath)
  const calendar = google.calendar({
    version: 'v3',
    auth: oAuth2Client,
  })

  const sheets = google.sheets({ version: 'v4', auth: oAuth2Client })

  const result = new pipeline()
    .add(listEvents(calendar))
    .add(
      writeToSpreadsheet(sheets, '1kq-OtDNjRLm_eVktp_C6EyeGLXFB7kvb1Aj-aVSWvPs')
    )
    .run()

  await consume(result)
}

run()

function writeToSpreadsheet(sheets: sheets_v4.Sheets, spreadsheetId: string) {
  return async function* (rows: AsyncIterable<calendar_v3.Schema$Event>) {
    const array = await toArray(rows)

    await sheets.spreadsheets.values.update({
      spreadsheetId,
      valueInputOption: 'USER_ENTERED',
      range: 'A1',
      requestBody: {
        values: array.map(event => [event.summary]),
      },
    })

    yield* array
  }
}

async function* listEvents(calendar: calendar_v3.Calendar) {
  const events = await calendar.events.list({
    calendarId: 'primary',
    timeMin: new Date().toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  })

  yield* events.data.items || []
}
