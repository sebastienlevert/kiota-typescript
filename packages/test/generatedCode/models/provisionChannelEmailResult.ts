import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisionChannelEmailResult extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Represents the provisioned email address. */
    email?: string;
    /** The OdataType property */
    odataType?: string;
}
