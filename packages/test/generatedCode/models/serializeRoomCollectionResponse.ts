import {RoomCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRoom} from './serializeRoom';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRoomCollectionResponse(writer: SerializationWriter, roomCollectionResponse: RoomCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, roomCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", roomCollectionResponse.value as any, serializeRoom);
}
