import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DocumentSetVersionItem extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The unique identifier for the item. */
    itemId?: string;
    /** The title of the item. */
    title?: string;
    /** The version ID of the item. */
    versionId?: string;
}
