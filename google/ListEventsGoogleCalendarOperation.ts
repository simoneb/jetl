import { calendar_v3 } from '@googleapis/calendar'
import { OAuth2Client } from 'google-auth-library'
import { GoogleCalendarOperation } from './GoogleCalendarOperation'

export class ListEventsGoogleCalendarOperation extends GoogleCalendarOperation<
  never,
  calendar_v3.Schema$Events
> {
  constructor(public oAuth2Client: OAuth2Client) {
    super(oAuth2Client)
  }

  async *execute(): AsyncIterableIterator<calendar_v3.Schema$Events> {
    const res = await this.calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    })

    yield* res.data.items || []
  }
}
