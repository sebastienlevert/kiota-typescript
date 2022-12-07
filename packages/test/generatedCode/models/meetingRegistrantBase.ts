import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MeetingRegistrantBase extends Entity, Partial<Parsable> {
    /** A unique web URL for the registrant to join the meeting. Read-only. */
    joinWebUrl?: string;
}
