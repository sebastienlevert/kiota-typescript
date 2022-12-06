import {IdentitySet, MeetingInfo} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OrganizerMeetingInfo extends MeetingInfo, Partial<Parsable> {
    /** The organizer property */
    organizer?: IdentitySet;
}
