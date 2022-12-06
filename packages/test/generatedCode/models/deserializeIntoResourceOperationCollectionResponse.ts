import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoResourceOperation} from './deserializeIntoResourceOperation';
import {ResourceOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResourceOperationCollectionResponse(resourceOperationCollectionResponse: ResourceOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(resourceOperationCollectionResponse),
        "value": n => { resourceOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoResourceOperation) as any ; },
    }
}
