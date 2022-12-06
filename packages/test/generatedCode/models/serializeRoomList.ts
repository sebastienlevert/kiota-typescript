import {RoomList} from './index';
import {serializePlace} from './serializePlace';
import {serializeRoom} from './serializeRoom';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRoomList(writer: SerializationWriter, roomList: RoomList | undefined = {}) : void {
        serializePlace(writer, roomList)
            writer.writeStringValue("emailAddress", roomList.emailAddress);
            writer.writeCollectionOfObjectValuesFromMethod("rooms", roomList.rooms as any, serializeRoom);
}
