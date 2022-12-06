import {deserializeIntoPlace} from './deserializeIntoPlace';
import {deserializeIntoRoom} from './deserializeIntoRoom';
import {RoomList} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRoomList(roomList: RoomList | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPlace(roomList),
        "emailAddress": n => { roomList.emailAddress = n.getStringValue() as any ; },
        "rooms": n => { roomList.rooms = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRoom) as any ; },
    }
}
