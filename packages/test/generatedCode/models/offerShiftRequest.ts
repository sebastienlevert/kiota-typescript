import {ScheduleChangeRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OfferShiftRequest extends Partial<Parsable>, ScheduleChangeRequest {
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    recipientActionDateTime?: Date;
    /** Custom message sent by recipient of the offer shift request. */
    recipientActionMessage?: string;
    /** User ID of the recipient of the offer shift request. */
    recipientUserId?: string;
    /** User ID of the sender of the offer shift request. */
    senderShiftId?: string;
}
