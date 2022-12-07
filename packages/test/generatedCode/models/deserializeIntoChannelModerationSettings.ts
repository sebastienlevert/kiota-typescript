import {ChannelModerationSettings} from './index';
import {ReplyRestriction} from './replyRestriction';
import {UserNewMessageRestriction} from './userNewMessageRestriction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChannelModerationSettings(channelModerationSettings: ChannelModerationSettings | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "allowNewMessageFromBots": n => { channelModerationSettings.allowNewMessageFromBots = n.getBooleanValue() as any ; },
        "allowNewMessageFromConnectors": n => { channelModerationSettings.allowNewMessageFromConnectors = n.getBooleanValue() as any ; },
        "replyRestriction": n => { channelModerationSettings.replyRestriction = n.getEnumValue<ReplyRestriction>(ReplyRestriction) as any ; },
        "userNewMessageRestriction": n => { channelModerationSettings.userNewMessageRestriction = n.getEnumValue<UserNewMessageRestriction>(UserNewMessageRestriction) as any ; },
    }
}
