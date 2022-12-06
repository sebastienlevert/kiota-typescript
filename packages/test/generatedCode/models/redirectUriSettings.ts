import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RedirectUriSettings extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The index property */
    index?: number;
    /** The OdataType property */
    odataType?: string;
    /** The uri property */
    uri?: string;
}
