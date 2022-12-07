import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WritebackConfiguration extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Indicates whether writeback of cloud groups to on-premise Active Directory is enabled. Default value is true for Microsoft 365 groups and false for security groups. */
    isEnabled?: boolean;
}
