import {ChatMessageMentionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeChatMessageMention} from './serializeChatMessageMention';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageMentionCollectionResponse(writer: SerializationWriter, chatMessageMentionCollectionResponse: ChatMessageMentionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, chatMessageMentionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", chatMessageMentionCollectionResponse.value as any, serializeChatMessageMention);
}
