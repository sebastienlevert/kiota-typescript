import {LocationConstraintItem} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface LocationConstraint extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The client requests the service to include in the response a meeting location for the meeting. If this is true and all the resources are busy, findMeetingTimes will not return any meeting time suggestions. If this is false and all the resources are busy, findMeetingTimes would still look for meeting times without locations. */
    isRequired?: boolean;
    /** Constraint information for one or more locations that the client requests for the meeting. */
    locations?: LocationConstraintItem[];
    /** The OdataType property */
    odataType?: string;
    /** The client requests the service to suggest one or more meeting locations. */
    suggestLocation?: boolean;
}
