import {ConversationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeConversation} from './serializeConversation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConversationCollectionResponse(writer: SerializationWriter, conversationCollectionResponse: ConversationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, conversationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", conversationCollectionResponse.value as any, serializeConversation);
}
