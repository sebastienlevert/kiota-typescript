import {AadUserConversationMember} from './index';
import {serializeConversationMember} from './serializeConversationMember';
import {serializeUser} from './serializeUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAadUserConversationMember(writer: SerializationWriter, aadUserConversationMember: AadUserConversationMember | undefined = {}) : void {
        serializeConversationMember(writer, aadUserConversationMember)
            writer.writeStringValue("email", aadUserConversationMember.email);
            writer.writeStringValue("tenantId", aadUserConversationMember.tenantId);
            writer.writeObjectValueFromMethod("user", aadUserConversationMember.user as any, serializeUser);
            writer.writeStringValue("userId", aadUserConversationMember.userId);
}
