import {deserializeIntoConversationMember} from './deserializeIntoConversationMember';
import {SkypeUserConversationMember} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSkypeUserConversationMember(skypeUserConversationMember: SkypeUserConversationMember | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConversationMember(skypeUserConversationMember),
        "skypeId": n => { skypeUserConversationMember.skypeId = n.getStringValue() as any ; },
    }
}
