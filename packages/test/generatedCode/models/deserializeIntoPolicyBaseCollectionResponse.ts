import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPolicyBase} from './deserializeIntoPolicyBase';
import {PolicyBaseCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPolicyBaseCollectionResponse(policyBaseCollectionResponse: PolicyBaseCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(policyBaseCollectionResponse),
        "value": n => { policyBaseCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPolicyBase) as any ; },
    }
}
