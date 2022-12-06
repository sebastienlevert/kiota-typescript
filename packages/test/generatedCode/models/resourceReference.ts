import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ResourceReference extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The item's unique identifier. */
    id?: string;
    /** The OdataType property */
    odataType?: string;
    /** A string value that can be used to classify the item, such as 'microsoft.graph.driveItem' */
    type?: string;
    /** A URL leading to the referenced item. */
    webUrl?: string;
}
