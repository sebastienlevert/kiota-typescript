import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface OnPremisesProvisioningError extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Category of the provisioning error. Note: Currently, there is only one possible value. Possible value: PropertyConflict - indicates a property value is not unique. Other objects contain the same value for the property. */
    category?: string;
    /** The date and time at which the error occurred. */
    occurredDateTime?: Date;
    /** Name of the directory property causing the error. Current possible values: UserPrincipalName or ProxyAddress */
    propertyCausingError?: string;
    /** Value of the property causing the error. */
    value?: string;
}
