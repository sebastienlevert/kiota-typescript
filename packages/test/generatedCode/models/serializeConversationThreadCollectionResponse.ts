import {ConversationThreadCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeConversationThread} from './serializeConversationThread';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConversationThreadCollectionResponse(writer: SerializationWriter, conversationThreadCollectionResponse: ConversationThreadCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, conversationThreadCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", conversationThreadCollectionResponse.value as any, serializeConversationThread);
}
