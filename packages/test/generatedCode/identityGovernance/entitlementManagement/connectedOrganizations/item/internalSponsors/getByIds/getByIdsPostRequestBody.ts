import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface GetByIdsPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The ids property */
    ids?: string[];
    /** The types property */
    types?: string[];
}
