import {Entity, IdentitySet, ThreatAssessmentResult} from './index';
import {ThreatAssessmentContentType} from './threatAssessmentContentType';
import {ThreatAssessmentRequestSource} from './threatAssessmentRequestSource';
import {ThreatAssessmentStatus} from './threatAssessmentStatus';
import {ThreatCategory} from './threatCategory';
import {ThreatExpectedAssessment} from './threatExpectedAssessment';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ThreatAssessmentRequest extends Entity, Partial<Parsable> {
    /** The category property */
    category?: ThreatCategory;
    /** The content type of threat assessment. Possible values are: mail, url, file. */
    contentType?: ThreatAssessmentContentType;
    /** The threat assessment request creator. */
    createdBy?: IdentitySet;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    createdDateTime?: Date;
    /** The expectedAssessment property */
    expectedAssessment?: ThreatExpectedAssessment;
    /** The source of the threat assessment request. Possible values are: administrator. */
    requestSource?: ThreatAssessmentRequestSource;
    /** A collection of threat assessment results. Read-only. By default, a GET /threatAssessmentRequests/{id} does not return this property unless you apply $expand on it. */
    results?: ThreatAssessmentResult[];
    /** The assessment process status. Possible values are: pending, completed. */
    status?: ThreatAssessmentStatus;
}
