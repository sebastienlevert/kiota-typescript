import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTargetResource} from './deserializeIntoTargetResource';
import {TargetResourceCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetResourceCollectionResponse(targetResourceCollectionResponse: TargetResourceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(targetResourceCollectionResponse),
        "value": n => { targetResourceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTargetResource) as any ; },
    }
}
