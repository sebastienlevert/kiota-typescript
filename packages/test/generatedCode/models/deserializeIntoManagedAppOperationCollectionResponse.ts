import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoManagedAppOperation} from './deserializeIntoManagedAppOperation';
import {ManagedAppOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppOperationCollectionResponse(managedAppOperationCollectionResponse: ManagedAppOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(managedAppOperationCollectionResponse),
        "value": n => { managedAppOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoManagedAppOperation) as any ; },
    }
}
