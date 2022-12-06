import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoChatMessage} from '../../models/deserializeIntoChatMessage';
import {GetAllMessagesResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetAllMessagesResponse(getAllMessagesResponse: GetAllMessagesResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getAllMessagesResponse),
        "value": n => { getAllMessagesResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChatMessage) as any ; },
    }
}
