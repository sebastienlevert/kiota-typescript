import {deserializeIntoConversationMember} from './deserializeIntoConversationMember';
import {SkypeForBusinessUserConversationMember} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSkypeForBusinessUserConversationMember(skypeForBusinessUserConversationMember: SkypeForBusinessUserConversationMember | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConversationMember(skypeForBusinessUserConversationMember),
        "tenantId": n => { skypeForBusinessUserConversationMember.tenantId = n.getStringValue() as any ; },
        "userId": n => { skypeForBusinessUserConversationMember.userId = n.getStringValue() as any ; },
    }
}
