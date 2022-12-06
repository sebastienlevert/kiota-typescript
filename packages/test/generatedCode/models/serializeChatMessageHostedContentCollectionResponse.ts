import {ChatMessageHostedContentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeChatMessageHostedContent} from './serializeChatMessageHostedContent';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatMessageHostedContentCollectionResponse(writer: SerializationWriter, chatMessageHostedContentCollectionResponse: ChatMessageHostedContentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, chatMessageHostedContentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", chatMessageHostedContentCollectionResponse.value as any, serializeChatMessageHostedContent);
}
