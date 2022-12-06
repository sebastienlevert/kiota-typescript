import {deserializeIntoConversationMember} from './deserializeIntoConversationMember';
import {deserializeIntoTeamInfo} from './deserializeIntoTeamInfo';
import {SharedWithChannelTeamInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharedWithChannelTeamInfo(sharedWithChannelTeamInfo: SharedWithChannelTeamInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeamInfo(sharedWithChannelTeamInfo),
        "allowedMembers": n => { sharedWithChannelTeamInfo.allowedMembers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoConversationMember) as any ; },
        "isHostTeam": n => { sharedWithChannelTeamInfo.isHostTeam = n.getBooleanValue() as any ; },
    }
}
