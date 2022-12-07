import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RenameAction extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The new name of the item. */
    newName?: string;
    /** The previous name of the item. */
    oldName?: string;
}
