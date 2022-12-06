import {Entity} from '../';
import {Endpoint, FailureInfo, Media} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Segment extends Entity, Partial<Parsable> {
    /** Endpoint that answered this segment. */
    callee?: Endpoint;
    /** Endpoint that initiated this segment. */
    caller?: Endpoint;
    /** UTC time when the segment ended. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    endDateTime?: Date;
    /** Failure information associated with the segment if it failed. */
    failureInfo?: FailureInfo;
    /** Media associated with this segment. */
    media?: Media[];
    /** UTC time when the segment started. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    startDateTime?: Date;
}
