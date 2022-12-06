import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUpdateRecordingStatusOperation} from './deserializeIntoUpdateRecordingStatusOperation';
import {UpdateRecordingStatusOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUpdateRecordingStatusOperationCollectionResponse(updateRecordingStatusOperationCollectionResponse: UpdateRecordingStatusOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(updateRecordingStatusOperationCollectionResponse),
        "value": n => { updateRecordingStatusOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUpdateRecordingStatusOperation) as any ; },
    }
}
