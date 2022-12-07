import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Settings extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Specifies if the user's primary mailbox is hosted in the cloud and is enabled for Microsoft Graph. */
    hasGraphMailbox?: boolean;
    /** Specifies if the user has a MyAnalytics license assigned. */
    hasLicense?: boolean;
    /** Specifies if the user opted out of MyAnalytics. */
    hasOptedOut?: boolean;
}
