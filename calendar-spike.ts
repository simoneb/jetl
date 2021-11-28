import dotenv from 'dotenv'

dotenv.config()

import { authorize } from './lib/googleAuth'
import { ListEventsGoogleCalendarOperation } from './google/ListEventsGoogleCalendarOperation'
import { NestedLoopsJoinOperation } from './core/operations/NestedLoopsJoinOperation'
import { calendar_v3 } from '@googleapis/calendar'
import { EtlProcess } from './core/EtlProcess'
import { OAuth2Client } from 'google-auth-library'

const scopes = ['https://www.googleapis.com/auth/calendar.readonly']
const tokenPath = 'calendar-token.json'

class JoinCalendarEventsOperation extends NestedLoopsJoinOperation<
  never,
  calendar_v3.Schema$Event,
  calendar_v3.Schema$Event,
  calendar_v3.Schema$Event & { hello: string }
> {
  protected matchJoinCondition(
    leftRow: calendar_v3.Schema$Event,
    rightRow: calendar_v3.Schema$Event
  ): boolean {
    return leftRow.summary === rightRow.summary
  }
  protected mergeRows(
    leftRow: calendar_v3.Schema$Event,
    rightRow: calendar_v3.Schema$Event
  ) {
    return {
      ...leftRow,
      ...rightRow,
      hello: 'world',
    }
  }
}

class JoinCalendarEventsProcess extends EtlProcess<
  calendar_v3.Schema$Event & { hello: string }
> {
  constructor(oAuth2Client: OAuth2Client) {
    super()

    const listOperation = new ListEventsGoogleCalendarOperation(oAuth2Client)
    this.register(new JoinCalendarEventsOperation(listOperation, listOperation))
  }
}

async function run() {
  const oAuth2Client = await authorize(scopes, tokenPath)

  const process = new JoinCalendarEventsProcess(oAuth2Client)

  for await (const event of process.execute()) {
    const start = event.start?.dateTime || event.start?.date
    console.log(`${start} - ${event.summary} - ${event.hello}`)
  }
}

run()
