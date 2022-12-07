import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SharedAppleDeviceUser extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Data quota */
    dataQuota?: number;
    /** Data to sync */
    dataToSync?: boolean;
    /** Data quota */
    dataUsed?: number;
    /** User name */
    userPrincipalName?: string;
}
