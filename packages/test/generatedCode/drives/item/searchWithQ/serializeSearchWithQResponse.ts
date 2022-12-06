import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeDriveItem} from '../../../models/serializeDriveItem';
import {SearchWithQResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchWithQResponse(writer: SerializationWriter, searchWithQResponse: SearchWithQResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, searchWithQResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", searchWithQResponse.value as any, serializeDriveItem);
}
