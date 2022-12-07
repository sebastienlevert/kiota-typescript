import {ChannelIdentity} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChannelIdentity(channelIdentity: ChannelIdentity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "channelId": n => { channelIdentity.channelId = n.getStringValue() as any ; },
        "teamId": n => { channelIdentity.teamId = n.getStringValue() as any ; },
    }
}
