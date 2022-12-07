import {Entity, MeetingRegistrantBase} from './index';
import {MeetingAudience} from './meetingAudience';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MeetingRegistrationBase extends Entity, Partial<Parsable> {
    /** The allowedRegistrant property */
    allowedRegistrant?: MeetingAudience;
    /** Registrants of the online meeting. */
    registrants?: MeetingRegistrantBase[];
}
