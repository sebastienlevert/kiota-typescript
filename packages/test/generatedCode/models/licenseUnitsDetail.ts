import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface LicenseUnitsDetail extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The number of units that are enabled for the active subscription of the service SKU. */
    enabled?: number;
    /** The OdataType property */
    odataType?: string;
    /** The number of units that are suspended because the subscription of the service SKU has been cancelled. The units cannot be assigned but can still be reactivated before they are deleted. */
    suspended?: number;
    /** The number of units that are in warning status. When the subscription of the service SKU has expired, the customer has a grace period to renew their subscription before it is cancelled (moved to a suspended state). */
    warning?: number;
}
