import {AnonymousGuestConversationMember} from './index';
import {serializeConversationMember} from './serializeConversationMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAnonymousGuestConversationMember(writer: SerializationWriter, anonymousGuestConversationMember: AnonymousGuestConversationMember | undefined = {}) : void {
        serializeConversationMember(writer, anonymousGuestConversationMember)
            writer.writeStringValue("anonymousGuestId", anonymousGuestConversationMember.anonymousGuestId);
}
