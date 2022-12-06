import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoDataPolicyOperation} from './deserializeIntoDataPolicyOperation';
import {DataPolicyOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDataPolicyOperationCollectionResponse(dataPolicyOperationCollectionResponse: DataPolicyOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(dataPolicyOperationCollectionResponse),
        "value": n => { dataPolicyOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDataPolicyOperation) as any ; },
    }
}
