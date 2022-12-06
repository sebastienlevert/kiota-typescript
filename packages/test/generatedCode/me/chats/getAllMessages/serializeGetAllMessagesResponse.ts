import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeChatMessage} from '../../../models/serializeChatMessage';
import {GetAllMessagesResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetAllMessagesResponse(writer: SerializationWriter, getAllMessagesResponse: GetAllMessagesResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getAllMessagesResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getAllMessagesResponse.value as any, serializeChatMessage);
}
