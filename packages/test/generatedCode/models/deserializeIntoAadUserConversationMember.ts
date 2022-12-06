import {deserializeIntoConversationMember} from './deserializeIntoConversationMember';
import {deserializeIntoUser} from './deserializeIntoUser';
import {AadUserConversationMember} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAadUserConversationMember(aadUserConversationMember: AadUserConversationMember | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConversationMember(aadUserConversationMember),
        "email": n => { aadUserConversationMember.email = n.getStringValue() as any ; },
        "tenantId": n => { aadUserConversationMember.tenantId = n.getStringValue() as any ; },
        "user": n => { aadUserConversationMember.user = n.getObject(deserializeIntoUser) as any ; },
        "userId": n => { aadUserConversationMember.userId = n.getStringValue() as any ; },
    }
}
