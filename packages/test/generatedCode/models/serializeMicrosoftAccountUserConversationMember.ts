import {MicrosoftAccountUserConversationMember} from './index';
import {serializeConversationMember} from './serializeConversationMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMicrosoftAccountUserConversationMember(writer: SerializationWriter, microsoftAccountUserConversationMember: MicrosoftAccountUserConversationMember | undefined = {}) : void {
        serializeConversationMember(writer, microsoftAccountUserConversationMember)
            writer.writeStringValue("userId", microsoftAccountUserConversationMember.userId);
}
