import {CallRecord} from './callRecords/';
import {Call, Entity, OnlineMeeting, Presence} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CloudCommunications extends Entity, Partial<Parsable> {
    /** The callRecords property */
    callRecords?: CallRecord[];
    /** The calls property */
    calls?: Call[];
    /** The onlineMeetings property */
    onlineMeetings?: OnlineMeeting[];
    /** The presences property */
    presences?: Presence[];
}
