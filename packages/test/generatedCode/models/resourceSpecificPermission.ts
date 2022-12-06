import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ResourceSpecificPermission extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Describes the level of access that the resource-specific permission represents. */
    description?: string;
    /** The display name for the resource-specific permission. */
    displayName?: string;
    /** The unique identifier for the resource-specific application permission. */
    id?: string;
    /** Indicates whether the permission is enabled. */
    isEnabled?: boolean;
    /** The OdataType property */
    odataType?: string;
    /** The value of the permission. */
    value?: string;
}
