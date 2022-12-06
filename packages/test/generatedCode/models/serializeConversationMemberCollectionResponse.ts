import {ConversationMemberCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeConversationMember} from './serializeConversationMember';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConversationMemberCollectionResponse(writer: SerializationWriter, conversationMemberCollectionResponse: ConversationMemberCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, conversationMemberCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", conversationMemberCollectionResponse.value as any, serializeConversationMember);
}
