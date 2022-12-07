import {ReplyRestriction} from './replyRestriction';
import {UserNewMessageRestriction} from './userNewMessageRestriction';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChannelModerationSettings extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Indicates whether bots are allowed to post messages. */
    allowNewMessageFromBots?: boolean;
    /** Indicates whether connectors are allowed to post messages. */
    allowNewMessageFromConnectors?: boolean;
    /** The replyRestriction property */
    replyRestriction?: ReplyRestriction;
    /** The userNewMessageRestriction property */
    userNewMessageRestriction?: UserNewMessageRestriction;
}
