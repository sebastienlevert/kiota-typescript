import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MetadataEntry extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Name of the metadata property. */
    key?: string;
    /** Value of the metadata property. */
    value?: string;
}
