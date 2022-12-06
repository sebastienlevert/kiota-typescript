import {ChatMessageCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeChatMessage} from './serializeChatMessage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageCollectionResponse(writer: SerializationWriter, chatMessageCollectionResponse: ChatMessageCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, chatMessageCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", chatMessageCollectionResponse.value as any, serializeChatMessage);
}
