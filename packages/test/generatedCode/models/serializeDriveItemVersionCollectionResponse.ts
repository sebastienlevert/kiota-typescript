import {DriveItemVersionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDriveItemVersion} from './serializeDriveItemVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDriveItemVersionCollectionResponse(writer: SerializationWriter, driveItemVersionCollectionResponse: DriveItemVersionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, driveItemVersionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", driveItemVersionCollectionResponse.value as any, serializeDriveItemVersion);
}
