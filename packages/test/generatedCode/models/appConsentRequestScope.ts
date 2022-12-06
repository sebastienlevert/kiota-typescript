import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AppConsentRequestScope extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The name of the scope. */
    displayName?: string;
    /** The OdataType property */
    odataType?: string;
}
