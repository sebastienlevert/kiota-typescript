import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSkypeForBusinessUserConversationMember} from './deserializeIntoSkypeForBusinessUserConversationMember';
import {SkypeForBusinessUserConversationMemberCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSkypeForBusinessUserConversationMemberCollectionResponse(skypeForBusinessUserConversationMemberCollectionResponse: SkypeForBusinessUserConversationMemberCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(skypeForBusinessUserConversationMemberCollectionResponse),
        "value": n => { skypeForBusinessUserConversationMemberCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSkypeForBusinessUserConversationMember) as any ; },
    }
}
