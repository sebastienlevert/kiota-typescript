import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {TeamworkConversationIdentity} from './index';
import {TeamworkConversationIdentityType} from './teamworkConversationIdentityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamworkConversationIdentity(teamworkConversationIdentity: TeamworkConversationIdentity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentity(teamworkConversationIdentity),
        "conversationIdentityType": n => { teamworkConversationIdentity.conversationIdentityType = n.getEnumValue<TeamworkConversationIdentityType>(TeamworkConversationIdentityType) as any ; },
    }
}
