import {Message, Recipient} from '../../../../../models/';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ForwardPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The Comment property */
    comment?: string;
    /** The Message property */
    message?: Message;
    /** The ToRecipients property */
    toRecipients?: Recipient[];
}
