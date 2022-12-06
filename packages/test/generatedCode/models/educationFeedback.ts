import {EducationItemBody, IdentitySet} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationFeedback extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** User who created the feedback. */
    feedbackBy?: IdentitySet;
    /** Moment in time when the feedback was given. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    feedbackDateTime?: Date;
    /** The OdataType property */
    odataType?: string;
    /** Feedback. */
    text?: EducationItemBody;
}
