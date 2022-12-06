import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoLocationConstraintItem} from './deserializeIntoLocationConstraintItem';
import {LocationConstraintItemCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLocationConstraintItemCollectionResponse(locationConstraintItemCollectionResponse: LocationConstraintItemCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(locationConstraintItemCollectionResponse),
        "value": n => { locationConstraintItemCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLocationConstraintItem) as any ; },
    }
}
