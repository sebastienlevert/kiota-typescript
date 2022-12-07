import {Entity, OutOfOfficeSettings} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Presence extends Entity, Partial<Parsable> {
    /** The supplemental information to a user's availability. Possible values are Available, Away, BeRightBack, Busy, DoNotDisturb, InACall, InAConferenceCall, Inactive,InAMeeting, Offline, OffWork,OutOfOffice, PresenceUnknown,Presenting, UrgentInterruptionsOnly. */
    activity?: string;
    /** The base presence information for a user. Possible values are Available, AvailableIdle,  Away, BeRightBack, Busy, BusyIdle, DoNotDisturb, Offline, PresenceUnknown */
    availability?: string;
    /** The outOfOfficeSettings property */
    outOfOfficeSettings?: OutOfOfficeSettings;
}
