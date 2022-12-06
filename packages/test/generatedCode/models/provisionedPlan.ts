import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisionedPlan extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** For example, 'Enabled'. */
    capabilityStatus?: string;
    /** The OdataType property */
    odataType?: string;
    /** For example, 'Success'. */
    provisioningStatus?: string;
    /** The name of the service; for example, 'AccessControlS2S' */
    service?: string;
}
