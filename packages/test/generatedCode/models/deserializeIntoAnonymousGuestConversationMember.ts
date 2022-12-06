import {deserializeIntoConversationMember} from './deserializeIntoConversationMember';
import {AnonymousGuestConversationMember} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAnonymousGuestConversationMember(anonymousGuestConversationMember: AnonymousGuestConversationMember | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConversationMember(anonymousGuestConversationMember),
        "anonymousGuestId": n => { anonymousGuestConversationMember.anonymousGuestId = n.getStringValue() as any ; },
    }
}
