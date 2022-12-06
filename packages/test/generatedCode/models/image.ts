import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Image extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Optional. Height of the image, in pixels. Read-only. */
    height?: number;
    /** The OdataType property */
    odataType?: string;
    /** Optional. Width of the image, in pixels. Read-only. */
    width?: number;
}
