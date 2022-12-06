import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ContentTypeInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The id of the content type. */
    id?: string;
    /** The name of the content type. */
    name?: string;
    /** The OdataType property */
    odataType?: string;
}
