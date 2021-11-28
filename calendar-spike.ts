import dotenv from 'dotenv'

dotenv.config()

import { authorize } from './lib/googleAuth'
import { ListEventsGoogleCalendarOperation } from './google/ListEventsGoogleCalendarOperation'
import { NestedLoopsJoinOperation } from './core/operations/NestedLoopsJoinOperation'
import { calendar_v3 } from '@googleapis/calendar'

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

async function run() {
  const oAuth2Client = await authorize(scopes, tokenPath)

  const operation = new ListEventsGoogleCalendarOperation(oAuth2Client)

  const join = new JoinCalendarEventsOperation(operation, operation)

  for await (const event of join.execute()) {
    const start = event.start?.dateTime || event.start?.date
    console.log(`${start} - ${event.summary} - ${event.hello}`)
  }
}

run()
