import {SharedDriveItemCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSharedDriveItem} from './serializeSharedDriveItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharedDriveItemCollectionResponse(writer: SerializationWriter, sharedDriveItemCollectionResponse: SharedDriveItemCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, sharedDriveItemCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", sharedDriveItemCollectionResponse.value as any, serializeSharedDriveItem);
}
