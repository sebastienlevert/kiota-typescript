import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface BatchRecordDecisionsPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The decision property */
    decision?: string;
    /** The justification property */
    justification?: string;
    /** The principalId property */
    principalId?: string;
    /** The resourceId property */
    resourceId?: string;
}
