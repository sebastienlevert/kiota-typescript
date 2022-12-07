import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MoveAction extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The name of the location the item was moved from. */
    from?: string;
    /** The name of the location the item was moved to. */
    to?: string;
}
