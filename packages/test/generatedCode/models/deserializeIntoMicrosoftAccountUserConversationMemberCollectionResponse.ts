import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMicrosoftAccountUserConversationMember} from './deserializeIntoMicrosoftAccountUserConversationMember';
import {MicrosoftAccountUserConversationMemberCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftAccountUserConversationMemberCollectionResponse(microsoftAccountUserConversationMemberCollectionResponse: MicrosoftAccountUserConversationMemberCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(microsoftAccountUserConversationMemberCollectionResponse),
        "value": n => { microsoftAccountUserConversationMemberCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMicrosoftAccountUserConversationMember) as any ; },
    }
}
