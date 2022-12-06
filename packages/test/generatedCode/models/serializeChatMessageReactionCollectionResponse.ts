import {ChatMessageReactionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeChatMessageReaction} from './serializeChatMessageReaction';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageReactionCollectionResponse(writer: SerializationWriter, chatMessageReactionCollectionResponse: ChatMessageReactionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, chatMessageReactionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", chatMessageReactionCollectionResponse.value as any, serializeChatMessageReaction);
}
