import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChatInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The unique identifier of a message in a Microsoft Teams channel. */
    messageId?: string;
    /** The OdataType property */
    odataType?: string;
    /** The ID of the reply message. */
    replyChainMessageId?: string;
    /** The unique identifier for a thread in Microsoft Teams. */
    threadId?: string;
}
