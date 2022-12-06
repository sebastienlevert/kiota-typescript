import {deserializeIntoConversationMember} from './deserializeIntoConversationMember';
import {MicrosoftAccountUserConversationMember} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftAccountUserConversationMember(microsoftAccountUserConversationMember: MicrosoftAccountUserConversationMember | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConversationMember(microsoftAccountUserConversationMember),
        "userId": n => { microsoftAccountUserConversationMember.userId = n.getStringValue() as any ; },
    }
}
