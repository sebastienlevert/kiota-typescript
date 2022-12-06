import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRecordOperation} from './deserializeIntoRecordOperation';
import {RecordOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRecordOperationCollectionResponse(recordOperationCollectionResponse: RecordOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(recordOperationCollectionResponse),
        "value": n => { recordOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRecordOperation) as any ; },
    }
}
