import {PinnedChatMessageInfoCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePinnedChatMessageInfo} from './serializePinnedChatMessageInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePinnedChatMessageInfoCollectionResponse(writer: SerializationWriter, pinnedChatMessageInfoCollectionResponse: PinnedChatMessageInfoCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, pinnedChatMessageInfoCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", pinnedChatMessageInfoCollectionResponse.value as any, serializePinnedChatMessageInfo);
}
