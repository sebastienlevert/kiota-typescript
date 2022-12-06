import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MimeContent extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataType property */
    odataType?: string;
    /** Indicates the content mime type. */
    type?: string;
    /** The byte array that contains the actual content. */
    value?: string;
}
