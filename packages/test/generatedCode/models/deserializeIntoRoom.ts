import {BookingType} from './bookingType';
import {deserializeIntoPlace} from './deserializeIntoPlace';
import {Room} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRoom(room: Room | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPlace(room),
        "audioDeviceName": n => { room.audioDeviceName = n.getStringValue() as any ; },
        "bookingType": n => { room.bookingType = n.getEnumValue<BookingType>(BookingType) as any ; },
        "building": n => { room.building = n.getStringValue() as any ; },
        "capacity": n => { room.capacity = n.getNumberValue() as any ; },
        "displayDeviceName": n => { room.displayDeviceName = n.getStringValue() as any ; },
        "emailAddress": n => { room.emailAddress = n.getStringValue() as any ; },
        "floorLabel": n => { room.floorLabel = n.getStringValue() as any ; },
        "floorNumber": n => { room.floorNumber = n.getNumberValue() as any ; },
        "isWheelChairAccessible": n => { room.isWheelChairAccessible = n.getBooleanValue() as any ; },
        "label": n => { room.label = n.getStringValue() as any ; },
        "nickname": n => { room.nickname = n.getStringValue() as any ; },
        "tags": n => { room.tags = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "videoDeviceName": n => { room.videoDeviceName = n.getStringValue() as any ; },
    }
}
