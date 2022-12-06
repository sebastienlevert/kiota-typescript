import {MeetingInfo} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TokenMeetingInfo extends MeetingInfo, Partial<Parsable> {
    /** The token used to join the call. */
    token?: string;
}
