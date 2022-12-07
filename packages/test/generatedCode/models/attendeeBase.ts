import {AttendeeType} from './attendeeType';
import {Recipient} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AttendeeBase extends Partial<Parsable>, Recipient {
    /** The type property */
    type?: AttendeeType;
}
