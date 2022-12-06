import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CallOptions extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Indicates whether to hide the app after the call is escalated. */
    hideBotAfterEscalation?: boolean;
    /** Indicates whether content sharing notifications should be enabled for the call. */
    isContentSharingNotificationEnabled?: boolean;
    /** The OdataType property */
    odataType?: string;
}
