import {SkypeForBusinessUserConversationMember} from './index';
import {serializeConversationMember} from './serializeConversationMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSkypeForBusinessUserConversationMember(writer: SerializationWriter, skypeForBusinessUserConversationMember: SkypeForBusinessUserConversationMember | undefined = {}) : void {
        serializeConversationMember(writer, skypeForBusinessUserConversationMember)
            writer.writeStringValue("tenantId", skypeForBusinessUserConversationMember.tenantId);
            writer.writeStringValue("userId", skypeForBusinessUserConversationMember.userId);
}
