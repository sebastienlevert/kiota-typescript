import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface BookingQuestionAssignment extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The ID of the custom question. */
    isRequired?: boolean;
    /** The OdataType property */
    odataType?: string;
    /** Indicates whether it is mandatory to answer the custom question. */
    questionId?: string;
}
