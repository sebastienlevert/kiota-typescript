import {UpdateRecordingStatusOperationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUpdateRecordingStatusOperation} from './serializeUpdateRecordingStatusOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUpdateRecordingStatusOperationCollectionResponse(writer: SerializationWriter, updateRecordingStatusOperationCollectionResponse: UpdateRecordingStatusOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, updateRecordingStatusOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", updateRecordingStatusOperationCollectionResponse.value as any, serializeUpdateRecordingStatusOperation);
}
