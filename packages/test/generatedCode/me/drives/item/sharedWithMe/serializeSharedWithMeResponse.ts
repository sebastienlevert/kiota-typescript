import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeDriveItem} from '../../../../models/serializeDriveItem';
import {SharedWithMeResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSharedWithMeResponse(writer: SerializationWriter, sharedWithMeResponse: SharedWithMeResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, sharedWithMeResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", sharedWithMeResponse.value as any, serializeDriveItem);
}
