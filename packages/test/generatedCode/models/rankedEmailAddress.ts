import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RankedEmailAddress extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The email address. */
    address?: string;
    /** The rank of the email address. A rank is used as a sort key, in relation to the other returned results. A higher rank value corresponds to a more relevant result. Relevance is determined by communication, collaboration, and business relationship signals. */
    rank?: number;
}
