import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoConnectionOperation} from './deserializeIntoConnectionOperation';
import {ConnectionOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConnectionOperationCollectionResponse(connectionOperationCollectionResponse: ConnectionOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(connectionOperationCollectionResponse),
        "value": n => { connectionOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoConnectionOperation) as any ; },
    }
}
