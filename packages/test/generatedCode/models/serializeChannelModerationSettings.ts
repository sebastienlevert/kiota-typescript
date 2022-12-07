import {ChannelModerationSettings} from './index';
import {ReplyRestriction} from './replyRestriction';
import {UserNewMessageRestriction} from './userNewMessageRestriction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelModerationSettings(writer: SerializationWriter, channelModerationSettings: ChannelModerationSettings | undefined = {}) : void {
            writer.writeBooleanValue("allowNewMessageFromBots", channelModerationSettings.allowNewMessageFromBots);
            writer.writeBooleanValue("allowNewMessageFromConnectors", channelModerationSettings.allowNewMessageFromConnectors);
            writer.writeEnumValue<ReplyRestriction>("replyRestriction", channelModerationSettings.replyRestriction);
            writer.writeEnumValue<UserNewMessageRestriction>("userNewMessageRestriction", channelModerationSettings.userNewMessageRestriction);
}
