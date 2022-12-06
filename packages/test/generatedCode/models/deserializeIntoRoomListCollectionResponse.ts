import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRoomList} from './deserializeIntoRoomList';
import {RoomListCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRoomListCollectionResponse(roomListCollectionResponse: RoomListCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(roomListCollectionResponse),
        "value": n => { roomListCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRoomList) as any ; },
    }
}
