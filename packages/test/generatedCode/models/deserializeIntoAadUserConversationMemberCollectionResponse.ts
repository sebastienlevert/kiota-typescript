import {deserializeIntoAadUserConversationMember} from './deserializeIntoAadUserConversationMember';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AadUserConversationMemberCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAadUserConversationMemberCollectionResponse(aadUserConversationMemberCollectionResponse: AadUserConversationMemberCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(aadUserConversationMemberCollectionResponse),
        "value": n => { aadUserConversationMemberCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAadUserConversationMember) as any ; },
    }
}
