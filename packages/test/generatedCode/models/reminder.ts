import {DateTimeTimeZone, Location} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Reminder extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Identifies the version of the reminder. Every time the reminder is changed, changeKey changes as well. This allows Exchange to apply changes to the correct version of the object. */
    changeKey?: string;
    /** The date, time and time zone that the event ends. */
    eventEndTime?: DateTimeTimeZone;
    /** The unique ID of the event. Read only. */
    eventId?: string;
    /** The location of the event. */
    eventLocation?: Location;
    /** The date, time, and time zone that the event starts. */
    eventStartTime?: DateTimeTimeZone;
    /** The text of the event's subject line. */
    eventSubject?: string;
    /** The URL to open the event in Outlook on the web.The event will open in the browser if you are logged in to your mailbox via Outlook on the web. You will be prompted to login if you are not already logged in with the browser.This URL cannot be accessed from within an iFrame. */
    eventWebLink?: string;
    /** The OdataType property */
    odataType?: string;
    /** The date, time, and time zone that the reminder is set to occur. */
    reminderFireTime?: DateTimeTimeZone;
}
