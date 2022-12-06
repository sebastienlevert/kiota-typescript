import {ConversationMemberRoleUpdatedEventMessageDetail} from './index';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeTeamworkUserIdentity} from './serializeTeamworkUserIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConversationMemberRoleUpdatedEventMessageDetail(writer: SerializationWriter, conversationMemberRoleUpdatedEventMessageDetail: ConversationMemberRoleUpdatedEventMessageDetail | undefined = {}) : void {
        serializeEventMessageDetail(writer, conversationMemberRoleUpdatedEventMessageDetail)
            writer.writeCollectionOfPrimitiveValues<string>("conversationMemberRoles", conversationMemberRoleUpdatedEventMessageDetail.conversationMemberRoles);
            writer.writeObjectValueFromMethod("conversationMemberUser", conversationMemberRoleUpdatedEventMessageDetail.conversationMemberUser as any, serializeTeamworkUserIdentity);
            writer.writeObjectValueFromMethod("initiator", conversationMemberRoleUpdatedEventMessageDetail.initiator as any, serializeIdentitySet);
}
