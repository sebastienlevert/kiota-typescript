import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIntegerRange} from './deserializeIntoIntegerRange';
import {IntegerRangeCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIntegerRangeCollectionResponse(integerRangeCollectionResponse: IntegerRangeCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(integerRangeCollectionResponse),
        "value": n => { integerRangeCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIntegerRange) as any ; },
    }
}
