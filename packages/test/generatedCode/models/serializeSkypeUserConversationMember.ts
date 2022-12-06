import {SkypeUserConversationMember} from './index';
import {serializeConversationMember} from './serializeConversationMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSkypeUserConversationMember(writer: SerializationWriter, skypeUserConversationMember: SkypeUserConversationMember | undefined = {}) : void {
        serializeConversationMember(writer, skypeUserConversationMember)
            writer.writeStringValue("skypeId", skypeUserConversationMember.skypeId);
}
