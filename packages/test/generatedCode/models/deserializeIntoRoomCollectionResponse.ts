import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRoom} from './deserializeIntoRoom';
import {RoomCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRoomCollectionResponse(roomCollectionResponse: RoomCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(roomCollectionResponse),
        "value": n => { roomCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRoom) as any ; },
    }
}
