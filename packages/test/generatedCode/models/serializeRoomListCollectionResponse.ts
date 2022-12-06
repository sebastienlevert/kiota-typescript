import {RoomListCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRoomList} from './serializeRoomList';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRoomListCollectionResponse(writer: SerializationWriter, roomListCollectionResponse: RoomListCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, roomListCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", roomListCollectionResponse.value as any, serializeRoomList);
}
