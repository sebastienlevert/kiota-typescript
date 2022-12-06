import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSkypeUserConversationMember} from './deserializeIntoSkypeUserConversationMember';
import {SkypeUserConversationMemberCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSkypeUserConversationMemberCollectionResponse(skypeUserConversationMemberCollectionResponse: SkypeUserConversationMemberCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(skypeUserConversationMemberCollectionResponse),
        "value": n => { skypeUserConversationMemberCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSkypeUserConversationMember) as any ; },
    }
}
