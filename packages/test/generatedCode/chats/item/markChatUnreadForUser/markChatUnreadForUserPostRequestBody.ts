import {TeamworkUserIdentity} from '../../../models/';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface MarkChatUnreadForUserPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The lastMessageReadDateTime property */
    lastMessageReadDateTime?: Date;
    /** The user property */
    user?: TeamworkUserIdentity;
}
