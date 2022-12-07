import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeleteAction extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The name of the item that was deleted. */
    name?: string;
    /** File or Folder, depending on the type of the deleted item. */
    objectType?: string;
}
