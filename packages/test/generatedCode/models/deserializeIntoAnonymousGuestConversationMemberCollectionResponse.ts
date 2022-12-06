import {deserializeIntoAnonymousGuestConversationMember} from './deserializeIntoAnonymousGuestConversationMember';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AnonymousGuestConversationMemberCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAnonymousGuestConversationMemberCollectionResponse(anonymousGuestConversationMemberCollectionResponse: AnonymousGuestConversationMemberCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(anonymousGuestConversationMemberCollectionResponse),
        "value": n => { anonymousGuestConversationMemberCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAnonymousGuestConversationMember) as any ; },
    }
}
