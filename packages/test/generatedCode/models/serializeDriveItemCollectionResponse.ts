import {DriveItemCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDriveItem} from './serializeDriveItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDriveItemCollectionResponse(writer: SerializationWriter, driveItemCollectionResponse: DriveItemCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, driveItemCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", driveItemCollectionResponse.value as any, serializeDriveItem);
}
