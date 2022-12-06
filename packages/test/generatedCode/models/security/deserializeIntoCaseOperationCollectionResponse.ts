import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoCaseOperation} from './deserializeIntoCaseOperation';
import {CaseOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCaseOperationCollectionResponse(caseOperationCollectionResponse: CaseOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(caseOperationCollectionResponse),
        "value": n => { caseOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCaseOperation) as any ; },
    }
}
