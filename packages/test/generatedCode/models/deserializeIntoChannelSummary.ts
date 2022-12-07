import {ChannelSummary} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChannelSummary(channelSummary: ChannelSummary | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "guestsCount": n => { channelSummary.guestsCount = n.getNumberValue() as any ; },
        "hasMembersFromOtherTenants": n => { channelSummary.hasMembersFromOtherTenants = n.getBooleanValue() as any ; },
        "membersCount": n => { channelSummary.membersCount = n.getNumberValue() as any ; },
        "ownersCount": n => { channelSummary.ownersCount = n.getNumberValue() as any ; },
    }
}
