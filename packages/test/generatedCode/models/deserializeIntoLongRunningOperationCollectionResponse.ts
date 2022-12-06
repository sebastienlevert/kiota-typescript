import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoLongRunningOperation} from './deserializeIntoLongRunningOperation';
import {LongRunningOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLongRunningOperationCollectionResponse(longRunningOperationCollectionResponse: LongRunningOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(longRunningOperationCollectionResponse),
        "value": n => { longRunningOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLongRunningOperation) as any ; },
    }
}
