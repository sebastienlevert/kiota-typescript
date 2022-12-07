import {Entity} from './index';
import {ThreatAssessmentResultType} from './threatAssessmentResultType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ThreatAssessmentResult extends Entity, Partial<Parsable> {
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    createdDateTime?: Date;
    /** The result message for each threat assessment. */
    message?: string;
    /** The resultType property */
    resultType?: ThreatAssessmentResultType;
}
