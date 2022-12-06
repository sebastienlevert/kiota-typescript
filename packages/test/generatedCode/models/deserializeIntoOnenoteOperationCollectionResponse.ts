import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoOnenoteOperation} from './deserializeIntoOnenoteOperation';
import {OnenoteOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnenoteOperationCollectionResponse(onenoteOperationCollectionResponse: OnenoteOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(onenoteOperationCollectionResponse),
        "value": n => { onenoteOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOnenoteOperation) as any ; },
    }
}
