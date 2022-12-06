import {RecordOperationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRecordOperation} from './serializeRecordOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRecordOperationCollectionResponse(writer: SerializationWriter, recordOperationCollectionResponse: RecordOperationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, recordOperationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", recordOperationCollectionResponse.value as any, serializeRecordOperation);
}
