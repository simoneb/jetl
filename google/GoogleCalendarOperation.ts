import { calendar_v3 } from '@googleapis/calendar'
import { OAuth2Client } from 'google-auth-library'
import { google } from 'googleapis'
import { AbstractOperation } from '../core/operations/AbstractOperation'

export abstract class GoogleCalendarOperation<
  TInput = never,
  TResult = never
> extends AbstractOperation<TInput, TResult> {
  public calendar: calendar_v3.Calendar

  constructor(public oAuth2Client: OAuth2Client) {
    super()
    this.calendar = google.calendar({ version: 'v3', auth: oAuth2Client })
  }
}
