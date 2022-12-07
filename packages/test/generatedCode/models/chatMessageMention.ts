import {ChatMessageMentionedIdentitySet} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChatMessageMention extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Index of an entity being mentioned in the specified chatMessage. Matches the {index} value in the corresponding <at id='{index}'> tag in the message body. */
    id?: number;
    /** The mentioned property */
    mentioned?: ChatMessageMentionedIdentitySet;
    /** String used to represent the mention. For example, a user's display name, a team name. */
    mentionText?: string;
}
