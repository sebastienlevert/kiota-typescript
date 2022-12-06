import {DriveCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDrive} from './serializeDrive';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDriveCollectionResponse(writer: SerializationWriter, driveCollectionResponse: DriveCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, driveCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", driveCollectionResponse.value as any, serializeDrive);
}
