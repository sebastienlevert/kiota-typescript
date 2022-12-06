import {TeamworkConversationIdentity} from './index';
import {serializeIdentity} from './serializeIdentity';
import {TeamworkConversationIdentityType} from './teamworkConversationIdentityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTeamworkConversationIdentity(writer: SerializationWriter, teamworkConversationIdentity: TeamworkConversationIdentity | undefined = {}) : void {
        serializeIdentity(writer, teamworkConversationIdentity)
            writer.writeEnumValue<TeamworkConversationIdentityType>("conversationIdentityType", teamworkConversationIdentity.conversationIdentityType);
}
