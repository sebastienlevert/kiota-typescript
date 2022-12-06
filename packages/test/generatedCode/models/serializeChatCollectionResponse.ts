import {ChatCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeChat} from './serializeChat';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChatCollectionResponse(writer: SerializationWriter, chatCollectionResponse: ChatCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, chatCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", chatCollectionResponse.value as any, serializeChat);
}
